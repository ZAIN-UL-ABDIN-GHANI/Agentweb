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
import Error404 from "./pages/errorpage";
function App() {
  return (
    <div
        style={{
          background:
            "linear-gradient(90deg, #0b0b0d 0%, rgba(23,18,12,0.85) 40%, rgba(20,18,15,0.95) 100%)",
        }} className="min-h-full font-primary select-none bg-[#0a0a0a] text-white">
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
            <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
}

export default App;
