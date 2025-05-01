export default function Footer(){
    return (
        <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
            <p>Desarrollado por Tu Nombre</p>
        </div>
        </footer>
    );
}