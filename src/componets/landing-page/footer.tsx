'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
export default function Footer() {
    const router = useRouter();
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText('difusion.mvg@gmail.com');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = 'difusion.mvg@gmail.com';
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };
    return (
        <footer className="bg-[#492402] text-white py-6 sm:py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center space-y-6 sm:flex-row sm:items-center sm:justify-center sm:space-y-0 sm:gap-8 md:gap-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 order-1 sm:order-1">
                        <Image 
                            src="/mvg-white.svg" 
                            onClick={() => router.push('/')} 
                            alt="MVG Logo" 
                            width={120} 
                            height={60}
                            className="w-20 sm:w-20 md:w-28 cursor-pointer"
                        />
                    </div>

                    {/* Location */}
                    <div className="text-center order-2 sm:order-2 sm:text-left">
                        <h3 className="font-text mb-2 text-sm sm:text-base">Ubicación</h3>
                        <p className="text-xs sm:text-sm opacity-90">
                            <a href="https://www.google.com/maps/dir/Convento+Santo+Domingo+-+Bas%C3%ADlica%E2%80%A6/Defensa+422+C1065+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6128229,-58.3727173,362m/data=!3m1!1e3!4m13!4m12!1m5!1m1!1s0x95bccad52d1cd9df:0xa97592e9cd43434c!2m2!1d-58.3718533!2d-34.6127127!1m5!1m1!1s0x95bccad532b732b1:0xbcd76005f74d313!2m2!1d-58.3717266!2d-34.6127473?entry=ttu&g_ep=EgoyMDI1MDgwNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="hover:underline transition-colors" rel="noopener noreferrer">
                                Buenos Aires<br />
                                Convento San Pedro Telmo<br />
                                Defensa 422 C1065 
                            </a>
                        </p>
                    </div>

                    {/* Social Media */}
                    <div className="text-center order-3 sm:order-3 sm:text-left">
                        <h3 className="font-text mb-3 sm:mb-4 text-sm sm:text-base">Síguenos</h3>
                        <div className="flex justify-center sm:justify-start">
                            <ul className="social-list flex gap-3">
                                <li>
                                    <a href="https://www.instagram.com/difusion.mvg" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                        <i className="fab fa-instagram icon"></i>
                                    </a>
                                </li>
                                <li>
                                    <button type="button" onClick={handleCopyEmail} className="social-link" aria-label="Copiar email" title="Copiar email">
                                        <i className="fas fa-envelope icon"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        {copied && (
                            <div className="toast-notification">
                                <div className="toast-content">
                                    <i className="fas fa-check-circle toast-icon"></i>
                                    <span>Email copiado: difusion.mvg@gmail.com</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
                    <p className="text-xs sm:text-sm opacity-80">
                        &copy; {new Date().getFullYear()} Todos los derechos reservados.
                    </p>
                </div>
            </div>

            <style jsx>{`
                .social-list {
                    display: flex;
                    gap: 12px;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: nowrap;
                    max-width: 100%;
                }
                
                .social-link {
                    width: 40px;
                    height: 40px;
                    background-color: #fff;
                    text-align: center;
                    line-height: 40px;
                    font-size: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    position: relative;
                    overflow: hidden;
                    border: 2px solid #fff;
                    padding: 0;
                    z-index: 1;
                    transition: all 0.3s ease;
                    flex-shrink: 0;
                }
                
                @media (min-width: 640px) {
                    .social-link {
                        width: 50px;
                        height: 50px;
                        line-height: 50px;
                        font-size: 20px;
                    }
                }

                .social-link .icon {
                    position: relative;
                    color: #492402;
                    transition: .5s;
                    z-index: 3;
                }

                .social-link:hover .icon {
                    color: #fff;
                    transform: rotateY(360deg);
                }

                .social-link:before {
                    content: "";
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    transition: .5s;
                    z-index: 2;
                }

                .social-link:hover:before {
                    top: 0;
                }

                /* Brand colors using UL child positions */
                .social-list li:nth-child(1) .social-link:before {
                    background: #e4405f; /* Instagram */
                }
                .social-list li:nth-child(2) .social-link:before {
                    background: #ea4335; /* Email */
                }

                /* Toast Notification Styles */
                .toast-notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    z-index: 1000;
                    animation: slideInRight 0.3s ease-out;
                }

                .toast-content {
                    background: #2d5016;
                    color: white;
                    padding: 12px 16px;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 14px;
                    font-weight: 500;
                    border: 1px solid #4a7c59;
                    min-width: 280px;
                    max-width: 320px;
                }

                .toast-icon {
                    color: #4ade80;
                    font-size: 16px;
                    flex-shrink: 0;
                }

                @keyframes slideInRight {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                @keyframes slideOutRight {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }

                /* Mobile responsive */
                @media (max-width: 640px) {
                    .toast-notification {
                        top: 10px;
                        right: 10px;
                        left: 10px;
                    }
                    
                    .toast-content {
                        min-width: auto;
                        max-width: none;
                        font-size: 13px;
                        padding: 10px 14px;
                    }
                }
            `}</style>
        </footer>
    );
}