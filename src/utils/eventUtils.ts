import { Event } from '@/hooks/useEvents';

export const eventTypes = {
    ultreya: { icon: "🔥", color: "from-[#d4af37] to-[#b8860b]", label: "Ultreya" },
    convivencia: { icon: "👥", color: "from-[#8b7355] to-[#cd7f32]", label: "Convivencia" },
    nocheCaridad: { icon: "🕯️", color: "from-[#d4af37] to-[#b8860b]", label: "Noche de Caridad" },
    jornada: { icon: "✝", color: "from-[#8b7355] to-[#cd7f32]", label: "Jornada" },
    prejornada: { icon: "📚", color: "from-[#d4af37] to-[#b8860b]", label: "Prejornada" },
    gruposLectura: { icon: "📖", color: "from-[#8b7355] to-[#cd7f32]", label: "Grupos de Lectura" },
    nocheApoyo: { icon: "🤝", color: "from-[#d4af37] to-[#b8860b]", label: "Noche de Apoyo" },
    celebracion: { icon: "⛪", color: "from-[#8b7355] to-[#cd7f32]", label: "Celebración" },
    default: { icon: "📅", color: "from-[#d4af37] to-[#b8860b]", label: "Evento" }
};

export function getEventType(event: Event) {
    const summary = event.summary.toLowerCase();
    if (summary.includes("ultreya")) return "ultreya";
    if (summary.includes("convivencia")) return "convivencia";
    if (summary.includes("noche de la caridad")) return "nocheCaridad";
    if (summary.includes("jornada")) return "jornada";
    if (summary.includes("prejornada")) return "prejornada";
    if (summary.includes("grupos de lectura")) return "gruposLectura";
    if (summary.includes("noche de apoyo")) return "nocheApoyo";
    if (summary.includes("celebracion") || summary.includes("solemnidad")) return "celebracion";
    return "default";
}

export function formatEventTime(event: Event): string {
    if (event.start.dateTime) {
        const startTime = new Date(event.start.dateTime).toLocaleTimeString("es-AR", {
            hour: "2-digit",
            minute: "2-digit"
        });
        return startTime;
    }
    return "Todo el día";
}

export const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

export const weekDays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]; 