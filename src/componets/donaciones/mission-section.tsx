import { Subtitle } from "@/componets/common/title";

export default function MissionSection() {
    return (
        <div className="bg-[#bc8a3c]  backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-12">
            <div className="text-justify  sm:text-left max-w-4xl mx-auto">
                <Subtitle subtitle="Sustentá nuestra misión evangelizadora" />
                <p className="text-base md:text-xl leading-relaxed text-[#681200] mb-6">
                    Tu donación nos permite continuar con nuestra misión de evangelizar jóvenes y llevar el amor de Dios a más personas. 
                    Cada aporte, por pequeño que sea, hace posible que las Jornadas, los apostolados y todas nuestras actividades sigan transformando vidas.
                </p>
                <div className="relative py-8">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-32 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                    <p className="text-base md:text-2xl italic text-[#681200] font-light">
                        &quot;Cada uno dé según lo que haya decidido en su corazón, no de mala gana ni por obligación, porque Dios ama al que da con alegría&quot;
                        <span className="block text-lg text-[#d4af37] mt-2">— Lucas 6, 38</span>
                    </p>
                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-32 h-1 bg-gradient-to-r from-transparent via-[#b8860b] to-transparent"></div>
                </div>
            </div>
        </div>
    );
} 