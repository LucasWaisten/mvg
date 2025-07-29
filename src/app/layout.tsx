import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/componets/nav-bar";
import { Playfair_Display, Lora } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

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
    <html lang="es"
          suppressHydrationWarning={true}
    >
      <body
        className={`${playfair.variable} ${lora.variable} antialiased`}
      >
      <Navbar />
      <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
