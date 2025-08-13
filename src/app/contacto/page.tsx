'use client';

import { useState } from 'react';
import {Button} from "@/componets/common/button";
import { Title } from "@/componets/common/title";
import { PageTransition } from "@/componets/common/PageTransition";

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
        <PageTransition variant="slide">
            <div className="min-h-screen bg-gradient-to-b from-[#f8f6f3] to-[#f5f2ed] py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <Title title="Contacto" />
                            <div className="mt-8 text-center">
                                <span className="text-[#d4af37] text-6xl">❦</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Información de contacto */}
                            <div className="space-y-8">
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-8">
                                    <h3 className="text-2xl font-display font-bold text-[#2c1810] mb-6 text-center">
                                        Conectate con nosotros
                                    </h3>
                                    
                                    <div className="space-y-6">
                                        <div className="flex items-center space-x-4 p-4 bg-[#faf9f7] rounded-lg">
                                            <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                                                <span className="text-white text-xl">✉</span>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[#2c1810]">Email</p>
                                                <p className="text-[#8b7355]">difusion.mvg@gmail.com</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center space-x-4 p-4 bg-[#faf9f7] rounded-lg">
                                            <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                                                <span className="text-white text-xl">📍</span>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[#2c1810]">Ubicación</p>
                                                <a href="https://www.google.com/maps/dir/Convento+Santo+Domingo+-+Bas%C3%ADlica%E2%80%A6/Defensa+422+C1065+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6128229,-58.3727173,362m/data=!3m1!1e3!4m13!4m12!1m5!1m1!1s0x95bccad52d1cd9df:0xa97592e9cd43434c!2m2!1d-58.3718533!2d-34.6127127!1m5!1m1!1s0x95bccad532b732b1:0xbcd76005f74d313!2m2!1d-58.3717266!2d-34.6127473?entry=ttu&g_ep=EgoyMDI1MDgwNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="text-[#8b7355]">Convento Santo Domingo</a>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center space-x-4 p-4 bg-[#faf9f7] rounded-lg">
                                            <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                                                <span className="text-white text-xl">⏰</span>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[#2c1810]">Horarios</p>
                                                <p className="text-[#8b7355]">Reuniones semanales</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-[#faf9f7] to-[#e8e0d5] rounded-2xl shadow-2xl border border-[#d4af37]/30 p-8 text-center">
                                    <h4 className="text-xl font-display font-semibold text-[#2c1810] mb-4">
                                        ¿Te interesa participar?
                                    </h4>
                                    <p className="text-[#8b7355] leading-relaxed">
                                        Si tenés entre 18 y 35 años y querés vivir una experiencia profunda de fe, 
                                        te invitamos a contactarnos. ¡Estamos para acompañarte en tu camino!
                                    </p>
                                </div>
                            </div>

                            {/* Formulario */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-8">
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
                                            className="w-full p-4 rounded-lg bg-[#faf9f7] border-2 border-[#e8e0d5] focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300 text-[#2c1810] placeholder-[#8b7355]"
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
                                            className="w-full p-4 rounded-lg bg-[#faf9f7] border-2 border-[#e8e0d5] focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300 text-[#2c1810] placeholder-[#8b7355]"
                                        />
                                    </div>
                                    
                                    <div>
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Asunto"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full p-4 rounded-lg bg-[#faf9f7] border-2 border-[#e8e0d5] focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300 text-[#2c1810] placeholder-[#8b7355]"
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
                                            className="w-full p-4 rounded-lg bg-[#faf9f7] border-2 border-[#e8e0d5] focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300 text-[#2c1810] placeholder-[#8b7355] resize-none"
                                        />
                                    </div>
                                    
                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white font-display font-semibold py-4 px-8 rounded-lg text-xl hover:from-[#b8860b] hover:to-[#d4af37] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                    >
                                        Enviar mensaje
                                    </button>
                                    
                                    {status && (
                                        <div className="text-center p-4 rounded-lg bg-[#faf9f7] border border-[#d4af37]/30">
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