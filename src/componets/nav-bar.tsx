'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
    { label: "Inicio", href: "/" },
    { label: "¿Quiénes somos?", href: "quienes-somos" },
    { label: "Retiros", href: "retiros" },
    { label: "Apostolados", href: "apostolados" },
    { label: "Contacto", href: "contacto" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-sm border-b border-gray-200 shadow-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <nav>
                        <Link href="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight text-gray-900">
                            <Image
                                src="/mvg-removebg.webp"
                                alt="Logo MVG"
                                width={80}
                                height={80}
                                className="h-20 w-auto object-contain"
                            />
                            Movimiento de Vida en Gracia
                        </Link>
                    </nav>
                    <nav className="hidden md:flex gap-6 text-sm font-medium">
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} className="group relative text-gray-700 hover:text-text-main transition">
                                <span className="relative z-10">{item.label}</span>
                                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-text-main transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="flex flex-col px-4 py-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="py-2 text-gray-700 hover:text-indigo-600 transition"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}