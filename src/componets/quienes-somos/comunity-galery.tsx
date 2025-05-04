"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "./comunidad-gallery.css";

const images = [
    "/images/image1.webp",
    "/images/image2.webp",
    "/images/image3.webp",
    "/images/image4.webp",
    "/images/image5.webp",
    "/images/image6.webp",
    "/images/image7.webp",
    "/images/image8.webp",
    "/images/image9.webp",
    "/images/image10.webp",
    "/images/image11.webp",
];

export default function ComunidadGallery() {
    return (
        <div className="flex justify-center">
            <Swiper
                effect="cards"
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 2200,
                    disableOnInteraction: false,
                }}
                modules={[EffectCards, Autoplay]}
                className="mySwiper w-[360px] h-[450px]"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={src}
                            alt={`Foto comunidad ${index + 1}`}
                            className="w-full h-full object-cover rounded-xl shadow-xl"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}