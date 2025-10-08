import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";
import ChatBot from "./components/chatbot";

// Pages

import Agents from "./pages/Agentpage";
import AboutUS from "./pages/AboutUs";
import ContactPage from "./pages/Contactpage ";
import PricingPlans from "./pages/Pricingpage";
import FAQs from "./pages/FaQs";
import Blog from "./pages/Blogs/blogs";
import DetailBlog from "./pages/Blogs/blogDetails";

// Auth
import Login from "./pages/Auth/Loginpage";
import Signup from "./pages/Auth/SigninPage";
import Home from "./pages/Homepage";
import AdminAgents from "./Admin/admin";

function App() {
  return (
    <div className="min-h-full font-primary select-none bg-[#0a0a0a] text-white">
      <Header />
      <ScrollToTop />
      <main className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
    
          <Route path="/about" element={<AboutUS />} />
          <Route path="/agents" element={<Agents />} />
  
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pricing" element={<PricingPlans />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/admin" element={<AdminAgents/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<DetailBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
}

export default App;
