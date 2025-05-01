export default function ComunidadGallery(){
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Galería de la Comunidad</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <img src="/images/comunidad1.jpg" alt="Comunidad 1" className="w-full h-auto rounded-lg shadow-lg" />
                    <img src="/images/comunidad2.jpg" alt="Comunidad 2" className="w-full h-auto rounded-lg shadow-lg" />
                    <img src="/images/comunidad3.jpg" alt="Comunidad 3" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
    );
}