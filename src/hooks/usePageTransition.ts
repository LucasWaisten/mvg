"use client";

import { useRouter } from "next/navigation";
import { useLoading } from "@/contexts/LoadingContext";

export function usePageTransition() {
  const router = useRouter();
  const { startLoading, stopLoading } = useLoading();

  const navigateWithLoading = (href: string, showLoading = true) => {
    if (showLoading) {
      startLoading();
      setTimeout(() => {
        router.push(href);
        setTimeout(stopLoading, 500); // Dar tiempo para que la página cargue
      }, 800);
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
        setTimeout(stopLoading, 500);
      }, 800);
    } else {
      router.push(href);
      if (callback) callback();
    }
  };

  return { 
    navigateWithLoading, 
    navigateWithLoadingAndCallback,
    startLoading,
    stopLoading 
  };
}
