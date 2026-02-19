import { Zap, Droplets, Hammer, Wrench, HardHat, Sparkles, PaintBucket, Truck, Briefcase } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import servicesHero from '../assets/services.jpg';

// Service images
import electricianImg from '../assets/electrican.jpg';
import plumberImg from '../assets/plumber.jpg';
import carpenterImg from '../assets/carpenter.jpg';
import mechanicImg from '../assets/mechanic.jpg';
import constructionImg from '../assets/construction.jpg';
import housekeepingImg from '../assets/housekeeping.jpg';
import painterImg from '../assets/painter.jpg';
import driversImg from '../assets/drivers.jpg';

const services = [
    {
        icon: Zap,
        title: 'Electricians',
        description: 'Licensed electricians for wiring, installations, repairs, and complete electrical solutions for homes and businesses.',
        color: 'text-yellow-500',
        bg: 'bg-gradient-to-br from-yellow-50 to-amber-50',
        border: 'hover:border-yellow-300',
        badge: 'bg-yellow-100 text-yellow-700',
        image: electricianImg,
    },
    {
        icon: Droplets,
        title: 'Plumbers',
        description: 'Professional plumbing services including leak repairs, pipe installations, drainage, and water system maintenance.',
        color: 'text-blue-500',
        bg: 'bg-gradient-to-br from-blue-50 to-cyan-50',
        border: 'hover:border-blue-300',
        badge: 'bg-blue-100 text-blue-700',
        image: plumberImg,
    },
    {
        icon: Hammer,
        title: 'Carpenters',
        description: 'Expert woodworkers for custom furniture, cabinet making, framing, renovations, and all types of woodwork.',
        color: 'text-amber-600',
        bg: 'bg-gradient-to-br from-amber-50 to-orange-50',
        border: 'hover:border-amber-300',
        badge: 'bg-amber-100 text-amber-700',
        image: carpenterImg,
    },
    {
        icon: Wrench,
        title: 'Mechanics',
        description: 'Certified auto and industrial mechanics for engine diagnostics, maintenance, and comprehensive repair services.',
        color: 'text-slate-600',
        bg: 'bg-gradient-to-br from-slate-50 to-gray-100',
        border: 'hover:border-slate-300',
        badge: 'bg-slate-100 text-slate-700',
        image: mechanicImg,
    },
    {
        icon: HardHat,
        title: 'Construction Workers',
        description: 'Skilled construction crews for building, renovation, demolition, masonry, and large-scale civil projects.',
        color: 'text-orange-500',
        bg: 'bg-gradient-to-br from-orange-50 to-red-50',
        border: 'hover:border-orange-300',
        badge: 'bg-orange-100 text-orange-700',
        image: constructionImg,
    },
    {
        icon: Sparkles,
        title: 'Housekeeping',
        description: 'Professional cleaning services for residential, commercial, and industrial spaces with reliable staff.',
        color: 'text-purple-500',
        bg: 'bg-gradient-to-br from-purple-50 to-violet-50',
        border: 'hover:border-purple-300',
        badge: 'bg-purple-100 text-purple-700',
        image: housekeepingImg,
    },
    {
        icon: PaintBucket,
        title: 'Painters',
        description: 'Interior and exterior painting professionals for homes, offices, and commercial buildings with quality finishes.',
        color: 'text-pink-500',
        bg: 'bg-gradient-to-br from-pink-50 to-rose-50',
        border: 'hover:border-pink-300',
        badge: 'bg-pink-100 text-pink-700',
        image: painterImg,
    },
    {
        icon: Truck,
        title: 'Drivers & Movers',
        description: 'Reliable drivers and moving professionals for transportation, relocation, and logistics needs.',
        color: 'text-teal-600',
        bg: 'bg-gradient-to-br from-teal-50 to-cyan-50',
        border: 'hover:border-teal-300',
        badge: 'bg-teal-100 text-teal-700',
        image: driversImg,
    },
];

function Services() {
    return (
        <main>
            {/* Hero Banner */}
            <section
                className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${servicesHero})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-900/75" />

                <div className="absolute inset-0">
                    <div className="absolute top-10 right-10 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl opacity-40" />
                    <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl opacity-40" />
                    <div className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                            backgroundSize: '28px 28px',
                        }}
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-200 bg-white/10 px-4 py-1.5 rounded-full mb-4 border border-white/15">
                        <Briefcase size={14} />
                        Our Services
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
                        Find Skilled Professionals <br className="hidden sm:block" />
                        For Every Job
                    </h1>
                    <p className="text-lg text-primary-100 max-w-2xl mx-auto leading-relaxed">
                        Browse our comprehensive range of blue-collar services and connect
                        with verified professionals near you.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 lg:py-28 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-72 h-72 bg-primary-50/50 rounded-full -translate-y-1/3 -translate-x-1/3 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-50/50 rounded-full translate-y-1/3 translate-x-1/3 blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <ServiceCard key={service.title} {...service} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Services;
