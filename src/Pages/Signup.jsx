import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Lock, Eye, EyeOff } from 'lucide-react';

function Signup() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        role: '', // ✅ NEW
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!formData.role) {
            setError('Please select signup type');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            setLoading(true);

            const res = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.fullName,
                    phone: formData.phone,
                    password: formData.password,
                    role: formData.role, // ✅ IMPORTANT
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Signup failed');
            }

            // Save auth
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            // 🔁 Redirect (simple)
            navigate('/login');

            // 🔥 OPTIONAL (role-based redirect)
            // if (data.user.role === 'worker') navigate('/worker/dashboard');
            // else navigate('/customer/dashboard');

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-[calc(100vh-160px)] flex items-center justify-center py-16 px-4 bg-gradient-to-br from-gray-50 via-emerald-50/20 to-violet-50/20">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl p-8 shadow-lg">

                    {/* Header */}
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold">Create Account</h1>
                        <p className="text-gray-500 text-sm">Join SkillBridge</p>
                    </div>

                    {/* Error */}
                    {error && (
                        <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
                            {error}
                        </div>
                    )}

                    {/* 🔥 ROLE SELECTION */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium mb-2">
                            Signup as
                        </label>
                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, role: 'customer' })}
                                className={`flex-1 py-2 rounded-xl border font-semibold
                                  ${formData.role === 'customer'
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-gray-50'
                                    }`}
                            >
                                Customer
                            </button>

                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, role: 'worker' })}
                                className={`flex-1 py-2 rounded-xl border font-semibold
                                  ${formData.role === 'worker'
                                        ? 'bg-violet-600 text-white'
                                        : 'bg-gray-50'
                                    }`}
                            >
                                Worker
                            </button>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Full Name */}
                        <div>
                            <label className="text-sm font-medium">Full Name</label>
                            <div className="relative">
                                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 py-2 rounded-xl border bg-gray-50"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="text-sm font-medium">Phone</label>
                            <div className="relative">
                                <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 py-2 rounded-xl border bg-gray-50"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-sm font-medium">Password</label>
                            <div className="relative">
                                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-10 py-2 rounded-xl border bg-gray-50"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="text-sm font-medium">Confirm Password</label>
                            <input
                                type={showConfirm ? 'text' : 'password'}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                className="w-full py-2 rounded-xl border bg-gray-50"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-emerald-600 text-white rounded-xl font-semibold"
                        >
                            {loading ? 'Creating account...' : 'Create Account'}
                        </button>
                    </form>

                    <p className="text-center text-sm mt-6">
                        Already have an account?{' '}
                        <Link to="/login" className="text-emerald-600 font-semibold">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Signup;
