# IDs de Navegación - MVG Website

Este documento lista todos los IDs disponibles para navegación interna desde el navbar.

## IDs Configurados

### 1. **Inicio** - `#inicio`
- **Ubicación**: HeroSection
- **Componente**: `src/componets/landing-page/hero-section.tsx`
- **Descripción**: Sección principal con video de fondo y título del movimiento

### 2. **Sobre Nosotros** - `#sobre-nosotros`
- **Ubicación**: AboutSection
- **Componente**: `src/componets/landing-page/about-section.tsx`
- **Descripción**: Sección que explica la misión y visión del movimiento

### 3. **Nuestros Apostolados** - `#apostolados`
- **Ubicación**: ApostoladosSection
- **Componente**: `src/componets/landing-page/apostolados-section.tsx`
- **Descripción**: Grid con los diferentes apostolados (Noche de Caridad, Misión, etc.)

### 4. **Calendario Mensual** - `#calendario-mensual`
- **Ubicación**: EventsPreview (sección del calendario)
- **Componente**: `src/componets/landing-page/events-preview.tsx`
- **Descripción**: Calendario interactivo con todos los eventos del mes

### 5. **Próximos Eventos** - `#proximos`
- **Ubicación**: EventsPreview (sección de próximos eventos)
- **Componente**: `src/componets/landing-page/events-preview.tsx`
- **Descripción**: Grid con los próximos 6 eventos programados

## Configuración del Navbar

El navbar ya está configurado con los siguientes enlaces en el submenu de "Inicio":

```tsx
submenu:[
    { label: "sobre nosotros", href: "#sobre-nosotros" },
    { label: "nuestros apostolados", href: "#apostolados" },
    { label: "calendario mensual", href: "#calendario-mensual" },
    { label: "proximos eventos", href: "#proximos" },
]
```

## Funcionalidad

Todos los enlaces del navbar ahora funcionan correctamente:

1. **Navegación suave**: Los enlaces llevan directamente a las secciones correspondientes
2. **Scroll automático**: El navegador hace scroll suave hasta la sección seleccionada
3. **URL actualizada**: La URL se actualiza con el hash correspondiente
4. **Responsive**: Funciona en todos los dispositivos

## Estructura de la Página Principal

```
Página Principal (HomePage)
├── HeroSection (#inicio)
├── AboutSection (#sobre-nosotros)
├── ApostoladosSection (#apostolados)
└── EventsPreview
    ├── Próximos Eventos (#proximos)
    └── Calendario Mensual (#calendario-mensual)
```

## Notas Técnicas

- Todos los IDs son únicos y siguen el patrón kebab-case
- Los enlaces usan hash (#) para navegación interna
- El scroll es suave y nativo del navegador
- Los componentes mantienen su funcionalidad original
- La navegación es accesible y compatible con lectores de pantalla 