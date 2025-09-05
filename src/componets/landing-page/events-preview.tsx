"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Subtitle2 } from "@/componets/common/title";
import { X, Calendar, Clock, MapPin, Users, Heart, ChevronLeft, ChevronRight, Grid, List } from "lucide-react";

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

const eventTypes = {
    noche: { icon: "🕯️", color: "from-amber-400 to-amber-600" },
    ultreya: { icon: "🌟", color: "from-rose-400 to-rose-600" },
    jornada: { icon: "👥", color: "from-indigo-400 to-indigo-600" },
    cumple: { icon: "🎂", color: "from-green-400 to-green-600" },
    asamblea: { icon: "🏛️", color: "from-purple-400 to-purple-600" },
    default: { icon: "📅", color: "from-slate-400 to-slate-600" },
};

const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const weekDays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

function getEventType(event: Event | { summary: string }): keyof typeof eventColors {
    const lower = event.summary.toLowerCase();
    if (lower.includes("noche de la caridad")) return "noche";
    if (lower.includes("ultreya")) return "ultreya";
    if (lower.includes("convivencia") || lower.match(/j\d{3}[mv]/i) || lower.includes("jornada")) return "jornada";
    if (lower.includes("cumple")) return "cumple";
    if (lower.includes("asamblea")) return "asamblea";
    return "default";
}

function formatEventTime(event: Event): string {
    if (event.start.date && !event.start.dateTime) {
        return "Todo el día";
    }
    
    if (event.start.dateTime && event.end?.dateTime) {
        const startTime = new Date(event.start.dateTime).toLocaleTimeString("es-AR", {
            hour: "2-digit",
            minute: "2-digit",
        });
        const endTime = new Date(event.end.dateTime).toLocaleTimeString("es-AR", {
            hour: "2-digit",
            minute: "2-digit",
        });
        return `${startTime} - ${endTime}`;
    }
    
    if (event.start.dateTime) {
        return new Date(event.start.dateTime).toLocaleTimeString("es-AR", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }
    
    return "Hora por confirmar";
}

type Event = {
    id: string;
    summary: string;
    description?: string;
    start: { dateTime?: string; date?: string };
    end: { dateTime?: string; date?: string };
    location?: string;
    registrationRequired?: boolean;
    formLink?: string;
};

type DateDisplay = {
    day: number;
    month: string;
    label: string;
};

type CalendarDay = {
    day: number;
    isCurrentMonth: boolean;
    isToday: boolean;
    isPast: boolean;
    events: Event[];
};

function formatEventDateRange(event: Event, type: string | number): DateDisplay {
    const isAllDay = !!event.start.date && !event.start.dateTime;
    const startDate = new Date(event.start.dateTime || event.start.date!);
    const endDateRaw = event.end?.dateTime || event.end?.date || event.start.dateTime || event.start.date!;
    const endDate = new Date(endDateRaw);

    if (isAllDay) {
        endDate.setDate(endDate.getDate() - 1);

        const sameDay = startDate.toDateString() === endDate.toDateString();

        const month = startDate.toLocaleDateString("es-AR", { month: "short" }).toUpperCase();

        if (sameDay || type === "cumple") {
            return {
                day: endDate.getDate() + 1,
                month,
                label: "Todo el día",
            };
        } else {
            const endMonth = endDate.toLocaleDateString("es-AR", { month: "short" }).toUpperCase();
            const sameMonth = month === endMonth;

            return {
                day: startDate.getDate() + 1,
                month,
                label: sameMonth
                    ? `${startDate.getDate() + 1} - ${endDate.getDate() + 1} ${month}`
                    : `${startDate.getDate() + 1} ${month} - ${endDate.getDate() + 1} ${endMonth}`,
            };
        }
    }

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

function generateCalendarDays(month: Date, events: Event[]): CalendarDay[] {
    const year = month.getFullYear();
    const monthIndex = month.getMonth();
    
    const firstDay = new Date(year, monthIndex, 1);
    const lastDay = new Date(year, monthIndex + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const endDate = new Date(lastDay);
    endDate.setDate(endDate.getDate() + (6 - lastDay.getDay()));
    
    const days: CalendarDay[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
        const dayEvents = events.filter(event => {
            const eventDate = new Date(event.start.dateTime || event.start.date!);
            eventDate.setHours(0, 0, 0, 0);
            const currentDate = new Date(d);
            currentDate.setHours(0, 0, 0, 0);
            return eventDate.getTime() === currentDate.getTime();
        });
        
        days.push({
            day: d.getDate(),
            isCurrentMonth: d.getMonth() === monthIndex,
            isToday: d.getTime() === today.getTime(),
            isPast: d < today,
            events: dayEvents,
        });
    }
    
    return days;
}

export default function EventsPreview() {
    const [events, setEvents] = useState<Event[]>([]);
    const [isReady, setIsReady] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    // Calendar state
    const [selectedDay, setSelectedDay] = useState<CalendarDay | null>(null);
    const [currentEventIndex, setCurrentEventIndex] = useState(0);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setIsLoading(true);
                setError(null);
                
                const now = new Date();
                const year = now.getFullYear();
                const start = new Date(year, 0, 1).toISOString();
                const end = new Date(year, 11, 31, 23, 59, 59).toISOString();

                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL}/events?orderBy=startTime&singleEvents=true&timeMin=${start}&timeMax=${end}&key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}`
                );
                
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                
                const data = await res.json();
                const items: Event[] = data.items || [];

                const today = new Date();
                today.setHours(0, 0, 0, 0);

                setEvents(items);
                setIsReady(true);
            } catch (e) {
                console.error("Error fetching events", e);
                setError(e instanceof Error ? e.message : "Error al cargar eventos");
            } finally {
                setIsLoading(false);
            }
        };
        fetchEvents();
    }, []);

    const handleDayClick = (day: CalendarDay) => {
        if (day.events.length > 0) {
            setSelectedDay(day);
            setCurrentEventIndex(0);
        }
    };

    const nextEvent = () => {
        if (selectedDay && currentEventIndex < selectedDay.events.length - 1) {
            setCurrentEventIndex(currentEventIndex + 1);
        }
    };

    const prevEvent = () => {
        if (selectedDay && currentEventIndex > 0) {
            setCurrentEventIndex(currentEventIndex - 1);
        }
    };

    const closeModal = () => {
        setSelectedDay(null);
        setCurrentEventIndex(0);
    };

    const selectedEvent = selectedDay?.events[currentEventIndex];

    // Función para obtener eventos del mes actual
    const getCurrentMonthEvents = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const startDate = new Date(year, month, 1);
        const endDate = new Date(year, month + 1, 0);
        
        return events.filter(event => {
            const eventDate = new Date(event.start.dateTime || event.start.date!);
            return eventDate >= startDate && eventDate <= endDate;
        }).sort((a, b) => {
            const dateA = new Date(a.start.dateTime || a.start.date!);
            const dateB = new Date(b.start.dateTime || b.start.date!);
            return dateA.getTime() - dateB.getTime();
        });
    };

    if (isLoading) {
        return (
            <section className="w-full py-16 bg-gradient-to-b from-[#f8f6f3] to-[#f5f2ed]">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#d4af37] mx-auto"></div>
                        <p className="mt-4 text-[#8b7355]">Cargando eventos...</p>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="w-full py-16 bg-gradient-to-b from-[#f8f6f3] to-[#f5f2ed]">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <p className="text-[#8b7355]">Error: {error}</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id='calendario-mensual' className="w-full py-16 bg-gradient-to-b from-[#f8f6f3] to-[#f5f2ed]">
            <div className="container mx-auto px-4">
                
                {/* Sección de Próximos Eventos */}
                <div id="proximos" className="mb-16 w-full mx-auto">
                    <div className="text-center mb-8">
                        <Subtitle2 subtitle="Próximos Eventos" />
                    </div>
                    
                        {isReady && events.length > 0 && (() => {
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        
                        const futureEvents = events.filter(event => {
                            const eventDate = new Date(event.start.dateTime || event.start.date!);
                            eventDate.setHours(0, 0, 0, 0);
                            const todayTime = today.getTime();
                            const eventTime = eventDate.getTime();
                            return eventTime >= todayTime;
                        });

                        if (futureEvents.length === 0) {
                            return (
                                <div className="text-center py-12">
                                    <p className="text-[#8b7355] text-lg">No hay eventos próximos programados.</p>
                                    <p className="text-[#8b7355] text-sm mt-2">¡Mantente atento a nuestras redes sociales para nuevas actividades!</p>
                                </div>
                            );
                        }

                        return (
                            <Swiper
                                initialSlide={0}
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
                                {futureEvents.map((event) => {
                                    const type = getEventType(event);
                                    const { day, month, label } = formatEventDateRange(event, type);

                                    return (
                                        <SwiperSlide key={event.id} className="overflow-visible">
                                            <div className="flex h-64 rounded-xl shadow-lg transition-all duration-300 overflow-hidden bg-white/90 backdrop-blur-sm border border-[#d4af37]/20">
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
                                                    <h3 className="text-subtitle-bold text-[#2c1810] text-lg mb-1 line-clamp-2">
                                                        {event.summary}
                                                    </h3>
                                                    <p className="text-sm text-[#8b7355] mb-2">
                                                        {event.description?.split("\n")[0] || "Evento sin descripción."}
                                                    </p>
                                                    <div className="mt-auto text-sm text-[#8b7355]">
                                                        <p className="mt-2 font-semibold">📧 secretaria.mvg@gmail.com</p>
                                                        <p className="font-semibold">📱 Instagram: @difusion.mvg</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        );
                    })()}
                    
                    {isReady && events.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-[#8b7355] text-lg">No hay eventos próximos programados.</p>
                            <p className="text-[#8b7355] text-sm mt-2">¡Mantente atento a nuestras redes sociales para nuevas actividades!</p>
                        </div>
                    )}
                </div>
                
                {/* Sección del Calendario Mensual */}
                <div className="text-center mb-12">
                    <Subtitle2 subtitle="Calendario de Eventos" />
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-4 md:p-8">
                        {/* Header con navegación y selector de vista */}
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                                    className="p-2 rounded-lg bg-[#f5f2ed] hover:bg-[#d4af37] hover:text-white transition-colors duration-300"
                                >
                                    ←
                                </button>
                                <h2 className="text-xl md:text-3xl text-subtitle-bold text-[#2c1810] text-center">
                                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                                </h2>
                                <button
                                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                                    className="p-2 rounded-lg bg-[#f5f2ed] hover:bg-[#d4af37] hover:text-white transition-colors duration-300"
                                >
                                    →
                                </button>
                            </div>
                            
                            {/* Selector de vista solo en móvil */}
                            <div className="flex md:hidden bg-[#f5f2ed] rounded-lg p-1">
                                <button
                                    onClick={() => setViewMode('calendar')}
                                    className={`p-2 rounded-md transition-colors duration-200 ${
                                        viewMode === 'calendar' 
                                            ? 'bg-[#d4af37] text-white' 
                                            : 'text-[#8b7355] hover:bg-[#e8e0d5]'
                                    }`}
                                >
                                    <Grid className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-md transition-colors duration-200 ${
                                        viewMode === 'list' 
                                            ? 'bg-[#d4af37] text-white' 
                                            : 'text-[#8b7355] hover:bg-[#e8e0d5]'
                                    }`}
                                >
                                    <List className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Vista de Calendario */}
                        <div className={`${viewMode === 'calendar' ? 'block' : 'hidden md:block'}`}>
                            <div className="grid grid-cols-7 gap-1 md:gap-2 mb-4">
                                {weekDays.map(day => (
                                    <div key={day} className="text-center p-2 md:p-3 font-sans font-semibold text-[#8b7355] text-xs md:text-sm">
                                        {day}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-7 gap-1 md:gap-2">
                                {generateCalendarDays(currentMonth, events).map((day, index) => (
                                    <div
                                        key={index}
                                        className={`min-h-[60px] md:min-h-[100px] p-1 md:p-2 rounded-lg border transition-all duration-300 ${
                                            day.isToday 
                                                ? 'bg-gradient-to-br from-[#d4af37] to-[#b8860b] text-white border-[#d4af37]' 
                                                : day.isPast 
                                                    ? 'bg-[#f5f2ed] text-[#8b7355] border-[#e8e0d5]' 
                                                    : day.isCurrentMonth
                                                        ? 'bg-white hover:bg-[#faf9f7] text-[#2c1810] border-[#e8e0d5] hover:border-[#d4af37]'
                                                        : 'bg-[#faf9f7] text-[#8b7355] border-[#e8e0d5]'
                                        } ${day.events.length > 0 ? 'cursor-pointer' : ''}`}
                                        onClick={() => handleDayClick(day)}
                                    >
                                        <div className="text-xs md:text-sm font-semibold mb-1">{day.day}</div>
                                        <div className="space-y-0.5 md:space-y-1">
                                            {day.events.slice(0, 2).map((event, eventIndex) => {
                                                const type = getEventType(event);
                                                const eventType = eventTypes[type as keyof typeof eventTypes];
                                                return (
                                                    <div
                                                        key={eventIndex}
                                                        className={`text-xs p-0.5 md:p-1 rounded bg-gradient-to-r ${eventType.color} text-white font-medium truncate`}
                                                        title={event.summary}
                                                    >
                                                        <span className="mr-1 hidden md:inline">{eventType.icon}</span>
                                                        <span className="md:hidden">{eventType.icon}</span>
                                                        <span className="hidden md:inline">
                                                            {event.summary.length > 12 ? event.summary.substring(0, 12) + '...' : event.summary}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                            {day.events.length > 2 && (
                                                <div className="text-xs p-0.5 md:p-1 rounded bg-gradient-to-r from-[#8b7355] to-[#cd7f32] text-white font-medium text-center">
                                                    <span className="hidden md:inline">+{day.events.length - 2} más</span>
                                                    <span className="md:hidden">+{day.events.length - 2}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Vista de Lista (solo móvil) */}
                        <div className={`${viewMode === 'list' ? 'block' : 'hidden'} md:hidden`}>
                            <div className="space-y-3">
                                {getCurrentMonthEvents().map((event) => {
                                    const type = getEventType(event);
                                    const eventType = eventTypes[type as keyof typeof eventTypes];
                                    const eventDate = new Date(event.start.dateTime || event.start.date!);
                                    
                                    return (
                                        <div
                                            key={event.id}
                                            className="bg-white rounded-lg p-4 border border-[#e8e0d5] shadow-sm"
                                            onClick={() => {
                                                const day: CalendarDay = {
                                                    day: eventDate.getDate(),
                                                    isCurrentMonth: true,
                                                    isToday: false,
                                                    isPast: eventDate < new Date(),
                                                    events: [event]
                                                };
                                                handleDayClick(day);
                                            }}
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${eventType.color} flex items-center justify-center text-white text-lg flex-shrink-0`}>
                                                    {eventType.icon}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-semibold text-[#2c1810] text-sm mb-1 line-clamp-2">
                                                        {event.summary}
                                                    </h3>
                                                    <div className="flex items-center text-[#8b7355] text-xs mb-1">
                                                        <Calendar className="w-3 h-3 mr-1" />
                                                        {eventDate.toLocaleDateString("es-AR", {
                                                            weekday: "short",
                                                            day: "numeric",
                                                            month: "short"
                                                        })}
                                                    </div>
                                                    <div className="flex items-center text-[#8b7355] text-xs">
                                                        <Clock className="w-3 h-3 mr-1" />
                                                        {formatEventTime(event)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                                
                                {getCurrentMonthEvents().length === 0 && (
                                    <div className="text-center py-8">
                                        <p className="text-[#8b7355] text-sm">No hay eventos programados para este mes.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal de Evento */}
                {selectedDay && selectedEvent && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto">
                            <div className="p-4 md:p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-sans font-bold text-[#2c1810] mb-2">
                                            {selectedEvent.summary}
                                        </h3>
                                        <div className="flex items-center text-[#8b7355] text-sm">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            {new Date(selectedEvent.start.dateTime || selectedEvent.start.date!).toLocaleDateString("es-AR", {
                                                weekday: "long",
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric"
                                            })}
                                        </div>
                                        {selectedDay.events.length > 1 && (
                                            <div className="flex items-center mt-2 text-sm text-[#8b7355]">
                                                <span>Evento {currentEventIndex + 1} de {selectedDay.events.length}</span>
                                            </div>
                                        )}
                                    </div>
                                    <button
                                        onClick={closeModal}
                                        className="p-2 rounded-lg hover:bg-[#f5f2ed] transition-colors duration-200"
                                    >
                                        <X className="w-6 h-6 text-[#8b7355]" />
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center text-[#8b7355]">
                                        <Clock className="w-4 h-4 mr-3" />
                                        <span>{formatEventTime(selectedEvent)}</span>
                                    </div>

                                    {selectedEvent.location && (
                                        <div className="flex items-center text-[#8b7355]">
                                            <MapPin className="w-4 h-4 mr-3" />
                                            <span>{selectedEvent.location}</span>
                                        </div>
                                    )}

                                    {selectedEvent.description && (
                                        <div className="bg-[#faf9f7] rounded-lg p-4">
                                            <p className="text-[#2c1810] leading-relaxed">
                                                {selectedEvent.description}
                                            </p>
                                        </div>
                                    )}

                                    {selectedEvent.registrationRequired && (
                                        <div className="bg-gradient-to-r from-[#d4af37]/10 to-[#b8860b]/10 border border-[#d4af37]/20 rounded-lg p-4">
                                            <div className="flex items-center mb-2">
                                                <Users className="w-5 h-5 text-[#d4af37] mr-2" />
                                                <span className="font-semibold text-[#2c1810]">Inscripción requerida</span>
                                            </div>
                                            <p className="text-sm text-[#8b7355] mb-3">
                                                Este evento requiere inscripción previa.
                                            </p>
                                            {selectedEvent.formLink && (
                                                <a
                                                    href={selectedEvent.formLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white font-sans font-semibold py-2 px-4 rounded-lg hover:from-[#b8860b] hover:to-[#d4af37] transition-all duration-300"
                                                >
                                                    Inscribirse
                                                </a>
                                            )}
                                        </div>
                                    )}

                                    <div className="bg-[#f5f2ed] rounded-lg p-4">
                                        <div className="flex items-center mb-2">
                                            <Heart className="w-5 h-5 text-[#d4af37] mr-2" />
                                            <span className="font-semibold text-[#2c1810]">Más información</span>
                                        </div>
                                        <div className="text-sm text-[#8b7355] space-y-1">
                                            <p>📧 secretaria.mvg@gmail.com</p>
                                            <p>📱 Instagram: @difusion.mvg</p>
                                        </div>
                                    </div>
                                </div>

                                {selectedDay.events.length > 1 && (
                                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-[#e8e0d5]">
                                        <button
                                            onClick={prevEvent}
                                            disabled={currentEventIndex === 0}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                                                currentEventIndex === 0
                                                    ? 'text-[#8b7355] cursor-not-allowed'
                                                    : 'text-[#d4af37] hover:bg-[#f5f2ed]'
                                            }`}
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                            <span className="hidden sm:inline">Anterior</span>
                                        </button>
                                        
                                        <div className="flex gap-2">
                                            {selectedDay.events.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentEventIndex(index)}
                                                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                                                        index === currentEventIndex
                                                            ? 'bg-[#d4af37]'
                                                            : 'bg-[#e8e0d5] hover:bg-[#d4af37]/50'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                        
                                        <button
                                            onClick={nextEvent}
                                            disabled={currentEventIndex === selectedDay.events.length - 1}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                                                currentEventIndex === selectedDay.events.length - 1
                                                    ? 'text-[#8b7355] cursor-not-allowed'
                                                    : 'text-[#d4af37] hover:bg-[#f5f2ed]'
                                            }`}
                                        >
                                            <span className="hidden sm:inline">Siguiente</span>
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}