// components/ui/button.tsx
import { Loader2 } from 'lucide-react';
import React from 'react';
import {cn} from "@/componets/common/utils";

type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'danger';
    loading?: boolean;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
};

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  variant = 'primary',
                                                  loading = false,
                                                  disabled = false,
                                                  onClick,
                                                  type = 'button',
                                                  className = '',
                                              }) => {
    const baseStyles =
        'inline-flex items-center justify-center rounded-lg font-display font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 shadow-lg hover:shadow-xl';

    const variants: Record<string, string> = {
        primary:
            'bg-gradient-to-r from-[#ffde59] to-[#ffde59] text-white hover:from-[#ffde59] hover:to-[#ffde59] focus:ring-[#ffde59]/50',
        secondary:
            'bg-gradient-to-r from-[#8b7355] to-[#cd7f32] text-white hover:from-[#cd7f32] hover:to-[#8b7355] focus:ring-[#8b7355]/50',
        outline:
            'bg-transparent border-2 border-[#ffde59] text-[#ffde59] hover:bg-[#ffde59] hover:text-white focus:ring-[#ffde59]/50',
        danger:
            'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-600 focus:ring-red-500/50',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={cn(baseStyles, variants[variant], className, 'px-6 py-3 text-lg')}
        >
            {loading && <Loader2 className="animate-spin mr-2 w-5 h-5" />}
            {children}
        </button>
    );
};