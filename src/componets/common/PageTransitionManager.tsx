"use client";

import { useEffect, useState } from "react";
import { useLoading } from "@/contexts/LoadingContext";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingSpinner } from "./LoadingSpinner";

interface PageTransitionManagerProps {
  children: React.ReactNode;
}

export function PageTransitionManager({ children }: PageTransitionManagerProps) {
  const { isLoading } = useLoading();
  const [showPageContent, setShowPageContent] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      // Cuando el loading termina, mostrar el contenido de la página
      const timer = setTimeout(() => {
        setShowPageContent(true);
      }, 100); // Pequeño delay para transición suave
      
      return () => clearTimeout(timer);
    } else {
      // Cuando el loading inicia, ocultar el contenido de la página
      setShowPageContent(false);
    }
  }, [isLoading]);

  return (
    <>
      {/* Loading Spinner - solo se muestra cuando isLoading es true */}
      <LoadingSpinner isLoading={isLoading} />
      
      {/* Contenido de la página - siempre visible pero con transición */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: showPageContent ? 1 : 0.3, // Semi-transparente cuando loading
          y: showPageContent ? 0 : 10 
        }}
        transition={{ 
          duration: 0.5, 
          ease: "easeInOut"
        }}
        style={{
          minHeight: "calc(100vh - 200px)", // Ajustar para navbar y footer
          display: "flex",
          flexDirection: "column"
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
