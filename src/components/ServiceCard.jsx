import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function ServiceCard({ icon: Icon, title, description, color, bg, border, badge, image }) {
    return (
        <div
            className={`group rounded-2xl bg-white border-2 border-transparent ${border} card-shadow hover:card-shadow-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden`}
        >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {/* Icon badge */}
                <div
                    className={`absolute bottom-3 right-3 w-12 h-12 ${bg} rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                    <Icon size={22} className={color} />
                </div>
                {/* Popular badge */}
                {badge && (
                    <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${badge} shadow-sm`}>
                        Popular
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {description}
                </p>
                <Link
                    to="/contact"
                    className={`inline-flex items-center gap-1.5 text-sm font-medium ${color} hover:opacity-80 transition-all group/link`}
                >
                    Explore
                    <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
}

export default ServiceCard;
