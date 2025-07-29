'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
    { label: "Inicio", href: "/" },
    { label: "¿Quiénes somos?", href: "quienes-somos" },
    { label: "Apostolados", href: "apostolados" },
    { label: "Retiros", href: "retiros" },
    { label: "Contacto", href: "contacto" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b-2 border-[#d4af37] shadow-lg">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <nav>
                        <Link href="/" className="flex items-center gap-3 text-xl font-semibold tracking-tight text-[#2c1810] hover:text-[#d4af37] transition-colors duration-300">
                            <div className="relative">
                                <Image
                                    src="/mvg-removebg.webp"
                                    alt="Logo MVG"
                                    width={70}
                                    height={70}
                                    className="h-16 w-auto object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-display text-2xl font-bold">Movimiento de Vida en Gracia</span>
                                <span className="text-sm text-[#8b7355] font-light">Jóvenes evangelizando jóvenes</span>
                            </div>
                        </Link>
                    </nav>
                    
                    <nav className="hidden lg:flex gap-8 text-sm font-medium">
                        {navItems.map((item) => (
                            <Link 
                                key={item.href} 
                                href={item.href} 
                                className="group relative text-[#2c1810] hover:text-[#d4af37] transition-colors duration-300 font-display"
                            >
                                <span className="relative z-10 px-3 py-2">{item.label}</span>
                                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#d4af37] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                <span className="absolute left-0 top-0 h-0.5 w-0 bg-[#b8860b] transition-all duration-300 ease-in-out group-hover:w-full delay-75"></span>
                            </Link>
                        ))}
                    </nav>
                    
                    <button 
                        onClick={() => setMenuOpen(!menuOpen)} 
                        className="lg:hidden p-2 rounded-md text-[#2c1810] hover:text-[#d4af37] hover:bg-[#f5f2ed] transition-colors duration-200"
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-[#d4af37] shadow-lg">
                    <div className="flex flex-col px-6 py-4 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="py-3 px-4 text-[#2c1810] hover:text-[#d4af37] hover:bg-[#f5f2ed] transition-colors duration-200 rounded-md font-display"
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