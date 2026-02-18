import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Phone, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: formData.phone,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // ✅ Save token & user
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // ✅ ROLE-BASED REDIRECT (🔥 MAIN CHANGE)
      if (data.user.role === "worker") {
        navigate("/worker/profile");
      } else {
        navigate("/customer/dashboard");
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[calc(100vh-160px)] flex items-center justify-center py-16 px-4 bg-gradient-to-br from-gray-50 via-primary-50/30 to-accent-50/20">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl p-8 shadow-lg">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-white">SB</span>
            </div>
            <h1 className="text-2xl font-bold">Welcome Back</h1>
            <p className="text-gray-500 text-sm">
              Sign in to your SkillBridge account
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Phone */}
            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <div className="relative">
                <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 py-3 rounded-xl border bg-gray-50"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-12 py-3 rounded-xl border bg-gray-50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-primary-600 text-white rounded-xl font-semibold"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="text-center text-sm mt-6">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="font-semibold text-primary-600">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
