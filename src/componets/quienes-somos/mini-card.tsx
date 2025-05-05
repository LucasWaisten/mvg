interface MiniCardProps {
    icon: string;
    title: string;
    description: string;
}

export default function MiniCard({ icon, title, description }: MiniCardProps) {
    return (
        <div className="bg-white shadow-md rounded-xl p-4 text-left hover:shadow-lg transition">
            <div className="text-3xl mb-2">{icon}</div>
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    );
}