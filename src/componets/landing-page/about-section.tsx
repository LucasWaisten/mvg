import Image from "next/image";
import {Subtitle2 } from "@/componets/common/title";

export default function AboutSection() {
    return (
        <section id="sobre-nosotros" className="relative w-full bg-[#492402] py-32">
            <div className="relative bg-secondary rounded-xl shadow-lg w-full flex flex-col lg:flex-row items-center lg:items-stretch px-6 lg:px-16 py-12 gap-8">

                <div className="relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-8 w-60 sm:w-72 md:w-80 lg:w-[320px] max-w-full z-20 mx-auto lg:mx-0 mb-8 lg:mb-0">
                    <div className="overflow-hidden rounded-xl shadow-xl">
                        
                        <Image
                            src="/images/domingo.webp"
                            alt="Domingo en comunidad"
                            width={320}
                            height={444}
                            className="object-cover w-full h-auto"
                            priority
                        />
                    </div>
                </div>
                
                <div className="w-full text-body lg:pl-[360px] z-10">
                    <Subtitle2 subtitle={"Sobre Nosotros"}/>
                    <p className="md:text-2xl text-lg text-[--color-text] leading-6 mb-4">
                        Somos una comunidad de jóvenes que <i>hemos conocido el amor que Dios nos tiene y hemos creído en él</i> (1 Jn 4, 16), y desde ahí queremos vivir y anunciar lo vivido.
                    </p>
                    <p className="md:text-2xl text-lg text-[--color-text] leading-6 mb-4">
                        Nuestra misión nace de lo que hemos contemplado y experimentado: que el encuentro con Cristo transforma la vida. Participamos del carisma de la Orden de Predicadores, que nos impulsa a <i>contemplar y dar de lo contemplado</i>.
                    </p>
                    <p className="md:text-2xl text-lg text-[--color-text] leading-6 mb-4">
                        Por eso, a través de retiros, apostolados y el testimonio cotidiano, queremos llevar este anuncio a otros jóvenes.
                    </p>
                    <p className="md:text-2xl text-lg text-[--color-text] leading-6">
                        <strong>Jóvenes evangelizando jóvenes.</strong> Esa es nuestra vocación y nuestro camino.
                    </p>
                </div>
            </div>
        </section>
    );
}