function CustomerDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">
        Welcome, {user?.name} 👋
      </h1>

      <p className="text-gray-600 mb-6">
        Find skilled workers near you and book instantly.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-2">🔍 Find Workers</h2>
          <p className="text-gray-500 mb-4">
            Search workers by skill and location.
          </p>
          <button className="px-4 py-2 bg-primary-600 text-white rounded">
            Search Workers
          </button>
        </div>

        <div className="p-6 border rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-2">📅 My Bookings</h2>
          <p className="text-gray-500 mb-4">
            View your current and past bookings.
          </p>
          <button className="px-4 py-2 bg-emerald-600 text-white rounded">
            View Bookings
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;
