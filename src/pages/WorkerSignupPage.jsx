import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

const WorkerSignupPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 p-6 flex flex-col items-center justify-center">
            <div className="w-full max-w-md">
                <button onClick={() => navigate(-1)} className="mb-6 p-2 bg-white rounded-lg shadow-sm text-slate-600">
                    <ArrowLeft size={20} />
                </button>

                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-slate-800">Join as a Professional</h1>
                    <p className="text-slate-500">Start getting jobs in your area</p>
                </div>

                <Card className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-blue-500 transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="+1 234 567 8900"
                            className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-blue-500 transition-colors"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                            <select className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-blue-500 transition-colors text-slate-600">
                                <option>Plumber</option>
                                <option>Electrician</option>
                                <option>Carpenter</option>
                                <option>Painter</option>
                                <option>Mechanic</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Experience</label>
                            <select className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-blue-500 transition-colors text-slate-600">
                                <option>0-2 Years</option>
                                <option>3-5 Years</option>
                                <option>5+ Years</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
                        <input
                            type="text"
                            placeholder="City, Area"
                            className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-blue-500 transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Upload ID Proof</label>
                        <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-slate-400 cursor-pointer hover:bg-slate-50 hover:border-blue-400 transition-colors">
                            <Upload size={24} className="mb-2" />
                            <span className="text-sm">Click to upload or drag & drop</span>
                        </div>
                    </div>

                    <Button variant="secondary" className="mt-4">
                        Start Getting Jobs
                    </Button>
                </Card>

                <p className="text-center text-xs text-slate-400 mt-6">
                    By signing up, you agree to our Terms & Conditions
                </p>
            </div>
        </div>
    );
};

export default WorkerSignupPage;
