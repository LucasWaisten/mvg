import React from "react";

// Utilidades para tipografías según la guía de estilo
export const titleStyles = "font-title font-semibold text-brown-dark";
export const subtitleStyles = "font-subtitle font-black text-red-dark";
export const subtitleRegularStyles = "font-subtitle font-normal text-red-dark";
export const subtitleBoldStyles = "font-subtitle font-bold text-red-dark";
export const subtitleBlackStyles = "font-subtitle font-black text-red-dark";
export const bodyStyles = "font-text font-normal text-text-main";

// Utilidades para colores de la guía de estilo
export const redDarkStyles = "text-red-dark";
export const brownDarkStyles = "text-brown-dark";
export const beigeLightStyles = "text-beige-light";

// Componente para títulos principales
export const Title = ({ 
  children, 
  className, 
  as: Component = "h1" 
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) => (
  <Component className={cn(titleStyles, className)}>
    {children}
  </Component>
);

// Componente para subtítulos (Now Black por defecto)
export const Subtitle = ({ 
  children, 
  className, 
  as: Component = "h2" 
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) => (
  <Component className={cn(subtitleBlackStyles, className)}>
    {children}
  </Component>
);

// Componente para subtítulos regulares
export const SubtitleRegular = ({ 
  children, 
  className, 
  as: Component = "h2" 
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) => (
  <Component className={cn(subtitleRegularStyles, className)}>
    {children}
  </Component>
);

// Componente para subtítulos bold
export const SubtitleBold = ({ 
  children, 
  className, 
  as: Component = "h2" 
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) => (
  <Component className={cn(subtitleBoldStyles, className)}>
    {children}
  </Component>
);

// Componente para subtítulos black
export const SubtitleBlack = ({ 
  children, 
  className, 
  as: Component = "h2" 
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) => (
  <Component className={cn(subtitleBlackStyles, className)}>
    {children}
  </Component>
);

// Componente para texto del cuerpo
export const BodyText = ({ 
  children, 
  className, 
  as: Component = "p" 
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) => (
  <Component className={cn(bodyStyles, className)}>
    {children}
  </Component>
);

// Utilidad para combinar clases
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}