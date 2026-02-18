import { useState } from "react";

function WorkerProfile() {
  const token = localStorage.getItem("token");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    profession: "",
    skills: "",
    experience: "",
    hourlyRate: "",
    city: "",
    area: "",
    availability: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // 🔒 Safety check
    if (!token) {
      setMessage("You are not logged in. Please login again.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/worker/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          skills: formData.skills
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean),
        }),
      });

      // 🔥 READ RAW RESPONSE FIRST
      const text = await res.text();

      if (!res.ok) {
        throw new Error(text || "Failed to update profile");
      }

      // ✅ Parse only when safe
      JSON.parse(text);

      setMessage("Profile updated successfully ✅");
    } catch (err) {
      setMessage(err.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Complete Worker Profile
      </h1>

      {message && (
        <div className="mb-4 p-3 bg-emerald-50 text-emerald-700 rounded">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="profession"
          placeholder="Profession (Plumber)"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />

        <input
          name="skills"
          placeholder="Skills (pipe repair, fitting)"
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <input
          type="number"
          name="experience"
          placeholder="Experience (years)"
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <input
          type="number"
          name="hourlyRate"
          placeholder="Hourly Rate (₹)"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />

        <input
          name="city"
          placeholder="City"
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <input
          name="area"
          placeholder="Area"
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="availability"
            checked={formData.availability}
            onChange={handleChange}
          />
          Available for work
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-primary-600 text-white rounded font-semibold"
        >
          {loading ? "Saving..." : "Save Profile"}
        </button>
      </form>
    </div>
  );
}

export default WorkerProfile;
