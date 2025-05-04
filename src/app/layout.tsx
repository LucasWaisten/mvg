import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/componets/nav-bar";
import {Shantell_Sans, Zain} from "next/font/google";

const shantell = Shantell_Sans({
  variable: "--font-shantell",
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"], // los pesos que vas a usar
  display: "swap",
});

const zain = Zain({
  variable: "--font-zain",
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Movimiento de Vida en Gracia",
  description: "Jóvenes evangelizando jóvenes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
          suppressHydrationWarning={true}
    >
      <body
        className={`${shantell.variable} ${zain.variable} antialiased`}
      >
      <Navbar />
      <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
