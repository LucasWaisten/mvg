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
    start: { dateTime?: string; date?: string };
    end: { dateTime?: string; date?: string };
};

type DateDisplay = {
    day: number;
    month: string;
    label: string;
};

function formatEventDateRange(event: Event, type: any): DateDisplay {
    const isAllDay = !!event.start.date && !event.start.dateTime;
    const startDate = new Date(event.start.dateTime || event.start.date!);
    const endDate = new Date(event.end?.dateTime || event.end?.date || event.start.dateTime || event.start.date!);

    if (isAllDay) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const isMultiDay = (end.getTime() - start.getTime()) > 86400000;

        if (type !== "cumple") {
            if (isMultiDay) {
                const month = start.toLocaleDateString("es-AR", { month: "short" }).toUpperCase();
                return {
                    day: start.getDate(),
                    month,
                    label: `${start.getDate()} - ${end.getDate() - 1} ${month}`,
                };
            }
            return {
                day: start.getDate(),
                month: start.toLocaleDateString("es-AR", { month: "short" }).toUpperCase(),
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
    const [initialSlide, setInitialSlide] = useState(0);
    const [isReady, setIsReady] = useState(false);

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
                const items: Event[] = data.items || [];

                const today = new Date();
                today.setHours(0, 0, 0, 0);
                console.log("🔍 Fecha actual (local, sin hora):", today.toString());

                items.forEach((ev, i) => {
                    const startRaw = ev.start.dateTime || ev.start.date!;
                    const startDate = new Date(startRaw);
                    startDate.setHours(0, 0, 0, 0);
                    console.log(`📅 Evento[${i}]:`, {
                        summary: ev.summary,
                        raw: startRaw,
                        parsed: startDate.toString(),
                    });
                });

                const index = items.findIndex((ev) => {
                    const start = new Date(ev.start.dateTime || ev.start.date!);
                    start.setHours(0, 0, 0, 0);
                    return start >= today;
                });

                console.log("🎯 Índice del próximo evento:", index);
                if (index !== -1) {
                    console.log("✅ Evento elegido:", items[index].summary);
                }

                setInitialSlide(index !== -1 ? index : 0);
                setEvents(items);
                setIsReady(true);
            } catch (e) {
                console.error("Error fetching events", e);
            }
        };
        fetchEvents();
    }, []);

    return (
        <section className="w-full pb-8">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Eventos Destacados</h2>
                {isReady && <Swiper
                    initialSlide={initialSlide}
                    slidesPerView={1.2}
                    spaceBetween={10}
                    breakpoints={{
                        640: {slidesPerView: 1.1},
                        768: {slidesPerView: 2.1},
                        1024: {slidesPerView: 3.1},
                    }}
                    freeMode
                    modules={[Navigation, FreeMode]}
                >
                    {events.map((event) => {
                        const type = getEventType(event.summary);
                        const {day, month, label} = formatEventDateRange(event, type);

                        return (
                            <SwiperSlide key={event.id} className="overflow-visible">
                                <div
                                    className="flex h-full min-h-[220px] rounded-xl shadow-lg transition-all duration-300 overflow-hidden">
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
                                            <p className="mt-2 font-semibold">Email: secretaria.mvg@gmail.com</p>
                                            <p className="font-semibold">Instagram: difusion.mvg</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>}
            </div>
        </section>
    );
}