import HeroSection from "@/componets/quienes-somos/hero-section";
import IdentitySection from "@/componets/quienes-somos/identity-section";
import OrganizationSection from "@/componets/quienes-somos/organization-section";
import { PageTransition } from "@/componets/common/PageTransition";

export default function Page() {
    return (
        <PageTransition variant="fade">
            <div className="min-h-screen bg-gradient-to-b from-[#f8f6f3] to-[#f5f2ed]">
                <div className="container mx-auto px-4 py-16 space-y-24">
                    <HeroSection />
                    <IdentitySection />
                    <OrganizationSection />
                </div>
            </div>
        </PageTransition>
    );
}
