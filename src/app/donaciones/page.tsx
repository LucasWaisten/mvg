import HeroSection from "@/componets/donaciones/hero-section";
import MissionSection from "@/componets/donaciones/mission-section";
import ProjectsSection from "@/componets/donaciones/projects-section";
import DonationMethodsSection from "@/componets/donaciones/donation-methods-section";
import { PageTransition } from "@/componets/common/PageTransition";

export default function DonacionesPage() {
    return (
        <PageTransition variant="scale">
            <div className="min-h-screen bg-gradient-to-b from-[#f8f6f3] to-[#f5f2ed]">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-6xl mx-auto">
                        <HeroSection />
                        <div className="grid grid-cols-1 w-3/4 mx-auto gap-8 mb-16">
                            <MissionSection />
                        </div>
                        <DonationMethodsSection />
                    </div>
                </div>
            </div>
        </PageTransition>
    );
} 