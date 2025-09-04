"use client";

import { useRouter } from "next/navigation";
import { useLoading } from "@/contexts/LoadingContext";

export function usePageTransition() {
  const router = useRouter();
  const { startLoading, stopLoading } = useLoading();

  const navigateWithLoading = (href: string, showLoading = true) => {
    if (showLoading) {
      startLoading();
      // Tiempo mínimo de loading para que se vea la animación
      setTimeout(() => {
        router.push(href);
        // Dar tiempo para que la nueva página cargue antes de quitar el loading
        setTimeout(stopLoading, 1000);
      }, 1200);
    } else {
      router.push(href);
    }
  };

  const navigateWithLoadingAndCallback = (
    href: string, 
    callback?: () => void, 
    showLoading = true
  ) => {
    if (showLoading) {
      startLoading();
      setTimeout(() => {
        router.push(href);
        if (callback) callback();
        setTimeout(stopLoading, 1000);
      }, 1200);
    } else {
      router.push(href);
      if (callback) callback();
    }
  };

  // Función para iniciar loading manualmente
  const startPageLoading = () => {
    startLoading();
  };

  // Función para detener loading manualmente
  const stopPageLoading = () => {
    stopLoading();
  };

  return { 
    navigateWithLoading, 
    navigateWithLoadingAndCallback,
    startPageLoading,
    stopPageLoading,
    startLoading,
    stopLoading 
  };
}
