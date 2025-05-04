export function TitlePage(){
    return (
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-[--color-neutral-soft] drop-shadow-lg">
            Movimiento de Vida en Gracia
        </h1>
    )
}

export function Title({title}: {title: string}) {
    return(
        <h1 className="text-4xl font-bold text-[--color-text] mb-4">{title}</h1>
    )
}

export function Subtitle({subtitle}: {subtitle: string}) {
    return(
        <h2 className="text-3xl font-bold text-[--color-text] mb-6">{subtitle}</h2>
    )
}