"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

function cn(...classes: (string | undefined | false | null)[]) {
    return classes.filter(Boolean).join(" ");
}

const eventColors: { [key: string]: string } = {
    noche: "from-yellow-200 to-white",
    ultreya: "from-pink-300 to-white",
    jornada: "from-blue-200 to-white",
    cumple: "from-green-200 to-white",
    asamblea: "from-purple-300 to-white",
    default: "from-gray-300 to-white",
};

function getEventType(summary: string): keyof typeof eventColors {
    const lower = summary.toLowerCase();
    if (lower.includes("noche de caridad")) return "noche";
    if (lower.includes("ultreya")) return "ultreya";
    if (lower.includes("convivencia") || lower.match(/j\d{3}[mv]/i) || lower.includes("jornada")) return "jornada";
    if (lower.includes("cumple")) return "cumple";
    if (lower.includes("asamblea")) return "asamblea";
    return "default";
}

type Event = {
    id: string;
    summary: string;
    description?: string;
    start: { dateTime?: string; date?: string };
    end: { dateTime?: string; date?: string };
};

function getTimeDisplay(event: Event, type: string) {
    const hasTime = event.start.dateTime && event.end?.dateTime;
    if (hasTime) {
        const start = new Date(event.start.dateTime!);
        const end = new Date(event.end.dateTime!);
        return `${start.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" })} - ${end.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" })}`;
    } else {
        return type === "cumple" ? "" : "Todo el día";
    }
}

export default function EventsPreview() {
    const [events, setEvents] = useState<Event[]>([]);
    const [expandedId, setExpandedId] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const now = new Date();
                const year = now.getFullYear();
                const start = new Date(year, 0, 1).toISOString();
                const end = new Date(year, 11, 31, 23, 59, 59).toISOString();

                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL}/events?orderBy=startTime&singleEvents=true&timeMin=${start}&timeMax=${end}&key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}`
                );
                const data = await res.json();
                setEvents(data.items || []);
            } catch (e) {
                console.error("Error fetching events", e);
            }
        };
        fetchEvents();
    }, []);

    return (
        <section className="w-full py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Eventos Destacados</h2>
                <Swiper
                    slidesPerView={1.2}
                    spaceBetween={10}
                    breakpoints={{
                        640: { slidesPerView: 1.1 },
                        768: { slidesPerView: 2.1 },
                        1024: { slidesPerView: 3.1 },
                    }}
                    freeMode
                    modules={[Navigation, FreeMode]}
                >
                    {events.map((event) => {
                        const type = getEventType(event.summary);
                        const isExpanded = expandedId === event.id;
                        const date = new Date(event.start.dateTime || event.start.date);
                        const month = date.toLocaleDateString("es-AR", { month: "short" }).toUpperCase();
                        const day = date.getDate();
                        const time = event.start.dateTime
                            ? date.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" })
                            : null;

                        return (
                            <SwiperSlide key={event.id} className="overflow-visible">
                                <div className="flex min-h-[200px] rounded-lg shadow-md transition-shadow duration-300 hover:shadow-[0_0_20px_4px_rgba(0,255,255,0.4)] overflow-hidden">
                                    {/* Sección A: Fecha y hora */}
                                    <div
                                        className={cn(
                                            "w-1/4 flex flex-col justify-center items-center text-center text-white p-2",
                                            "bg-gradient-to-b",
                                            {
                                                noche: "from-yellow-300 to-yellow-100",
                                                ultreya: "from-pink-400 to-pink-200",
                                                jornada: "from-blue-300 to-blue-100",
                                                cumple: "from-green-400 to-green-200",
                                                asamblea: "from-purple-400 to-purple-200",
                                                default: "from-gray-400 to-gray-200",
                                            }[type]
                                        )}
                                    >
                                        <span className="text-sm uppercase font-semibold">
                                            {new Date(event.start.dateTime || event.start.date).toLocaleDateString("es-AR", {
                                                month: "short",
                                            })}
                                        </span>
                                        <span className="text-3xl font-bold">
                                            {new Date(event.start.dateTime || event.start.date).getDate()}
                                        </span>
                                        <span className="text-xs mt-1">{getTimeDisplay(event, type)}</span>
                                    </div>

                                    {/* Contenido */}
                                    <div className="w-[80%] bg-white p-4 flex flex-col">
                                        <h3 className="text-base font-semibold mb-1 line-clamp-2">{event.summary}</h3>
                                        <p className="text-sm text-gray-600 mb-2">{formatDate(event.start.dateTime || event.start.date)}</p>

                                        {isExpanded && (
                                            <div className="text-sm text-gray-800">
                                                <p>{event.description || "Sin descripción adicional."}</p>
                                                <p className="mt-2 font-semibold">Contacto: secretaria@mvg.org</p>
                                            </div>
                                        )}

                                        <button
                                            className="text-blue-600 underline text-sm mt-auto text-left"
                                            onClick={() => setExpandedId(isExpanded ? null : event.id)}
                                        >
                                            {isExpanded ? "Cerrar" : "Ver más"}
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
}

function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-AR", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });
}
