import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CustomerHomePage from './pages/CustomerHomePage';
import ServiceListingPage from './pages/ServiceListingPage';
import WorkerSignupPage from './pages/WorkerSignupPage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/customer/home" element={<CustomerHomePage />} />
        <Route path="/services/:category" element={<ServiceListingPage />} />
        <Route path="/worker/signup" element={<WorkerSignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
