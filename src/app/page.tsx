'use client';

import HeroSection from "@/componets/landing-page/hero-section";
import AboutSection from "@/componets/landing-page/about-section";
import RetirosPreview from "@/componets/landing-page/retiros-preview";
import EventsPreview from "@/componets/landing-page/events-preview";
import ApostoladosSection from "@/componets/landing-page/apostolados-section";
import ComisionesPreview from "@/componets/landing-page/comisiones-preview";
import { PageTransition } from "@/componets/common/PageTransition";

export default function HomePage() {
  return (
    <PageTransition variant="landing">
      <main className="flex flex-col items-center justify-center">
        <HeroSection />
        <AboutSection />
        <RetirosPreview />
        <ApostoladosSection />
        <ComisionesPreview />
        <EventsPreview />
      </main>
    </PageTransition>
  );
}