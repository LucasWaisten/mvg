'use client';

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePageTransition } from "@/hooks/usePageTransition";

const navItems = [
    {   
        label: "inicio",
        href: "/" ,
        submenu:[
            { label: "sobre nosotros", href: "#sobre-nosotros" },
            { label: "nuestros apostolados", href: "#apostolados" },                    
            { label: "calendario mensual", href: "#calendario-mensual" },
        ]},
    { 
        label: "nosotros", 
        href: "quienes-somos",
        submenu: [
            { label: "quiénes somos", href: "quienes-somos" },
            { label: "apostolados", href: "apostolados" },
            { label: "retiros", href: "retiros" },
        ]
    },
    { label: "donaciones", href: "donaciones" },
    { label: "contacto", href: "contacto" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);
    const { navigateWithLoading } = usePageTransition();

    const toggleSubmenu = (label: string) => {
        setSubmenuOpen(submenuOpen === label ? null : label);
    };

    const handleNavigation = (href: string, isAnchor = false) => {
        // Detectar si es navegación a otra página
        const isExternalPage = href.includes('/') && href !== '/';
        const isSamePageAnchor = isAnchor && !isExternalPage;
        
        // Detectar si es un anchor que pertenece al submenú de inicio
        const isInicioAnchor = isAnchor && (href === '#sobre-nosotros' || href === '#apostolados' || href === '#calendario-mensual');
        
        if (isSamePageAnchor && !isInicioAnchor) {
            // Para enlaces internos en la misma página (anchors), hacer scroll suave
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            setMenuOpen(false);
            setSubmenuOpen(null);
            return;
        }
        
        if (isInicioAnchor) {
            // Para anchors del submenú de inicio, navegar a la página principal con el anchor
            navigateWithLoading(`/${href}`, true);
            setMenuOpen(false);
            setSubmenuOpen(null);
            return;
        }
        
        // Para navegación a otras páginas (con o sin anchor), mostrar loading
        navigateWithLoading(href, true);
        setMenuOpen(false);
        setSubmenuOpen(null);
    };

    // Animaciones para el menú móvil
    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut" as const
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut" as const
            }
        }
    };

    // Animaciones para los submenús móviles
    const mobileSubmenuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.2,
                ease: "easeInOut" as const
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.2,
                ease: "easeInOut" as const
            }
        }
    };

    // Animaciones para los submenús desktop
    const desktopSubmenuVariants = {
        closed: {
            opacity: 0,
            y: -10,
            scale: 0.95,
            transition: {
                duration: 0.2,
                ease: "easeInOut" as const
            }
        },
        open: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.2,
                ease: "easeInOut" as const
            }
        }
    };

    // Animación para el icono de chevron
    const chevronVariants = {
        closed: { rotate: 0 },
        open: { rotate: 180 }
    };

    return (
        <header className="fixed top-0 z-50 w-full navbar-neoclassical">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo y título */}
                    <nav>
                        <button 
                            onClick={() => handleNavigation("/")}
                            className="flex items-center  gap-3 text-xl font-semibold tracking-tight text-[#2c1810] hover:text-[#d4af37] transition-colors duration-300"
                        >
                            <div className="relative">
                                <Image
                                    src="/mvg-removebg.webp"
                                    alt="Logo MVG"
                                    width={70}
                                    height={70}
                                    className="h-16 w-auto md:h-22 md:w-auto object-contain cursor-pointer"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-display text-xl md:text-2xl font-bold">Movimiento de Vida en Gracia</span>
                                <span className="text-xs md:text-sm text-[#8b7355] font-light">Jóvenes evangelizando jóvenes</span>
                            </div>
                        </button>
                    </nav>
                    
                    {/* Navegación desktop */}
                    <nav className="hidden lg:flex gap-8 text-sm font-medium">
                        {navItems.map((item) => (
                            <div key={item.href} className="relative">
                                {item.submenu ? (
                                    <div className="relative">
                                        <button
                                            onClick={() => toggleSubmenu(item.label)}
                                            className="group flex items-center gap-1 nav-link-neoclassical cursor-pointer"
                                        >
                                            <span className="relative z-10">{item.label}</span>
                                            <motion.div
                                                variants={chevronVariants}
                                                animate={submenuOpen === item.label ? "open" : "closed"}
                                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                            >
                                                <ChevronDown className="w-4 h-4 text-[#d4af37]" />
                                            </motion.div>
                                        </button>
                                        
                                        <AnimatePresence>
                                            {submenuOpen === item.label && (
                                                <motion.div
                                                    initial="closed"
                                                    animate="open"
                                                    exit="closed"
                                                    variants={desktopSubmenuVariants}
                                                    className="absolute top-full left-0 mt-2 w-48 nav-dropdown-neoclassical py-2 z-50"
                                                >
                                                    {item.submenu.map((subItem, index) => (
                                                        <motion.div
                                                            key={subItem.href}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ 
                                                                duration: 0.2, 
                                                                delay: index * 0.05,
                                                                ease: "easeInOut"
                                                            }}
                                                        >
                                                            <button
                                                                onClick={() => handleNavigation(subItem.href, subItem.href.startsWith('#'))}
                                                                className="block w-full text-left px-4 py-3 text-[#2c1810] hover:text-[#d4af37] hover:bg-[#f5f2ed] transition-colors duration-200 font-sans cursor-pointer"
                                                            >
                                                                {subItem.label}
                                                            </button>
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <button 
                                        onClick={() => handleNavigation(item.href)}
                                        className="nav-link-neoclassical cursor-pointer"
                                    >
                                        <span className="relative z-10 px-3 py-2">{item.label}</span>
                                    </button>
                                )}
                            </div>
                        ))}
                    </nav>
                    
                    {/* Botón menú móvil */}
                    <button 
                        onClick={() => setMenuOpen(!menuOpen)} 
                        className="lg:hidden p-2 rounded-md text-[#2c1810] hover:text-[#d4af37] hover:bg-[#f5f2ed] transition-colors duration-200 cursor-pointer"
                    >
                        <motion.div
                            animate={menuOpen ? "open" : "closed"}
                            transition={{ duration: 0.2 }}
                        >
                            {menuOpen ? <X size={28} /> : <Menu size={28} />}
                        </motion.div>
                    </button>
                </div>
            </div>

            {/* Menú móvil */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={mobileMenuVariants}
                        className="lg:hidden bg-white/98 backdrop-blur-md border-t border-[#d4af37] shadow-lg overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-4 space-y-2">
                            {navItems.map((item, itemIndex) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        duration: 0.3, 
                                        delay: itemIndex * 0.1,
                                        ease: "easeInOut"
                                    }}
                                >
                                    {item.submenu ? (
                                        <div>
                                            <button
                                                onClick={() => toggleSubmenu(item.label)}
                                                className="w-full text-left py-3 px-4 text-[#2c1810] hover:text-[#d4af37] hover:bg-[#f5f2ed] transition-colors duration-200 rounded-md font-sans font-semibold flex items-center justify-between cursor-pointer"
                                            >
                                                {item.label}
                                                <motion.div
                                                    variants={chevronVariants}
                                                    animate={submenuOpen === item.label ? "open" : "closed"}
                                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                                >
                                                    <ChevronDown className="w-4 h-4 text-[#d4af37]" />
                                                </motion.div>
                                            </button>
                                            <AnimatePresence>
                                                {submenuOpen === item.label && (
                                                    <motion.div
                                                        initial="closed"
                                                        animate="open"
                                                        exit="closed"
                                                        variants={mobileSubmenuVariants}
                                                        className="ml-4 mt-2 space-y-1 overflow-hidden"
                                                    >
                                                        {item.submenu.map((subItem, subIndex) => (
                                                            <motion.div
                                                                key={subItem.href}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ 
                                                                    duration: 0.2, 
                                                                    delay: subIndex * 0.05,
                                                                    ease: "easeInOut"
                                                                }}
                                                            >
                                                                <button
                                                                    onClick={() => handleNavigation(subItem.href, subItem.href.startsWith('#'))}
                                                                    className="block w-full text-left py-2 px-4 text-[#8b7355] hover:text-[#d4af37] hover:bg-[#f5f2ed] transition-colors duration-200 rounded-md font-sans cursor-pointer"
                                                                >
                                                                    {subItem.label}
                                                                </button>
                                                            </motion.div>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => handleNavigation(item.href)}
                                            className="block w-full text-left py-3 px-4 text-[#2c1810] hover:text-[#d4af37] hover:bg-[#f5f2ed] transition-colors duration-200 rounded-md font-sans font-semibold cursor-pointer"
                                        >
                                            {item.label}
                                        </button>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}