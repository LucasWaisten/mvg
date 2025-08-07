# Guía de Tema - FLYERS x Canva

Esta guía documenta la implementación del tema de diseño basado en la guía de estilo "FLYERS x Canva" para el sitio web del Movimiento de Vida en Gracia.

## Paleta de Colores

### Colores Principales
- **Rojo Oscuro**: `#681200` - Para subtítulos y elementos destacados
- **Marrón Oscuro**: `#492402` - Para títulos principales y texto importante  
- **Beige Claro**: `#D3C3AF` - Para fondos y texto sobre fondos oscuros

### Clases CSS Disponibles
```css
/* Texto */
.text-red-dark      /* Rojo oscuro */
.text-brown-dark    /* Marrón oscuro */
.text-beige-light   /* Beige claro */

/* Fondos */
.bg-red-dark        /* Fondo rojo oscuro */
.bg-brown-dark      /* Fondo marrón oscuro */
.bg-beige-light     /* Fondo beige claro */
```

## Tipografías

### Jerarquía de Fuentes (Fuentes Locales)
1. **Títulos Principales**: Nefelibata Script (`nefelibata-script.otf`)
2. **Subtítulos**: Now Bold (`now/Now-Bold.otf`)
3. **Texto del Cuerpo**: Belleza (`belleza.ttf`)

### Fuentes Disponibles
- **Nefelibata Script**: Fuente script elegante para títulos
- **Now**: Familia de fuentes sans-serif con múltiples pesos (Thin, Light, Regular, Medium, Bold, Black)
- **Belleza**: Fuente sans-serif limpia para texto del cuerpo

### Clases CSS Disponibles
```css
/* Tipografías */
.font-title         /* Para títulos principales */
.font-subtitle      /* Para subtítulos */
.font-text          /* Para texto del cuerpo */

/* Combinaciones predefinidas */
.text-title         /* font-title + font-semibold + text-brown-dark */
.text-subtitle      /* font-subtitle + font-bold + text-red-dark */
.text-body          /* font-text + font-normal + text-text-main */
```

## Componentes de Utilidad

### Componentes React
```tsx
import { Title, Subtitle, BodyText } from "@/componets/common/utils";

// Títulos principales
<Title>Movimiento de Vida en Gracia</Title>

// Subtítulos
<Subtitle>Jóvenes evangelizando jóvenes</Subtitle>

// Texto del cuerpo
<BodyText>Contenido del texto...</BodyText>

// Cambiar el elemento HTML
<Title as="h2">Título como h2</Title>
<Subtitle as="h3">Subtítulo como h3</Subtitle>
<BodyText as="span">Texto como span</BodyText>
```

### Clases de Utilidad
```tsx
import { titleStyles, subtitleStyles, bodyStyles } from "@/componets/common/utils";

// Usar las clases directamente
<h1 className={titleStyles}>Título</h1>
<h2 className={subtitleStyles}>Subtítulo</h2>
<p className={bodyStyles}>Texto</p>
```

## Ejemplos de Uso

### Página de Demostración
Visita `/demo-theme` para ver ejemplos completos de cómo usar el tema.

### Estructura Típica de una Página
```tsx
export default function MiPagina() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-brown-dark text-beige-light py-8">
        <Title className="text-center text-4xl">
          Título Principal
        </Title>
      </header>

      {/* Contenido */}
      <main className="max-w-4xl mx-auto p-8">
        <Subtitle className="text-2xl mb-4">
          Subtítulo de la Sección
        </Subtitle>
        
        <BodyText className="text-lg leading-relaxed mb-6">
          Contenido del texto que explica la sección...
        </BodyText>

        {/* Tarjeta con colores del tema */}
        <div className="bg-beige-light p-6 rounded-lg">
          <Subtitle as="h3" className="text-lg mb-3">
            Título de la Tarjeta
          </Subtitle>
          <BodyText>
            Contenido de la tarjeta...
          </BodyText>
        </div>
      </main>
    </div>
  );
}
```

## Migración de Componentes Existentes

### Antes
```tsx
<h1 className="text-3xl font-display font-bold text-[#2c1810]">
  Título
</h1>
```

### Después
```tsx
<Title className="text-3xl">
  Título
</Title>
```

### O usando clases directamente
```tsx
<h1 className="font-title font-bold text-brown-dark text-3xl">
  Título
</h1>
```

## Configuración Técnica

### Fuentes Locales
Las fuentes están declaradas en `src/app/globals.css`:
```css
@font-face {
  font-family: 'Nefelibata Script';
  src: url('/nefelibata-script.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Belleza';
  src: url('/belleza.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Now';
  src: url('/now/Now-Bold.otf') format('opentype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

### Variables CSS
Las variables están definidas en `src/app/globals.css`:
```css
:root {
  --color-red-dark: #681200;
  --color-brown-dark: #492402;
  --color-beige-light: #D3C3AF;
  
  --font-title: 'Nefelibata Script', serif;
  --font-subtitle: 'Now', sans-serif;
  --font-text: 'Belleza', sans-serif;
}
```

### Configuración de Tailwind
Los colores y fuentes están configurados en `tailwind.config.js`:
```js
colors: {
  'red-dark': 'var(--color-red-dark)',
  'brown-dark': 'var(--color-brown-dark)',
  'beige-light': 'var(--color-beige-light)',
},
fontFamily: {
  title: ['Nefelibata Script', 'serif'],
  subtitle: ['Now', 'sans-serif'],
  text: ['Belleza', 'sans-serif'],
}
```

## Mejores Prácticas

1. **Consistencia**: Usa siempre los componentes `Title`, `Subtitle`, y `BodyText` para mantener consistencia
2. **Jerarquía**: Respeta la jerarquía de tipografías (título → subtítulo → texto)
3. **Contraste**: Asegúrate de que el texto sea legible sobre el fondo elegido
4. **Accesibilidad**: Mantén un contraste adecuado entre texto y fondo
5. **Rendimiento**: Las fuentes locales se cargan más rápido que las fuentes web

## Compatibilidad

El tema mantiene compatibilidad con los estilos existentes:
- Los colores antiguos siguen disponibles
- Las fuentes antiguas están mapeadas a las nuevas
- Los componentes existentes seguirán funcionando

## Recursos

- **Página de demostración**: `/demo-theme`
- **Archivo de utilidades**: `src/componets/common/utils.tsx`
- **Estilos globales**: `src/app/globals.css`
- **Configuración de Tailwind**: `tailwind.config.js`
- **Fuentes locales**: `/public/` (nefelibata-script.otf, belleza.ttf, now/) 