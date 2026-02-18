import React from 'react';
import { Briefcase, User, Search, Hammer } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-50 to-white">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="bg-blue-600 text-white p-2 rounded-lg">
                        <Hammer size={24} />
                    </div>
                    <h1 className="text-3xl font-bold text-blue-900">SkillBridge</h1>
                </div>
                <p className="text-slate-500 font-medium">Connecting You to Local Skilled Workers</p>
            </div>

            {/* Illustration */}
            <div className="w-full max-w-xs mb-8">
                <img
                    src="https://img.freepik.com/free-vector/construction-team-concept-illustration_114360-5211.jpg?t=st=1740237367~exp=1740240967~hmac=55648c68eb40954b986e87b7a1d13f56ce542618805f03761cc2e55390740924&w=740"
                    alt="Skilled Workers Illustration"
                    className="w-full h-auto rounded-lg mix-blend-multiply"
                />
            </div>

            {/* Role Selection */}
            <div className="w-full max-w-md space-y-4">
                <Card onClick={() => navigate('/customer/home')} className="cursor-pointer border-2 border-transparent hover:border-blue-100 transition-all active:scale-95">
                    <div className="flex items-center gap-4">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                            <Search size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-800">Customer Login</h3>
                            <p className="text-sm text-slate-500">Find Local Services</p>
                        </div>
                    </div>
                    <Button variant="primary" className="mt-4">
                        Customer Login
                    </Button>
                </Card>

                <Card onClick={() => navigate('/worker/signup')} className="cursor-pointer border-2 border-transparent hover:border-orange-100 transition-all active:scale-95">
                    <div className="flex items-center gap-4">
                        <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                            <Briefcase size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-800">Worker Sign Up / Login</h3>
                            <p className="text-sm text-slate-500">Blue Collar Workers</p>
                        </div>
                    </div>
                    <Button variant="secondary" className="mt-4">
                        Worker Sign Up
                    </Button>
                </Card>

                <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-slate-200" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-slate-400">Or continue with</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="py-2 text-sm">Google</Button>
                    <Button variant="outline" className="py-2 text-sm">Facebook</Button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
