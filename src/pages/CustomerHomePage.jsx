import React from 'react';
import { MapPin, Search, Filter, Wrench, Zap, PaintBucket, Thermometer, Car, PenTool } from 'lucide-react';
import Card from '../components/Card';
import BottomNav from '../components/BottomNav';
import { useNavigate } from 'react-router-dom';

const categories = [
    { id: 'plumber', name: 'Plumber', icon: Wrench, color: 'text-blue-500', bg: 'bg-blue-100' },
    { id: 'electrician', name: 'Electrician', icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-100' },
    { id: 'painter', name: 'Painter', icon: PaintBucket, color: 'text-pink-500', bg: 'bg-pink-100' },
    { id: 'carpenter', name: 'Carpenter', icon: PenTool, color: 'text-orange-500', bg: 'bg-orange-100' },
    { id: 'ac-repair', name: 'AC Repair', icon: Thermometer, color: 'text-cyan-500', bg: 'bg-cyan-100' },
    { id: 'mechanic', name: 'Mechanic', icon: Car, color: 'text-red-500', bg: 'bg-red-100' },
];

const CustomerHomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header Section */}
            <div className="bg-white p-6 pb-4 rounded-b-3xl shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2 text-slate-600">
                        <MapPin size={20} className="text-blue-600" />
                        <span className="font-medium">New York, USA</span>
                    </div>
                    <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
                        <img src="https://i.pravatar.cc/150?img=12" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-800 mb-4">
                    What service do you <br /> need today?
                </h2>

                {/* Search Bar */}
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search for plumber, electrician..."
                        className="w-full pl-12 pr-4 py-3 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-100 transition-all font-medium text-slate-700 placeholder:text-slate-400"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 rounded-lg text-white shadow-lg shadow-blue-500/30">
                        <Filter size={16} />
                    </button>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Categories</h3>
                <div className="grid grid-cols-2 gap-4">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <Card
                                key={cat.id}
                                onClick={() => navigate(`/services/${cat.id}`)}
                                className="flex flex-col items-center justify-center py-6 gap-3 cursor-pointer hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                            >
                                <div className={`p-4 rounded-full ${cat.bg} ${cat.color}`}>
                                    <Icon size={32} />
                                </div>
                                <span className="font-semibold text-slate-700">{cat.name}</span>
                            </Card>
                        );
                    })}
                </div>
            </div>

            <BottomNav />
        </div>
    );
};

export default CustomerHomePage;
