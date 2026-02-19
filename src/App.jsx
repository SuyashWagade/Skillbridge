import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

// 🔥 ADD THESE IMPORTS
import WorkerProfile from './Pages/WorkerProfile';
import CustomerDashboard from './Pages/CustomerDashboard';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="flex-1">
          <Routes>
            {/* Public pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* 🔥 ROLE-BASED PAGES */}
            <Route path="/worker/profile" element={<WorkerProfile />} />
            <Route path="/customer/dashboard" element={<CustomerDashboard />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
