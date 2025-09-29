import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollTop';  

import Home from './pages/Homepage';
import Agents from './pages/Agentpage';
import Automations from './pages/Automationspage';
import AboutUS from './pages/AboutUs';
import ContactPage from './pages/Contactpage ';

//  Auth Pages
import Login from './pages/Auth/Loginpage';
import Signup from './pages/Auth/SigninPage';
import PricingPlans from './pages/Pricingpage';

function App() {
  return (
    <div className="min-h-full font-primary select-none">
      <Header />
      <ScrollToTop />
      <main className="w-full">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUS />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/automations" element={<Automations />} />
          <Route path="/contact" element={<ContactPage />} />
                 <Route path="/Pricing" element={<PricingPlans />} />

          {/* 🔑 Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
