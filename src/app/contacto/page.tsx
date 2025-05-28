'use client';

import { useState } from 'react';
import {Button} from "@/componets/common/button";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Enviando...');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
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
        <div className="container mx-auto px-4 py-20 flex justify-center">
            <div className="w-full max-w-lg bg-gray-100 rounded-xl shadow-md p-8">
                <h1 className="text-4xl font-bold mb-6 text-main text-center">Contacto</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-main focus:border-main hover:ring-2 hover:ring-main"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-main focus:border-main hover:ring-2 hover:ring-main"
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Asunto"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-main focus:border-main hover:ring-2 hover:ring-main"
                    />
                    <textarea
                        name="message"
                        placeholder="Mensaje"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-main focus:border-main hover:ring-2 hover:ring-main"
                    />
                    <Button type="submit" className="w-full">
                        Enviar mensaje
                    </Button>
                    {status && <p className="text-sm text-center text-main mt-2">{status}</p>}
                </form>
            </div>
        </div>
    );
}