import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Rate limiting simple (en producción usar Redis o similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 5 * 60 * 1000; // 5 minutos (reducido para pruebas)
const RATE_LIMIT_MAX_REQUESTS = 3; // máximo 3 requests por IP

// Función para limpiar rate limiting (solo para desarrollo)
function clearRateLimit() {
    rateLimitMap.clear();
    console.log('Rate limiting limpiado');
}

// Función para sanitizar texto
function sanitizeText(text: string): string {
    return text
        .trim()
        .replace(/[<>]/g, '') // Remover HTML básico
        .replace(/javascript:/gi, '') // Remover javascript:
        .replace(/vbscript:/gi, '') // Remover vbscript:
        .replace(/on\w+=/gi, '') // Remover event handlers
        .replace(/<script/gi, '') // Remover scripts
        .replace(/<iframe/gi, '') // Remover iframes
        .replace(/<object/gi, '') // Remover objects
        .replace(/<embed/gi, '') // Remover embeds
        .replace(/eval\(/gi, '') // Remover eval
        .replace(/expression\(/gi, '') // Remover expression
        .substring(0, 1000); // Limitar longitud
}

// Función para validar email
function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
}

// Función para detectar contenido malicioso
function containsMaliciousContent(text: string): boolean {
    const maliciousPatterns = [
        /<script/gi,
        /javascript:/gi,
        /vbscript:/gi,
        /onload=/gi,
        /onerror=/gi,
        /onclick=/gi,
        /<iframe/gi,
        /<object/gi,
        /<embed/gi,
        /<link/gi,
        /<meta/gi,
        /eval\(/gi,
        /expression\(/gi,
        /url\(/gi,
        /@import/gi,
        /document\.cookie/gi,
        /document\.write/gi,
        /window\.location/gi,
        /alert\(/gi,
        /confirm\(/gi,
        /prompt\(/gi
    ];
    
    return maliciousPatterns.some(pattern => pattern.test(text));
}

// Función para rate limiting
function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const userLimit = rateLimitMap.get(ip);
    
    console.log(`Rate limit check para IP: ${ip}`);
    console.log(`User limit actual:`, userLimit);
    
    if (!userLimit) {
        // Primer request para esta IP
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        console.log(`Rate limit: Nuevo usuario ${ip}, count: 1, reset en: ${new Date(now + RATE_LIMIT_WINDOW).toISOString()}`);
        return true;
    }
    
    if (now > userLimit.resetTime) {
        // Ventana de tiempo expirada, resetear
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        console.log(`Rate limit: Reset para ${ip}, count: 1, reset en: ${new Date(now + RATE_LIMIT_WINDOW).toISOString()}`);
        return true;
    }
    
    if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
        console.log(`Rate limit: Usuario ${ip} bloqueado, count: ${userLimit.count}/${RATE_LIMIT_MAX_REQUESTS}, reset en: ${new Date(userLimit.resetTime).toISOString()}`);
        return false;
    }
    
    userLimit.count++;
    console.log(`Rate limit: Usuario ${ip}, count: ${userLimit.count}/${RATE_LIMIT_MAX_REQUESTS}, reset en: ${new Date(userLimit.resetTime).toISOString()}`);
    return true;
}

export async function POST(req: Request) {
    try {
        console.log('=== NUEVO REQUEST DE CONTACTO ===');
        
        // Obtener IP del cliente
        const forwarded = req.headers.get('x-forwarded-for');
        const ip = forwarded ? forwarded.split(',')[0] : req.headers.get('x-real-ip') || 'unknown';
        console.log(`IP del cliente: ${ip}`);
        
        // Verificar rate limiting
        if (!checkRateLimit(ip)) {
            console.log(`Rate limit excedido para IP: ${ip}`);
            return NextResponse.json(
                { error: 'Demasiadas solicitudes. Intenta nuevamente en 5 minutos.' }, 
                { status: 429 }
            );
        }

        // Verificar que sea una request AJAX
        const requestedWith = req.headers.get('x-requested-with');
        if (requestedWith !== 'XMLHttpRequest') {
            return NextResponse.json({ error: 'Método no permitido' }, { status: 405 });
        }

        const body = await req.json();
        console.log('Body recibido:', JSON.stringify(body, null, 2));
        
        const { name, email, subject, message } = body;

        // Validaciones básicas
        if (!name || !email || !message) {
            console.log('Validación fallida: Faltan datos obligatorios');
            return NextResponse.json({ error: 'Faltan datos obligatorios' }, { status: 400 });
        }

        // Validar tipos de datos
        if (typeof name !== 'string' || typeof email !== 'string' || 
            typeof message !== 'string' || (subject && typeof subject !== 'string')) {
            return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 });
        }

        // Validar longitudes
        if (name.length > 100 || email.length > 254 || 
            (subject && subject.length > 200) || message.length > 1000) {
            return NextResponse.json({ error: 'Datos demasiado largos' }, { status: 400 });
        }

        // Validar email
        if (!isValidEmail(email)) {
            return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
        }

        // Detectar contenido malicioso
        if (containsMaliciousContent(name) || containsMaliciousContent(email) || 
            (subject && containsMaliciousContent(subject)) || containsMaliciousContent(message)) {
            return NextResponse.json({ error: 'Contenido no permitido detectado' }, { status: 400 });
        }

        // Sanitizar datos
        const sanitizedName = sanitizeText(name);
        const sanitizedEmail = sanitizeText(email);
        const sanitizedSubject = subject ? sanitizeText(subject) : '';
        const sanitizedMessage = sanitizeText(message);

        // Verificar que las variables de entorno estén configuradas
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Variables de entorno de email no configuradas');
            return NextResponse.json({ error: 'Error de configuración del servidor' }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Escapar HTML para prevenir XSS en el email
        const escapeHtml = (text: string): string => {
            return text
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        };

        const mailOptions = {
            from: `MVG Contacto <${process.env.EMAIL_USER}>`,
            to: 'difusion.mvg@gmail.com',
            replyTo: sanitizedEmail,
            subject: sanitizedSubject || 'Nuevo mensaje de contacto',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #2c1810; border-bottom: 2px solid #ffde59; padding-bottom: 10px;">
                        Nuevo mensaje de contacto - MVG
                    </h2>
                    <div style="background-color: #f8f6f3; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong>Nombre:</strong> ${escapeHtml(sanitizedName)}</p>
                        <p style="margin: 10px 0;"><strong>Email:</strong> ${escapeHtml(sanitizedEmail)}</p>
                        ${sanitizedSubject ? `<p style="margin: 10px 0;"><strong>Asunto:</strong> ${escapeHtml(sanitizedSubject)}</p>` : ''}
                    </div>
                    <div style="background-color: #faf9f7; padding: 20px; border-radius: 8px;">
                        <p style="margin: 10px 0;"><strong>Mensaje:</strong></p>
                        <p style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(sanitizedMessage)}</p>
                    </div>
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e8e0d5; color: #8b7355; font-size: 12px;">
                        <p>Este mensaje fue enviado desde el formulario de contacto de MVG</p>
                        <p>IP del remitente: ${ip}</p>
                        <p>Fecha: ${new Date().toLocaleString('es-ES')}</p>
                    </div>
                </div>
            `,
        } as const;

        await transporter.sendMail(mailOptions);

        // Log del envío exitoso (sin datos sensibles)
        console.log(`Email enviado exitosamente desde IP: ${ip} a las ${new Date().toISOString()}`);

        return NextResponse.json({ message: 'Correo enviado correctamente' });

    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 });
    }
}

// Endpoint para limpiar rate limiting (solo para desarrollo)
export async function DELETE() {
    clearRateLimit();
    return NextResponse.json({ message: 'Rate limiting limpiado' });
}