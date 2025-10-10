'use client';

import { useState } from 'react';
import {Button} from "@/componets/common/button";
import { Subtitle2, Title } from "@/componets/common/title";
import { PageTransition } from "@/componets/common/PageTransition";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    // Función para sanitizar y validar entrada
    const sanitizeInput = (input: string): string => {
        return input
            .trim()
            .replace(/[<>]/g, '') // Remover caracteres HTML básicos
            .replace(/javascript:/gi, '') // Remover javascript:
            .replace(/on\w+=/gi, '') // Remover event handlers
            .substring(0, 1000); // Limitar longitud
    };

    // Función para validar email
    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) && email.length <= 254;
    };

    // Función para detectar contenido malicioso
    const containsMaliciousContent = (text: string): boolean => {
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
            /@import/gi
        ];
        
        return maliciousPatterns.some(pattern => pattern.test(text));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const sanitizedValue = sanitizeInput(value);
        
        // Validación adicional para email
        if (name === 'email' && value && !isValidEmail(value)) {
            setStatus('Por favor ingresa un email válido');
            return;
        }
        
        // Detectar contenido malicioso
        if (containsMaliciousContent(value)) {
            setStatus('El contenido contiene caracteres no permitidos');
            return;
        }
        
        setFormData({ ...formData, [name]: sanitizedValue });
        setStatus(''); // Limpiar mensaje de error
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Enviando...');

        // Validaciones finales antes de enviar
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatus('Por favor completa todos los campos obligatorios');
            return;
        }

        if (!isValidEmail(formData.email)) {
            setStatus('Por favor ingresa un email válido');
            return;
        }

        if (containsMaliciousContent(formData.name) || 
            containsMaliciousContent(formData.email) || 
            containsMaliciousContent(formData.subject) || 
            containsMaliciousContent(formData.message)) {
            setStatus('El formulario contiene contenido no permitido');
            return;
        }

        // Sanitizar datos finales
        const sanitizedData = {
            name: sanitizeInput(formData.name),
            email: sanitizeInput(formData.email),
            subject: sanitizeInput(formData.subject),
            message: sanitizeInput(formData.message)
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest' // Para identificar requests AJAX
                },
                body: JSON.stringify(sanitizedData),
            });

            const data = await res.json();
            if (res.ok) {
                setStatus('¡Mensaje enviado correctamente!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus(data.error || 'Hubo un error al enviar. Intenta nuevamente.');
            }
        } catch (error) {
            console.error(error);
            setStatus('Hubo un error al enviar. Intenta nuevamente.');
        }
    };

    return (
        <PageTransition variant="slide">
            <div className="min-h-screen bg-gradient-to-b from-[#f8f6f3] to-[#f5f2ed] py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <Title title="Contacto" />
                            <div className="mt-8 text-center">
                                <span className="text-[#ffde59] text-6xl">❦</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Información de contacto */}
                            <div className="space-y-8">
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#ffde59]/20 p-8">
                                    <Subtitle2 subtitle="Conectate con nosotros" />
                                    
                                    <div className="space-y-6">
                                        <div className="flex items-center space-x-4 p-4 bg-[#faf9f7] rounded-lg">
                                            <div className="w-12 h-12 bg-[#ffde59] rounded-full flex items-center justify-center">
                                                <span className="text-white text-xl">✉</span>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[#2c1810]">Email</p>
                                                <p className="text-[#8b7355]">difusion.mvg@gmail.com</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center space-x-4 p-4 bg-[#faf9f7] rounded-lg">
                                            <div className="w-12 h-12 bg-[#ffde59] rounded-full flex items-center justify-center">
                                                <span className="text-white text-xl">📍</span>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[#2c1810]">Ubicación</p>
                                                <a href="https://www.google.com/maps/dir/Convento+Santo+Domingo+-+Bas%C3%ADlica%E2%80%A6/Defensa+422+C1065+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6128229,-58.3727173,362m/data=!3m1!1e3!4m13!4m12!1m5!1m1!1s0x95bccad52d1cd9df:0xa97592e9cd43434c!2m2!1d-58.3718533!2d-34.6127127!1m5!1m1!1s0x95bccad532b732b1:0xbcd76005f74d313!2m2!1d-58.3717266!2d-34.6127473?entry=ttu&g_ep=EgoyMDI1MDgwNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="text-[#8b7355]">Convento Santo Domingo</a>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center space-x-4 p-4 bg-[#faf9f7] rounded-lg">
                                            <div className="w-12 h-12 bg-[#ffde59] rounded-full flex items-center justify-center">
                                                <span className="text-white text-xl">⏰</span>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[#2c1810]">Horarios</p>
                                                <p className="text-[#8b7355]">Reuniones semanales</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Formulario */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#ffde59]/20 p-8">
                                <h3 className="text-2xl font-display font-bold text-[#2c1810] mb-8 text-center">
                                    Envíanos un mensaje
                                </h3>
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Tu nombre"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-4 rounded-lg bg-[#faf9f7] border-2 border-[#e8e0d5] focus:outline-none focus:border-[#ffde59] focus:ring-2 focus:ring-[#ffde59]/20 transition-all duration-300 text-[#2c1810] placeholder-[#8b7355]"
                                        />
                                    </div>
                                    
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Tu correo electrónico"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-4 rounded-lg bg-[#faf9f7] border-2 border-[#e8e0d5] focus:outline-none focus:border-[#ffde59] focus:ring-2 focus:ring-[#ffde59]/20 transition-all duration-300 text-[#2c1810] placeholder-[#8b7355]"
                                        />
                                    </div>
                                    
                                    <div>
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Asunto"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full p-4 rounded-lg bg-[#faf9f7] border-2 border-[#e8e0d5] focus:outline-none focus:border-[#ffde59] focus:ring-2 focus:ring-[#ffde59]/20 transition-all duration-300 text-[#2c1810] placeholder-[#8b7355]"
                                        />
                                    </div>
                                    
                                    <div>
                                        <textarea
                                            name="message"
                                            placeholder="Tu mensaje"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            required
                                            className="w-full p-4 rounded-lg bg-[#faf9f7] border-2 border-[#e8e0d5] focus:outline-none focus:border-[#ffde59] focus:ring-2 focus:ring-[#ffde59]/20 transition-all duration-300 text-[#2c1810] placeholder-[#8b7355] resize-none"
                                        />
                                    </div>
                                    
                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-[#ffde59] to-[#ffde59] text-white font-display font-semibold py-4 px-8 rounded-lg text-xl hover:from-[#ffde59] hover:to-[#ffde59] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                    >
                                        Enviar mensaje
                                    </button>
                                    
                                    {status && (
                                        <div className="text-center p-4 rounded-lg bg-[#faf9f7] border border-[#ffde59]/30">
                                            <p className="text-[#2c1810] font-medium">{status}</p>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}