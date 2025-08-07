export function TitlePage(){
    return (
        <div className="text-center">
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-title font-bold text-beige-light drop-shadow-2xl tracking-wide">
                Movimiento de Vida en Gracia
            </h1>
            <div className="mt-4 w-32 h-1 bg-gradient-to-r from-transparent via-red-dark to-transparent mx-auto"></div>
        </div>
    )
}

export function Title({title}: {title: string}) {
    return(
        <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-title font-bold text-brown-dark mb-4">{title}</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-dark to-transparent mx-auto"></div>
        </div>
    )
}

export function Subtitle({subtitle}: {subtitle: string}) {
    return(
        <div className="text-center mb-6">
            <h2 className="text-2xl md:text-4xl font-subtitle font-bold text-red-dark mb-3">{subtitle}</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-brown-dark to-transparent mx-auto"></div>
        </div>
    )
}

export function Subtitle2({subtitle}: {subtitle: string}) {
    return(
        <div className="text-center mb-6">
            <h2 className="text-2xl md:text-4xl font-title font-bold text-brown-dark mb-3">{subtitle}</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-red-dark to-transparent mx-auto"></div>
        </div>
    )
}