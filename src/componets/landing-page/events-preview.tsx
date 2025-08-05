"use client";

import { useState } from "react";
import { Subtitle2 } from "@/componets/common/title";
import { X, Calendar, Clock, MapPin, Users, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { useEvents, type CalendarEvent } from "@/hooks/useEvents";
import { eventTypes, getEventType, formatEventTime, monthNames, weekDays } from "@/utils/eventUtils";

export default function EventsPreview() {
    const { events, isLoading, error, generateCalendarDays } = useEvents();
    const [selectedDay, setSelectedDay] = useState<CalendarEvent | null>(null);
    const [currentEventIndex, setCurrentEventIndex] = useState(0);
    const [currentMonth, setCurrentMonth] = useState(new Date(2025, 7, 1)); // Agosto 2025

    const handleDayClick = (day: CalendarEvent) => {
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
                <div id="proximos" className="mb-16">
                    <div className="text-center mb-8">
                        <Subtitle2 subtitle="Próximos Eventos" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events
                            .filter(event => {
                                const eventDate = new Date(event.start.dateTime || event.start.date!);
                                const today = new Date();
                                return eventDate >= today;
                            })
                            .slice(0, 6)
                            .map((event, index) => {
                                const type = getEventType(event);
                                const eventType = eventTypes[type];
                                return (
                                    <div
                                        key={index}
                                        className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-[#d4af37]/20 p-6 hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="flex items-center mb-4">
                                            <div className={`p-2 rounded-lg ${eventType.color} mr-3`}>
                                                <span className="text-white text-lg">{eventType.icon}</span>
                                            </div>
                                            <div>
                                                <h4 className=" text-subtitle-bold text-[#2c1810] text-lg">
                                                    {event.summary}
                                                </h4>
                                                <p className="text-sm  text-[#8b7355]">
                                                    {new Date(event.start.dateTime || event.start.date!).toLocaleDateString("es-AR", {
                                                        weekday: "long",
                                                        month: "long",
                                                        day: "numeric"
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-2 text-sm text-[#8b7355]">
                                            <div className="flex items-center">
                                                <Clock className="w-4 h-4 mr-2" />
                                                <span>{formatEventTime(event)}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <MapPin className="w-4 h-4 mr-2" />
                                                <span>{event.location}</span>
                                            </div>
                                        </div>
                                        
                                        {event.description && (
                                            <p className="mt-4 text-sm text-[#2c1810] leading-relaxed">
                                                {event.description.length > 100 
                                                    ? event.description.substring(0, 100) + '...' 
                                                    : event.description}
                                            </p>
                                        )}
                                        
                                        {event.registrationRequired && event.formLink && (
                                            <a
                                                href={event.formLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block  mt-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white font-text font-semibold  py-2 px-4 rounded-lg hover:from-[#b8860b] hover:to-[#d4af37] transition-all duration-300 text-sm"
                                            >
                                                Inscribirse
                                            </a>
                                        )}
                                    </div>
                                );
                            })}
                    </div>
                    
                    {events.filter(event => {
                        const eventDate = new Date(event.start.dateTime || event.start.date!);
                        const today = new Date();
                        return eventDate >= today;
                    }).length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-[#8b7355] text-lg">No hay eventos próximos programados.</p>
                            <p className="text-[#8b7355] text-sm mt-2">¡Mantente atento a nuestras redes sociales para nuevas actividades!</p>
                        </div>
                    )}
                </div>
                
                
                <div className="text-center mb-12">
                    <Subtitle2 subtitle="Calendario de Eventos" />
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-8">
                        <div className="flex justify-between items-center mb-8">
                            <button
                                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                                className="p-2 rounded-lg bg-[#f5f2ed] hover:bg-[#d4af37] hover:text-white transition-colors duration-300"
                            >
                                ←
                            </button>
                            <h2 className="text-3xl text-subtitle-bold  text-[#2c1810]">
                                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                            </h2>
                            <button
                                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                                className="p-2 rounded-lg bg-[#f5f2ed] hover:bg-[#d4af37] hover:text-white transition-colors duration-300"
                            >
                                →
                            </button>
                        </div>

                        <div className="grid grid-cols-7 gap-2 mb-4">
                            {weekDays.map(day => (
                                <div key={day} className="text-center p-3 font-sans font-semibold text-[#8b7355]">
                                    {day}
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-7 gap-2">
                            {generateCalendarDays(currentMonth).map((day, index) => (
                                <div
                                    key={index}
                                    className={`min-h-[100px] p-2 rounded-lg border transition-all duration-300 ${
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
                                    <div className="text-sm font-semibold mb-1">{day.day}</div>
                                    <div className="space-y-1">
                                        {day.events.slice(0, 2).map((event, eventIndex) => {
                                            const type = getEventType(event);
                                            const eventType = eventTypes[type];
                                            return (
                                                <div
                                                    key={eventIndex}
                                                    className={`text-xs p-1 rounded bg-gradient-to-r ${eventType.color} text-white font-medium truncate`}
                                                    title={event.summary}
                                                >
                                                    <span className="mr-1">{eventType.icon}</span>
                                                    {event.summary.length > 12 ? event.summary.substring(0, 12) + '...' : event.summary}
                                                </div>
                                            );
                                        })}
                                        {day.events.length > 2 && (
                                            <div className="text-xs p-1 rounded bg-gradient-to-r from-[#8b7355] to-[#cd7f32] text-white font-medium text-center">
                                                +{day.events.length - 2} más
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {selectedDay && selectedEvent && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-sans font-bold text-[#2c1810] mb-2">
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

                                    <div className="flex items-center text-[#8b7355]">
                                        <MapPin className="w-4 h-4 mr-3" />
                                        <span>{selectedEvent.location}</span>
                                    </div>

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
                                            Anterior
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
                                            Siguiente
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