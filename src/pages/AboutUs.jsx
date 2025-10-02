import { FaRobot, FaRocket, FaHandshake } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import Lottie from "lottie-react";
import { motion } from "framer-motion";   
import robotAnimation from "../assets/files/Ai-powered marketing tools abstract.json";

export default function AboutUS() {
  return (
    <>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
        className="relative px-[2%] md:px-[0.3%] mt-[30%] sm:mt-[2%] md:mt-[6%] overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #0b0b0d 0%, rgba(23,18,12,0.85) 40%, rgba(20,18,15,0.95) 100%)",
          }}
        />
        <div className="relative z-10 px-[5%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center min-h-[108vh]">
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-7 max-w-2xl"
            >
              <h1 className="text-white font-extrabold">
                <span className="text-[20px] sm:text-2xl md:text-3xl lg:text-4xl block text-pur">
                  Creators of Practical
                </span>
                <span className="block text-4xl sm:text-5xl md:text-[54px] lg:text-[64px] leading-tight tracking-[-0.02em]">
                  <span className="inline-block ml-11 text-white/95">AI</span>
                  <span className="inline-block ml-3 text-pur">Agents</span>
                </span>
                <span className="block mt-2 text-sm md:text-base text-white/90">
                  Engineered by People, Powered by Models
                </span>
                <span
                  aria-hidden
                  className="mt-4 block w-40 h-1 rounded-full bg-gradient-to-r from-pur/80 to-[#7B4CFF]/60"
                />
              </h1>

              <p className="mt-6 text-gray-300 text-[14px] md:text-[18px] leading-relaxed">
                We design, build, and deliver production-ready AI agents. Our
                small core team of founders and product designers define agent
                purpose and safety; our engineers implement robust integrations
                and observability; our developer-ops and support teams keep
                deployments stable in production.
              </p>

              <p className="mt-4 text-gray-300 text-[14px] md:text-[18px] leading-relaxed">
                We partner with customers to map concrete business outcomes,
                ship lightweight pilots, and scale solutions that reduce manual
                work while keeping human oversight and data controls front and
                center.
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
                    <p className="text-sm font-medium text-white">
                      Builder-first
                    </p>
                    <p className="text-xs text-gray-300">
                      Engineers and product designers ship safe, testable
                      agents.
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
                    <p className="text-sm font-medium text-white">
                      Go-to-market
                    </p>
                    <p className="text-xs text-gray-300">
                      Product & sales teams validate ROI, onboard customers, and
                      enable adoption.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex justify-center -mt-[10%] md:-mt-[30%]"
            >
              <Lottie
                animationData={robotAnimation}
                loop
                autoplay
                style={{ width: 500, height: 400 }}
              />
            </motion.div>
          </div>

          <p className="mt-10 text-gray-400 text-sm">
            We focus on durable systems: clear ownership, observability, and
            commercial alignment. For demos and agent examples, visit the Agents
            page.
          </p>
        </div>
      </motion.section>

      {/* Section 1: Success Story */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative py-16 px-[5%] bg-[#0d0d11]"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
              <FaRocket className="text-pur text-4xl" /> Success Story
            </h2>
            <p className="mt-4 text-gray-300 text-[15px] md:text-[18px] leading-relaxed">
              One of our AI agents helped a logistics company cut manual
              paperwork by 60% and save over 2,000 hours annually. The agent
              scaled to manage <span className="text-pur">10k+ daily tasks</span>
              with 99.9% uptime, ensuring smooth operations.
            </p>
            <p className="mt-3 text-gray-400 text-sm">
              *Demo content for showcase purpose only.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="p-10 bg-[#1b1b20] rounded-2xl shadow-lg flex flex-col items-center">
              <FaRobot className="text-pur text-6xl mb-4" />
              <p className="text-gray-200 font-semibold">AI Agent Impact</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 2: Our Approach */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative py-16 px-[5%]"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="p-10 bg-[#1b1b20] rounded-2xl shadow-lg flex flex-col items-center">
              <MdOutlineSecurity className="text-pur text-6xl mb-4" />
              <p className="text-gray-200 font-semibold">Safe & Reliable</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
              <HiLightBulb className="text-pur text-4xl" /> Our Approach
            </h2>
            <p className="mt-4 text-gray-300 text-[15px] md:text-[18px] leading-relaxed">
              Every AI agent is designed to solve{" "}
              <span className="text-pur">specific business needs</span> while
              ensuring safety, transparency, and easy adoption. We focus on
              making AI practical and human-centric.
            </p>
            <ul className="mt-6 space-y-2 text-gray-300">
              <li>✔ Pilot → Deploy → Scale framework</li>
              <li>✔ Continuous observability & reporting</li>
              <li>✔ Human-in-the-loop for oversight</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Section 3: Future Vision */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative py-16 px-[5%] bg-[#0d0d11]"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex justify-center items-center gap-3">
            <BsGraphUp className="text-pur text-4xl" /> The Future of AI Agents
          </h2>
          <p className="mt-4 text-gray-300 text-[15px] md:text-[18px] leading-relaxed max-w-3xl mx-auto">
            Our long-term vision is to make AI agents{" "}
            <span className="text-pur">trusted co-pilots</span> for every
            business team. From customer support to analytics, agents reduce
            manual effort while keeping <span className="text-pur">humans in control</span>.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-[#1b1b20] rounded-xl shadow-md hover:scale-105 transition">
              <FaRocket className="text-pur text-3xl mb-3" />
              <h3 className="text-lg font-semibold text-white">Scalable</h3>
              <p className="mt-2 text-gray-400 text-sm">
                Agents grow with your business needs, adapting to complexity.
              </p>
            </div>
            <div className="p-6 bg-[#1b1b20] rounded-xl shadow-md hover:scale-105 transition">
              <MdOutlineSecurity className="text-pur text-3xl mb-3" />
              <h3 className="text-lg font-semibold text-white">Reliable</h3>
              <p className="mt-2 text-gray-400 text-sm">
                Always-on performance with observability & monitoring tools.
              </p>
            </div>
            <div className="p-6 bg-[#1b1b20] rounded-xl shadow-md hover:scale-105 transition">
              <FaHandshake className="text-pur text-3xl mb-3" />
              <h3 className="text-lg font-semibold text-white">Human-Centric</h3>
              <p className="mt-2 text-gray-400 text-sm">
                Built with ethics, transparency, and oversight in mind.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
