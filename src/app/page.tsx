'use client';

import HeroSection from "@/componets/landing-page/hero-section";
import AboutSection from "@/componets/landing-page/about-section";
import EventsPreview from "@/componets/landing-page/events-preview";
import ApostoladosSection from "@/componets/landing-page/apostolados-section";
import ComunidadGallery from "@/componets/landing-page/comunidad-gallery";
import Footer from "@/componets/landing-page/footer";

export default function HomePage() {
  return (
      <main className="flex flex-col items-center justify-center">
        <HeroSection />
        <AboutSection />
        <EventsPreview />
        <ApostoladosSection />
        <ComunidadGallery />
        <Footer />
      </main>
  );
}