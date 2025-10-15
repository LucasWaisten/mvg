import { useState, useEffect } from 'react';
import { sampleEvents } from '@/data/events';

export type Event = {
    id: string;
    summary: string;
    description?: string;
    start: { dateTime?: string; date?: string };
    end: { dateTime?: string; date?: string };
    location?: string;
    attendees?: string[];
    formLink?: string;
    registrationRequired?: boolean;
};

export type CalendarEvent = {
    day: number;
    events: Event[];
    isToday: boolean;
    isPast: boolean;
    isCurrentMonth: boolean;
};

export const useEvents = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setIsLoading(true);
                setError(null);

                // Verificar que las variables de entorno estén configuradas
                if (!process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL || !process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY) {
                    console.log("Variables de entorno no configuradas, usando eventos de ejemplo");
                    setEvents(sampleEvents);
                    return;
                }

                // Intentar cargar eventos del Google Calendar
                const now = new Date();
                const year = now.getFullYear();
                const start = new Date(year, 0, 1).toISOString();
                const end = new Date(year, 11, 31, 23, 59, 59).toISOString();

                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL}/events?orderBy=startTime&singleEvents=true&timeMin=${start}&timeMax=${end}&key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}`
                );
                
                if (res.ok) {
                    const data = await res.json();
                    const items: Event[] = data.items || [];

                    // Agregar información adicional a los eventos
                    const enhancedEvents = items.map(event => ({
                        ...event,
                        location: event.description?.includes("Convento Santo Domingo") ? "Convento Santo Domingo" : "Por confirmar",
                        attendees: [],
                        formLink: event.description?.includes("inscripción") ? "https://forms.google.com/example" : undefined,
                        registrationRequired: event.summary.toLowerCase().includes("jornada") || event.summary.toLowerCase().includes("convivencia")
                    }));

                    setEvents(enhancedEvents);
                } else {
                    // Si no se pueden cargar los eventos, usar los datos de ejemplo
                    console.log("Error en la respuesta del API, usando eventos de ejemplo");
                    setEvents(sampleEvents);
                }
            } catch (e) {
                console.error("Error fetching events, usando datos de ejemplo", e);
                setError("Error al cargar eventos del calendario");
                // En caso de error, usar los datos de ejemplo
                setEvents(sampleEvents);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const generateCalendarDays = (currentMonth: Date): CalendarEvent[] => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());

        const days: CalendarEvent[] = [];
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        for (let i = 0; i < 42; i++) {
            const currentDate = new Date(startDate);
            currentDate.setDate(startDate.getDate() + i);

            const dayEvents = events.filter(event => {
                const eventDate = new Date(event.start.dateTime || event.start.date!);
                return eventDate.getDate() === currentDate.getDate() &&
                       eventDate.getMonth() === currentDate.getMonth() &&
                       eventDate.getFullYear() === currentDate.getFullYear();
            });

            days.push({
                day: currentDate.getDate(),
                events: dayEvents,
                isToday: currentDate.toDateString() === today.toDateString(),
                isPast: currentDate < today,
                isCurrentMonth: currentDate.getMonth() === month
            });
        }

        return days;
    };

    return {
        events,
        isLoading,
        error,
        generateCalendarDays
    };
}; 