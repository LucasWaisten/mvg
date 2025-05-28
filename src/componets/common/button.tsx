// components/ui/button.tsx
import { Loader2 } from 'lucide-react';
import React from 'react';
import {cn} from "@/componets/common/utils";

type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
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
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants: Record<string, string> = {
        primary:
            'bg-text-main text-white hover:bg-text-main/80 focus:ring-text-main',
        secondary:
            'bg-secondary text-gray-900 hover:bg-secondary/90 focus:ring-secondary',
        danger:
            'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={cn(baseStyles, variants[variant], className, 'px-4 py-2')}
        >
            {loading && <Loader2 className="animate-spin mr-2 w-4 h-4" />}
            {children}
        </button>
    );
};