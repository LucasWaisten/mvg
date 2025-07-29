export function TitlePage(){
    return (
        <div className="text-center">
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-display font-bold text-[#faf9f7] drop-shadow-2xl tracking-wide">
                Movimiento de Vida en Gracia
            </h1>
            <div className="mt-4 w-32 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
        </div>
    )
}

export function Title({title}: {title: string}) {
    return(
        <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[#2c1810] mb-4">{title}</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
        </div>
    )
}

export function Subtitle({subtitle}: {subtitle: string}) {
    return(
        <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-secondary mb-3">{subtitle}</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto"></div>
        </div>
    )
}

export function Subtitle2({subtitle}: {subtitle: string}) {
    return(
        <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#2c1810] mb-3">{subtitle}</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto"></div>
        </div>
    )
}