export interface Proyecto {
    titulo: string;
    descripcion: string;
    monto: string;
    icono: string;
    color: string;
    destacado: boolean;
}

export interface FormaDonacion {
    titulo: string;
    datos: string[];
    icono: string;
    color: string;
}

export const proyectos: Proyecto[] = [
    {
        titulo: "Jornadas",
        descripcion: "Ayudanos a sostener los retiros que transforman la vida de cientos de jóvenes cada año. Tu donación cubre gastos de alojamiento, alimentación, materiales y logística.",
        monto: "$50.000",
        icono: "✝",
        color: "from-[#d4af37] to-[#b8860b]",
        destacado: true
    },
    {
        titulo: "Noche de Caridad",
        descripcion: "Contribuí a que podamos llevar alimentos, abrigo y esperanza a las personas en situación de calle cada sábado.",
        monto: "$15.000",
        icono: "🕯️",
        color: "from-[#8b7355] to-[#cd7f32]",
        destacado: false
    },
    {
        titulo: "Misiones",
        descripcion: "Apoyá nuestras salidas misioneras a diferentes barrios para llevar el Evangelio y la caridad a más familias.",
        monto: "$25.000",
        icono: "🌍",
        color: "from-[#d4af37] to-[#b8860b]",
        destacado: false
    },
];

export const formasDonacion: FormaDonacion[] = [
    {
        titulo: "Transferencia ",
        datos: [
            "Alias: mvg.2025 ",
            "Datos: Michel Antonio Stavropulos"
        ],
        icono: "🏦",
        color: "from-[#d4af37] to-[#b8860b]"
    },
    {
        titulo: "Efectivo",
        datos: [
            "Dirección: Pasaje 5 de Julio 425, CABA",
            "Horarios: Miercoles 17:00 - 20:00",
            "Mail: secretaria.mv@gmail.com ",
        ],
        icono: "💵",
        color: "from-[#d4af37] to-[#b8860b]"
    }
]; 