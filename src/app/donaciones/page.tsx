import HeroSection from "@/componets/donaciones/hero-section";
import MissionSection from "@/componets/donaciones/mission-section";
import ProjectsSection from "@/componets/donaciones/projects-section";
import DonationMethodsSection from "@/componets/donaciones/donation-methods-section";

export default function DonacionesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f8f6f3] to-[#f5f2ed]">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    <HeroSection />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <MissionSection />
                        <ProjectsSection />
                    </div>
                    <DonationMethodsSection />
                </div>
            </div>
        </div>
    );
} 