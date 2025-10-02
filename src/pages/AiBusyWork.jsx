import React from "react";

import Lottie from "lottie-react";
import robotAnimation from "../assets/files/RobotSaludando.json";
export default function AiBusyWork() {
  return (
    <section
      className="relative overflow-hidden after:content-none no-caret "
      
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "linear-gradient(90deg, rgba(11,11,13,1) 0%, rgba(23,18,12,0.85) 40%, rgba(20,18,15,0.95) 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6  md:px-1 -mt-[20%] md:mt-0 py-4 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[34.7px] md:leading-[37.7px] lg:leading-[47px] mt-[30%] sm:mt-[0.6%] after:content-none before:content-none">
              <span className="text-pur">Let Your AI</span>
              <span className="block text-white/95">Handle the Busywork</span>
            </h1>

            <p className="mt-4 text-gray-300 max-w-full">
              Free up your time with an intelligent agent that takes care of
              scheduling, reminders, and repetitive tasks — so you can focus on
              what truly matters.
            </p>

            {/* FEATURES */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-14  max-w-5xl">
              <Feature
                title="Smart Scheduling"
                desc="Syncs seamlessly with Google & Outlook to book meetings at the perfect time — no back-and-forth emails"
                icon={CalendarIcon}
              />
              <Feature
                title="Auto-Reminders"
                desc="Never miss a deadline again with smart reminders that adapt to your workflow"
                icon={BellIcon}
              />
              <Feature
                title="To-Do Tracking"
                desc="Turn your thoughts into actionable checklists that update in real time across all devices"
                icon={CheckIcon}
              />
              <Feature
                title="Cross-Device Sync"
                desc="Stay organized anywhere — your tasks and reminders follow you from desktop to mobile automatically"
                icon={SyncIcon}
              />
            </div>

            {/* BUTTON */}
            <div className="mt-8">
              <button className="inline-block bg-pur hover:bg-purLight text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:-translate-y-0.5 ml-[5%] md:ml-[8%]">
                Automate My Tasks Now
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center ">
           <Lottie
                        animationData={robotAnimation}
                        loop
                        autoplay
                        className="w-[200px] h-[200px] md:h-[500px] md:w-[400px] lg:w-[600px] lg:h-[600px]"
                      />
                
           
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Feature subcomponent ---------- */
function Feature({ title, desc, icon: Icon }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
      <div>
        <h3 className="text-white font-semibold text-sm">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mt-1">{desc}</p>
      </div>
    </div>
  );
}

/* ---------- Inline SVG Icons ---------- */
const CalendarIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="3" y="4" width="18" height="18" rx="2.5" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const BellIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M15 17H9a3 3 0 0 1-3-3V10a6 6 0 1 1 12 0v4a3 3 0 0 1-3 3z" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const CheckIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const SyncIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M20 12a8 8 0 10-8 8" />
    <path d="M20 16v-4h-4" />
  </svg>
);
