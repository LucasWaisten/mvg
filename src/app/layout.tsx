import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/componets/nav-bar";
import Footer from "@/componets/landing-page/footer";
import { LoadingProvider } from "@/contexts/LoadingContext";
import { LoadingWrapper } from "@/componets/common/LoadingWrapper";
import { AnimatePresence } from "framer-motion";

export const metadata: Metadata = {
  title: "Movimiento de Vida en Gracia",
  description: "Jóvenes evangelizando jóvenes - Comunidad de jóvenes laicos católicos animados por el carisma dominicano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <LoadingProvider>
          <Navbar />
          <div className="pt-16">
            <AnimatePresence mode="wait">
              {children}
            </AnimatePresence>
          </div>
          <Footer />
          <LoadingWrapper />
        </LoadingProvider>
      </body>
    </html>
  );
}
