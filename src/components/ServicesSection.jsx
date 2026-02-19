import { Zap, Droplets, Hammer, Wrench, HardHat, Sparkles } from 'lucide-react';
import ServiceCard from './ServiceCard';

// Service images
import electricianImg from '../assets/electrican.jpg';
import plumberImg from '../assets/plumber.jpg';
import carpenterImg from '../assets/carpenter.jpg';
import mechanicImg from '../assets/mechanic.jpg';
import constructionImg from '../assets/construction.jpg';
import housekeepingImg from '../assets/housekeeping.jpg';

const services = [
    {
        icon: Zap,
        title: 'Electricians',
        description: 'Licensed professionals for wiring, repairs, installations, and maintenance of electrical systems.',
        color: 'text-yellow-500',
        bg: 'bg-gradient-to-br from-yellow-50 to-amber-50',
        border: 'hover:border-yellow-300',
        badge: 'bg-yellow-100 text-yellow-700',
        image: electricianImg,
    },
    {
        icon: Droplets,
        title: 'Plumbers',
        description: 'Expert plumbing services for leak repairs, pipe installations, and drainage solutions.',
        color: 'text-blue-500',
        bg: 'bg-gradient-to-br from-blue-50 to-cyan-50',
        border: 'hover:border-blue-300',
        badge: 'bg-blue-100 text-blue-700',
        image: plumberImg,
    },
    {
        icon: Hammer,
        title: 'Carpenters',
        description: 'Skilled woodworkers for furniture, cabinets, framing, and custom woodwork projects.',
        color: 'text-amber-600',
        bg: 'bg-gradient-to-br from-amber-50 to-orange-50',
        border: 'hover:border-amber-300',
        badge: 'bg-amber-100 text-amber-700',
        image: carpenterImg,
    },
    {
        icon: Wrench,
        title: 'Mechanics',
        description: 'Certified mechanics for vehicle maintenance, engine repairs, and diagnostic services.',
        color: 'text-slate-600',
        bg: 'bg-gradient-to-br from-slate-50 to-gray-100',
        border: 'hover:border-slate-300',
        badge: 'bg-slate-100 text-slate-700',
        image: mechanicImg,
    },
    {
        icon: HardHat,
        title: 'Construction Workers',
        description: 'Experienced crews for building, renovation, demolition, and civil construction projects.',
        color: 'text-orange-500',
        bg: 'bg-gradient-to-br from-orange-50 to-red-50',
        border: 'hover:border-orange-300',
        badge: 'bg-orange-100 text-orange-700',
        image: constructionImg,
    },
    {
        icon: Sparkles,
        title: 'Housekeeping',
        description: 'Professional cleaning and housekeeping services for homes, offices, and commercial spaces.',
        color: 'text-purple-500',
        bg: 'bg-gradient-to-br from-purple-50 to-violet-50',
        border: 'hover:border-purple-300',
        badge: 'bg-purple-100 text-purple-700',
        image: housekeepingImg,
    },
];

function ServicesSection() {
    return (
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-50/50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full mb-4 border border-primary-100">
                        <Sparkles size={14} />
                        Our Services
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        What We <span className="gradient-text">Offer</span>
                    </h2>
                    <p className="text-gray-500 leading-relaxed">
                        Browse through our wide range of blue-collar service categories
                        and find the right professionals for your needs.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
