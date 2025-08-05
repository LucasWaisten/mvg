import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/componets/nav-bar";
import Footer from "@/componets/landing-page/footer";

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
      <body className="antialiased">
      <Navbar />
      <div className="pt-16">{children}</div>
      <Footer />
      </body>
    </html>
  );
}
