import React from "react";
import Homeimage from "../assets/homepageimage.png";
import AgentsCards from "../components/Agent/AgentCard";
import AgentsData from "../components/Agent/AgentData"; 
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="px-[2%] md:px-[0.3%] mt-[1%] sm:mt-[3%] md:mt-[2%] overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #0b0b0d 0%, rgba(23,18,12,0.85) 40%, rgba(20,18,15,0.95) 100%)",
        }}
      />
      <div className="relative z-10 px-[5%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center min-h-[108vh]">
          {/* LEFT: Text Content */}
          <div className="lg:col-span-7 max-w-2xl">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[34.7px] md:leading-[37.7px] lg:leading-[47px]">
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
            <div className="mt-8 flex gap-4">
              <a
                href="/login"
                className="px-3 text-[12px] md:text-[16px] md:px-6 py-3 rounded-md bg-pur text-black font-semibold shadow hover:bg-purLight transition"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="px-6 py-3 rounded-md border border-pur text-pur hover:bg-purLight transition"
              >
                Get Started
              </a>
            </div>

            {/* Features */}
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            </ul>
          </div>

          {/* RIGHT: Image */}
          <div className="lg:col-span-5 flex justify-center -mt-[50%] md:mt-[1%]">
            <img
              src={Homeimage}
              alt="Robot"
              className="
                h-auto max-h-72  
                w-auto max-w-sm  
                transition-transform duration-300
                hover:-translate-y-6 cursor-pointer
                drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]
              "
            />
          </div>
        </div>
      </div>

      {/* Explore Section */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 text-white">
          Explore All <span className="text-pur">AI Agent Solutions</span>
        </h1>
        <p className="text-gray-300 text-sm md:text-base">
          Unlock the full potential of Artificial Intelligence with our complete
          suite of AI Agent solutions. Whether you&apos;re looking to automate
          customer support or streamline research, we’ve got you covered.
        </p>
      </div>

      {/* Only 3 agents shown here */}
      <div className="max-w-6xl mx-auto">
        <AgentsCards items={AgentsData.slice(0, 3)} />
      </div>

      {/* Show more button */}
      <div className="max-w-6xl mx-auto mt-8 flex justify-start">
        <Link
          to="/agents"
          className="px-6 py-3 rounded-lg bg-pur text-black font-semibold hover:bg-purLight transition"
        >
          Show more
        </Link>
      </div>
    </section>
  );
}
