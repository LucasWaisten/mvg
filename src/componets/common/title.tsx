export function TitlePage(){
    return (
        <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-title font-bold text-beige-light drop-shadow-2xl tracking-wide leading-tight">
                Movimiento de Vida en Gracia
            </h1>
            <div className="mt-2 sm:mt-4 w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-red-dark to-transparent mx-auto"></div>
        </div>
    )
}

export function Title({title}: {title: string}) {
    return(
        <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-5xl font-title font-bold text-brown-dark mb-3 sm:mb-4 leading-tight">{title}</h1>
            <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-red-dark to-transparent mx-auto"></div>
        </div>
    )
}

export function Subtitle({subtitle}: {subtitle: string}) {
    return(
        <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-3xl sm:text-4xl font-subtitle font-bold text-red-dark mb-2 sm:mb-3 leading-tight">{subtitle}</h2>
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-brown-dark to-transparent mx-auto"></div>
        </div>
    )
}

export function Subtitle2({subtitle}: {subtitle: string}) {
    return(
        <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-3xl sm:text-4xl font-title font-bold text-brown-dark mb-2 sm:mb-3 leading-tight">{subtitle}</h2>
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-red-dark to-transparent mx-auto"></div>
        </div>
    )
}