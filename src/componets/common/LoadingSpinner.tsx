"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LoadingSpinnerProps {
  isLoading: boolean;
}

export function LoadingSpinner({ isLoading }: LoadingSpinnerProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="text-center">
            {/* Logo con animación de desintegración dramática */}
            <motion.div
              className="mb-6 relative"
              animate={{
                scale: [1, 1.3, 0.7, 1.1, 1],
                opacity: [1, 0.9, 0.6, 0.8, 1],
                filter: [
                  "blur(0px) brightness(1)",
                  "blur(3px) brightness(1.2)",
                  "blur(0px) brightness(0.8)",
                  "blur(1px) brightness(1.1)",
                  "blur(0px) brightness(1)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/mvg.svg"
                alt="MVG Loading"
                width={80}
                height={80}
                className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg"
              />
              
              {/* Fragmentos de desintegración */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 w-3 h-3 bg-[#ffde59] rounded-sm"
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 0,
                    scale: 0,
                    rotate: 0
                  }}
                  animate={{
                    x: [
                      0,
                      Math.cos((i * 30) * Math.PI / 180) * 80,
                      Math.cos((i * 30) * Math.PI / 180) * 120,
                      Math.cos((i * 30) * Math.PI / 180) * 200
                    ],
                    y: [
                      0,
                      Math.sin((i * 30) * Math.PI / 180) * 80,
                      Math.sin((i * 30) * Math.PI / 180) * 120,
                      Math.sin((i * 30) * Math.PI / 180) * 200
                    ],
                    opacity: [0, 1, 0.8, 0],
                    scale: [0, 1, 1.2, 0.3],
                    rotate: [0, 180, 360, 720]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeOut"
                  }}
                />
              ))}
              
              {/* Efecto de explosión de energía */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`explosion-${i}`}
                  className="absolute inset-0 border-2 border-[#ffde59] rounded-full"
                  initial={{
                    scale: 0.3,
                    opacity: 0
                  }}
                  animate={{
                    scale: [0.3, 1.5, 2.5, 4],
                    opacity: [0, 0.8, 0.4, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeOut"
                  }}
                />
              ))}
              
              {/* Chispas de desintegración */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`spark-${i}`}
                  className="absolute inset-0 w-1 h-4 bg-gradient-to-b from-[#ffde59] to-transparent"
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 0,
                    scale: 0,
                    rotate: 0
                  }}
                  animate={{
                    x: [
                      0,
                      Math.cos((i * 60) * Math.PI / 180) * 60,
                      Math.cos((i * 60) * Math.PI / 180) * 100
                    ],
                    y: [
                      0,
                      Math.sin((i * 60) * Math.PI / 180) * 60,
                      Math.sin((i * 60) * Math.PI / 180) * 100
                    ],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0.5],
                    rotate: [0, 360, 720]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
