'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const navItems = [
    {   
        label: "inicio",
        href: "/" ,
        submenu:[
            { label: "sobre nosotros", href: "#sobre-nosotros" },
            { label: "nuestros apostolados", href: "#apostolados" },
            { label: "calendario mensual", href: "#calendario-mensual" },
            { label: "proximos eventos", href: "#proximos" },
        ]},
    { 
        label: "nosotros", 
        href: "quienes-somos",
        submenu: [
            { label: "quiénes somos", href: "quienes-somos" },
            { label: "apostolados", href: "apostolados" },
            { label: "retiros", href: "retiros" }
        ]
    },
    { label: "donaciones", href: "donaciones" },
    { label: "contacto", href: "contacto" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);

    const toggleSubmenu = (label: string) => {
        setSubmenuOpen(submenuOpen === label ? null : label);
    };

    return (
        <header className="fixed top-0 z-50 w-full navbar-neoclassical">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo y título */}
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
                    
                    {/* Navegación desktop */}
                    <nav className="hidden lg:flex gap-8 text-sm font-medium">
                        {navItems.map((item) => (
                            <div key={item.href} className="relative">
                                {item.submenu ? (
                                    <div className="relative">
                                        <button
                                            onClick={() => toggleSubmenu(item.label)}
                                            className="group flex items-center gap-1 nav-link-neoclassical"
                                        >
                                            <span className="relative z-10  ">{item.label}</span>
                                            <ChevronDown className={`w-4 h-4 text-[#d4af37] transition-transform duration-200 ${submenuOpen === item.label ? 'rotate-180' : ''}`} />
                                        </button>
                                        
                                        {submenuOpen === item.label && (
                                            <div className="absolute top-full left-0 mt-2 w-48 nav-dropdown-neoclassical py-2 z-50">
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.href}
                                                        href={subItem.href}
                                                        className="block px-4 py-3 text-[#2c1810] hover:text-[#d4af37] hover:bg-[#f5f2ed] transition-colors duration-200 font-display"
                                                        onClick={() => setSubmenuOpen(null)}
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link 
                                        href={item.href} 
                                        className="nav-link-neoclassical"
                                    >
                                        <span className="relative z-10 px-3 py-2">{item.label}</span>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>
                    
                    {/* Botón menú móvil */}
                    <button 
                        onClick={() => setMenuOpen(!menuOpen)} 
                        className="lg:hidden p-2 rounded-md text-[#2c1810] hover:text-[#d4af37] hover:bg-[#f5f2ed] transition-colors duration-200"
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Menú móvil */}
            {menuOpen && (
                <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-[#d4af37] shadow-lg">
                    <div className="flex flex-col px-6 py-4 space-y-2">
                        {navItems.map((item) => (
                            <div key={item.href}>
                                {item.submenu ? (
                                    <div>
                                        <button
                                            onClick={() => toggleSubmenu(item.label)}
                                            className="w-full text-left py-3 px-4 text-[#2c1810] hover:text-[#d4af37] hover:bg-[#f5f2ed] transition-colors duration-200 rounded-md font-display font-semibold flex items-center justify-between"
                                        >
                                            {item.label}
                                            <ChevronDown className={`w-4 h-4 text-[#d4af37] transition-transform duration-200 ${submenuOpen === item.label ? 'rotate-180' : ''}`} />
                                        </button>
                                        {submenuOpen === item.label && (
                                            <div className="ml-4 mt-2 space-y-1">
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.href}
                                                        href={subItem.href}
                                                        className="block py-2 px-4 text-[#8b7355] hover:text-[#d4af37] hover:bg-[#f5f2ed] transition-colors duration-200 rounded-md font-display"
                                                        onClick={() => {
                                                            setMenuOpen(false);
                                                            setSubmenuOpen(null);
                                                        }}
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="block py-3 px-4 text-[#2c1810] hover:text-[#d4af37] hover:bg-[#f5f2ed] transition-colors duration-200 rounded-md font-display font-semibold"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}