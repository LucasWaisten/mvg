"use client";

import { useEffect, useRef } from "react";
import { useLoading } from "@/contexts/LoadingContext";

export function InitialLoadingHandler() {
  const { startLoading, stopLoading } = useLoading();
  const hasInitialized = useRef(false);

  useEffect(() => {
    // Solo ejecutar una vez al montar el componente
    if (hasInitialized.current) return;
    
    hasInitialized.current = true;
    
    // Iniciar loading inicial
    startLoading();
    
    // Simular tiempo de carga inicial
    const timer = setTimeout(() => {
      stopLoading();
    }, 2000); // 2 segundos de loading inicial

    return () => clearTimeout(timer);
  }, []); // Dependencias vacías

  return null; // Este componente no renderiza nada
}
