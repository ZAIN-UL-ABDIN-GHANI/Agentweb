import Homeimage from "../assets/aboutus.png";
import { Link } from "react-router-dom";

export default function AboutUS() {
  return (
    <section className="relative px-[2%] md:px-[0.3%] mt-[20%] sm:mt-[2%] md:mt-[6%] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #0b0b0d 0%, rgba(23,18,12,0.85) 40%, rgba(20,18,15,0.95) 100%)",
        }}
      />
      <div className="relative z-10 px-[5%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center min-h-[108vh]">
          <div className="lg:col-span-7 max-w-2xl">
            <h1 className="text-white font-extrabold">
              <span className="text-[20px] sm:text-2xl md:text-3xl lg:text-4xl block text-pur">
                Creators of Practical
              </span>
              <span className="block text-4xl sm:text-5xl md:text-[54px] lg:text-[64px] leading-tight tracking-[-0.02em]">
                <span className="inline-block justify-center items-center ml-11 text-white/95">AI</span>
                <span className="inline-block ml-3 text-pur justify-center items-center align-base ">Agents</span>
              </span>
              <span className="block mt-2 text-sm md:text-base text-white/90">
                Engineered by People, Powered by Models
              </span>
              <span
                aria-hidden
                className="mt-4 block w-40 h-1 rounded-full bg-gradient-to-r from-pur/80 to-[#7B4CFF]/60"
              />
            </h1>

            <p className="mt-6 text-gray-300 text-[14px] leading-[18px] md:text-[18px] md:leading-[22px]">
              We design, build, and deliver production-ready AI agents. Our
              small core team of founders and product designers define agent
              purpose and safety; our engineers implement robust integrations
              and observability; our developer-ops and support teams keep
              deployments stable in production.
            </p>

            <p className="mt-4 text-gray-300 text-[14px] leading-[18px] md:text-[18px] md:leading-[22px]">
              We partner with customers to map concrete business outcomes, ship
              lightweight pilots, and scale solutions that reduce manual work
              while keeping human oversight and data controls front and center.
            </p>
 {/* CTA Buttons */}
            <div className="mt-8 flex gap-4">
              <a
                href="/agents"
                className="px-[6px] text-[12px] md:text-[16px] md:px-6 py-3 rounded-md bg-pur text-black font-semibold shadow hover:bg-purLight transition"
              >
                View Agent (demo)
              </a>
              <a
                href="/contact"
                className="px-2 py-3 rounded-md border border-pur text-pur hover:bg-purLight transition"
              >
                Contact sales
              </a>
            </div>

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
                  <p className="text-sm font-medium text-white">
                    Builder-first
                  </p>
                  <p className="text-xs text-gray-300">
                    Engineers and product designers ship safe, testable agents.
                  </p>
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
                  <p className="text-sm font-medium text-white">Go-to-market</p>
                  <p className="text-xs text-gray-300">
                    Product & sales teams validate ROI, onboard customers, and
                    enable adoption.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 flex justify-center  -mt-[30%] md:-mt-[30%]">
            <img
              src={Homeimage}
              alt="Team and agents"
              loading="lazy"
              className="h-auto max-h-72 w-auto max-w-sm transition-transform duration-300 hover:-translate-y-6 cursor-pointer drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>

        <p className="mt-10 text-gray-400 text-sm">
          We focus on durable systems: clear ownership, observability, and
          commercial alignment. For demos and agent examples, visit the Agents
          page.
        </p>
      </div>
    </section>
  );
}
