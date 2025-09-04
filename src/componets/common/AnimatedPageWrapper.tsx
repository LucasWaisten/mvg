"use client";

import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedPageWrapperProps {
  children: ReactNode;
}

export function AnimatedPageWrapper({ children }: AnimatedPageWrapperProps) {
  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  );
}
