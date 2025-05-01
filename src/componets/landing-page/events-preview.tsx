"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {FreeMode, Navigation} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

function cn(...classes: (string | undefined | false | null)[]) {
    return classes.filter(Boolean).join(" ");
}

const eventColors: { [key: string]: string } = {
    noche: "from-amber-400 to-white",
    ultreya: "from-rose-400 to-white",
    jornada: "from-indigo-400 to-white",
    cumple: "from-green-400 to-white",
    asamblea: "from-purple-400 to-white",
    default: "from-slate-400 to-white",
};

function getEventType(summary: string): keyof typeof eventColors {
    const lower = summary.toLowerCase();
    if (lower.includes("noche de la caridad")) return "noche";
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
    start: { dateTime: string; date: string };
    end: { dateTime: string; date: string };
};

type DateDisplay = {
    day: number;
    month: string;
    label: string;
};

function formatEventDateRange(event: Event, type: string): DateDisplay {
    const isAllDay = !!event.start.date && !!event.end.date;
    const startDate = new Date(event.start.dateTime || event.start.date);
    const endDate = new Date(event.end.dateTime || event.end.date || event.start.dateTime || event.start.date);

    if (isAllDay) {
        startDate.setDate(startDate.getDate() + 1);
        endDate.setDate(endDate.getDate());

        const isMultiDay = endDate.getTime() - startDate.getTime() > 86400000;

        if (type !== "cumple") {
            if (isMultiDay) {
                const startStr = startDate.getDate();
                const endStr = endDate.getDate() - 1;
                const month = startDate.toLocaleDateString("es-AR", { month: "short" }).toUpperCase();
                return {
                    day: startDate.getDate(),
                    month,
                    label: `${startStr} - ${endStr} ${month}`,
                };
            }
            return {
                day: startDate.getDate(),
                month: startDate.toLocaleDateString("es-AR", { month: "short" }).toUpperCase(),
                label: "Todo el día",
            };
        }
    }

    // Si tiene horario
    if (event.start.dateTime && event.end?.dateTime) {
        const startTime = new Date(event.start.dateTime).toLocaleTimeString("es-AR", {
            hour: "2-digit",
            minute: "2-digit",
        });
        const endTime = new Date(event.end.dateTime).toLocaleTimeString("es-AR", {
            hour: "2-digit",
            minute: "2-digit",
        });

        return {
            day: startDate.getDate(),
            month: startDate.toLocaleDateString("es-AR", { month: "short" }).toUpperCase(),
            label: `${startTime} - ${endTime}`,
        };
    }

    return {
        day: startDate.getDate(),
        month: startDate.toLocaleDateString("es-AR", { month: "short" }).toUpperCase(),
        label: "",
    };
}

export default function EventsPreview() {
    const [events, setEvents] = useState<Event[]>([]);

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
                    modules={[ Navigation, FreeMode]}
                >
                    {events.map((event) => {
                        const type = getEventType(event.summary);
                        const { day, month, label } = formatEventDateRange(event, type);

                        return (
                            <SwiperSlide key={event.id} className="overflow-visible">
                                <div className="flex h-full min-h-[220px] rounded-xl shadow-lg transition-all duration-300 overflow-hidden">
                                    {/* Sección A: Fecha */}
                                    <div
                                        className={cn(
                                            "w-1/5 flex flex-col justify-center items-center text-main text-center p-2",
                                            "bg-gradient-to-b",
                                            eventColors[type]
                                        )}
                                    >
                                        <span className="text-sm uppercase font-semibold">{month}</span>
                                        <span className="text-3xl font-bold leading-none">{day}</span>
                                        {label && <span className="text-xs mt-1">{label}</span>}
                                    </div>

                                    {/* Sección B: Contenido */}
                                    <div className="w-4/5 bg-white p-4 flex flex-col">
                                        <h3 className="text-lg font-semibold mb-1 line-clamp-2">{event.summary}</h3>
                                        <p className="text-sm text-gray-700 mb-2">
                                            {event.description?.split("\n")[0] || "Evento sin descripción."}
                                        </p>
                                        <div className="mt-2 text-sm text-gray-800">
                                            <p className="mt-2 font-semibold">Contacto: secretaria@mvg.org</p>
                                        </div>
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