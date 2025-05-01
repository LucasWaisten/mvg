export default function ApostoladosSection(){
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Apostolados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Aquí puedes agregar los componentes de los apostolados */}
                    <div className="bg-gray-100 p-5 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Apostolado 1</h3>
                        <p className="mt-2">Descripción del apostolado 1.</p>
                    </div>
                    <div className="bg-gray-100 p-5 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Apostolado 2</h3>
                        <p className="mt-2">Descripción del apostolado 2.</p>
                    </div>
                    <div className="bg-gray-100 p-5 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Apostolado 3</h3>
                        <p className="mt-2">Descripción del apostolado 3.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}