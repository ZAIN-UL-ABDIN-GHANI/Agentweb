// src/pages/Home.jsx
import React from "react";
import Homeimage from "../assets/homepageimage.png";
import AgentsCards from "../components/Agent/AgentCard";
import AgentsData from "../components/Agent/AgentData";
import AiBusyWork from "./AiBusyWork";
import { Link } from "react-router-dom";
import TestimonialSlider from "../components/TestimonialSlider";
import { blogsData } from "../pages/Blogs/seperate/index";

import Lottie from "lottie-react";
import robotAnimation from "../assets/files/agent.json";
import { motion } from "framer-motion";
import ChatBot from "../components/chatbot";

export default function Home() {
  const features = [
    {
      title: "Task Automation",
      desc: "Let your AI Agent manage repetitive tasks like scheduling meetings, sending reminders, drafting follow-ups, and updating your to-do lists. It syncs across calendars and devices, ensuring you never miss a deadline.",
      button: "Start Free Trial",
    },
    {
      title: "Client & Project Management",
      desc: "Built for entrepreneurs and small teams, your AI Agent keeps everything organized: client communications, project timelines, task assignments, and progress reports.",
    },
    {
      title: "Research & Insights",
      desc: "Stop drowning in endless documents and data. Your AI Agent scans articles, reports, and databases, then delivers concise summaries, actionable insights, and visual charts.",
      button: "Start Free Trial",
    },
    {
      title: "Custom Personality & Integrations",
      desc: "Train it your way and connect with all your favorite apps like Slack, Notion, Trello, etc. Your AI Agent adapts to your workflow seamlessly.",
    },
  ];

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="px-[2%] md:px-[0.3%] mt-[1%] sm:mt-[3%] md:mt-[2%] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #0b0b0d 0%, rgba(23,18,12,0.85) 40%, rgba(20,18,15,0.95) 100%)",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <div className="relative z-10 px-[5%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center min-h-[108vh]">
          {/* LEFT: Text Content */}
          <motion.div
            className="lg:col-span-7 max-w-2xl"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[34.7px] md:leading-[37.7px] lg:leading-[47px] mt-[30%] sm:mt-[0.6%]">
              <span className="text-pur">Next-Gen Agents:</span>{" "}
              <span className="block text-white/95">Smart Automation</span>
              <span className="block text-white/95">for Modern Business</span>
            </h1>

            <p className="mt-6 text-gray-300 text-[14px] leading-[18px] md:text-[18px] md:leading-[22px]">
              Transform your business with AI agents that automate tasks,
              analyze data, and engage customers 24/7. Experience seamless
              integration and human-like interactions that boost productivity
              and reduce overhead.
            </p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-8 flex gap-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Link
                to="/login"
                className="px-3 text-[12px] md:text-[16px] md:px-6 py-3 rounded-md bg-pur text-black font-semibold shadow 
             transition-all duration-100 ease-in-out transform hover:scale-105 hover:bg-purLight"
              >
                Start Free Trial
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 rounded-md border border-pur text-pur 
             transition-all duration-100 ease-in-out transform hover:scale-105 hover:bg-purLight hover:text-black"
              >
                Get Started
              </Link>
            </motion.div>

            {/* Features */}
            <motion.ul
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center h-9 w-9 rounded-full bg-pur text-slate-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-medium text-white">Smart</p>
                  <p className="text-xs text-gray-300">Automate daily tasks</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center h-9 w-9 rounded-full bg-white/10 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-medium text-white">Fast</p>
                  <p className="text-xs text-gray-300">
                    Generate accurate insights
                  </p>
                </div>
              </li>
            </motion.ul>
          </motion.div>

          {/* Right div */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Lottie
              animationData={robotAnimation}
              loop
              autoplay
              className="w-[250px] h-[250px] md:h-[500px] md:w-[400px] lg:w-[600px] lg:h-[600px]"
            />
          </motion.div>
        </div>
      </div>

      <AiBusyWork />

      {/* === Smart Features Section === */}
      <motion.section className=" py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-pur">
            Smarter. <span className="text-purLight">Faster.</span> Made for
            You.
          </h2>
          <p className="text-gray-300 mt-4 text-lg md:text-xl">
            Explore what your AI Agent can do — all in one powerful assistant.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className=" p-6 rounded-2xl flex flex-col justify-between cursor-pointer shadow-xl"
              variants={{
                hidden: { opacity: 0, y: 60, rotate: -2 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                y: -4,
                boxShadow: "0 20px 40px rgba(157,0,255,0.4)",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              whileTap={{
                scale: 0.97,
                rotate: 0,
                transition: { duration: 0.2 },
              }}
            >
              <h3 className="text-[16px] md:text-2xl font-bold text-purLight mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 mb-6">{feature.desc}</p>
              {feature.button && (
                <motion.button
                  className="bg-purLight  text-black px-6 py-3 rounded-lg font-semibold hover:bg-extrapurLight transition duration-300 w-max"
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 10px 20px rgba(157,0,255,0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {feature.button}
                </motion.button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* === Blog preview (show only 3) === */}
      <motion.div
        className="max-w-6xl mx-auto px-[4%] md:px-[5%] mt-16"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
      >
        {/* header */}
        <div className="mb-8 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-white mb-2"
          >
            Featured Insights from AI Agents
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="text-sm text-gray-300 max-w-2xl mx-auto"
          >
            A quick peek at our latest posts — curated for curious builders and
            decision makers.
          </motion.p>
        </div>

        {/* cards grid (3 only) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogsData.slice(0, 3).map((blog) => (
            <motion.article
              key={blog.id}
              className=" rounded-2xl overflow-hidden shadow-lg"
              initial={{ y: 26, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-full h-56">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="p-4">
                <h4 className="text-lg font-semibold mb-2 text-pur">
                  {blog.title}
                </h4>
                <p className="text-sm text-gray-400 mb-3 line-clamp-3">
                  {blog.description}
                </p>

                <div className="flex items-center justify-between">
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-pur font-semibold"
                  >
                    Read More →
                  </Link>
                  <time className="text-xs text-gray-500">{blog.date}</time>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* view all button */}
        <div className="mt-8 flex justify-start">
          <Link
            to="/blog"
            className="px-6 py-3 rounded-lg bg-pur text-black font-semibold hover:bg-purLight transition-all duration-300"
          >
            View All Blogs
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <TestimonialSlider />
      </motion.div>
    </motion.section>
  );
}
