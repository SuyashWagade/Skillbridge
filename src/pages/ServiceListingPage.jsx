import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Phone, Filter } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

const ServiceListingPage = () => {
    const { category } = useParams();
    const navigate = useNavigate();

    // Mock data for workers
    const workers = [
        {
            id: 1,
            name: 'John\'s Plumbing Services',
            rating: 5.0,
            reviews: 120,
            distance: '2 miles',
            services: ['Leak Repairs', 'Pipe Installations'],
            image: 'https://img.freepik.com/free-photo/plumber-with-his-arms-crossed_1368-517.jpg?t=st=1740237367~exp=1740240967~hmac=55648c68eb40954b986e87b7a1d13f56ce542618805f03761cc2e55390740924&w=740'
        },
        {
            id: 2,
            name: 'Mike the Plumber',
            rating: 4.8,
            reviews: 85,
            distance: '3 miles',
            services: ['Emergency Plumbing', 'Drain Cleaning'],
            image: 'https://img.freepik.com/free-photo/portrait-repairer-woman-with-blue-uniform_144627-4663.jpg?t=st=1740237367~exp=1740240967~hmac=55648c68eb40954b986e87b7a1d13f56ce542618805f03761cc2e55390740924&w=740'
        },
        {
            id: 3,
            name: 'Lisa\'s Plumbing Co.',
            rating: 4.7,
            reviews: 92,
            distance: '1.5 miles',
            services: ['Water Heater Repair', 'Faucet Fixes'],
            image: 'https://img.freepik.com/free-photo/serviceman-examining-pipes_1098-17558.jpg?t=st=1740237367~exp=1740240967~hmac=55648c68eb40954b986e87b7a1d13f56ce542618805f03761cc2e55390740924&w=740'
        },
        {
            id: 4,
            name: 'Dave the Plumber',
            rating: 4.9,
            reviews: 200,
            distance: '2.5 miles',
            services: ['Bathroom Renovations', 'Sewer Services'],
            image: 'https://img.freepik.com/free-photo/construction-worker-with-hard-hat_23-2147647898.jpg?t=st=1740237367~exp=1740240967~hmac=55648c68eb40954b986e87b7a1d13f56ce542618805f03761cc2e55390740924&w=740'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <div className="bg-blue-600 p-6 pb-12 text-white rounded-b-3xl">
                <div className="flex items-center justify-between mb-6">
                    <button onClick={() => navigate(-1)} className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                        <ArrowLeft size={20} />
                    </button>
                    <div className="flex gap-4">
                        <button className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                            <Search size={20} />
                        </button>
                        <button className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                            <Filter size={20} />
                        </button>
                    </div>
                </div>
                <h1 className="text-2xl font-bold">Find Nearby {category ? category.charAt(0).toUpperCase() + category.slice(1) + 's' : 'Workers'}</h1>
                <p className="text-blue-100 mt-2">Available for Repairs & Installations</p>
            </div>

            {/* Workers List */}
            <div className="p-6 -mt-8 space-y-4">
                {workers.map((worker) => (
                    <Card key={worker.id} className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md">
                                <img src={worker.image} alt={worker.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-slate-800">{worker.name}</h3>
                                    <div className="flex items-center gap-1 text-orange-500 font-bold text-sm">
                                        <Star size={16} fill="currentColor" />
                                        <span>{worker.rating}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-slate-400 text-sm mt-1">
                                    <MapPin size={14} />
                                    <span>{worker.distance} away</span>
                                </div>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {worker.services.map((service, index) => (
                                        <span key={index} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3 mt-2">
                            <Button variant="primary" className="py-2 text-sm flex-1">
                                <Phone size={16} /> Call
                            </Button>
                            <Button variant="outline" className="py-2 text-sm flex-1">
                                View Profile
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ServiceListingPage;
