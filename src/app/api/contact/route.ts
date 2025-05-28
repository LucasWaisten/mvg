import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Faltan datos' }, { status: 400 });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: 'waistenlucas@gmail.com',
            subject: subject || 'Nuevo mensaje de contacto',
            html: `
        <h2 style="color: #3B82F6;">Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Correo enviado correctamente' });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 });
    }
}