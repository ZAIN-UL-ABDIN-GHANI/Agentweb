import React from "react";

export default function PricingPlans() {
  return (
    <main className="min-h-screen flex items-center justify-center py-16 px-8 md:px-[5%] mt-[8%] md:mt-[4%] text-white antialiased">
      <div className="max-w-7xl w-full">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold">
            <span className="text-white">Pricing</span>{" "}
            <span className="text-pur">Plans</span>
          </h1>
          <p className="mt-3 text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your workflow. Scale your AI Agents as you
            grow. Start small, unlock advanced automation, or power your entire
            team — all with flexible AI pricing.
          </p>
        </header>

        <section className="grid gap-8 grid-cols-1 md:grid-cols-3 items-start">
          {/* Starter */}
          <article className="bg-white/95 text-[#0b0b0b] rounded-2xl p-8 shadow-lg transform transition hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-pur">Starter</h3>
            <p className="mt-2 text-sm text-gray-600">
              Ideal for individuals and solopreneurs.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "1 AI Agent",
                "Task automation (emails, scheduling)",
                "Basic analytics & reporting",
                "Cross-device sync",
              ].map((item) => (
                <li className="flex items-start gap-3" key={item}>
                  <svg
                    className="w-5 h-5 text-pur flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-gray-800">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-end justify-between text-pur">
              <div>
                <div className="text-2xl font-bold">
                  $15
                  <span className="text-sm font-normal text-gray-500">
                    {" "}
                    / per month
                  </span>
                </div>
                <div className="text-xs text-gray-600 mt-1">7 days free</div>
              </div>
              <button className="rounded-full text-[10px] px-4 md:px-6 py-2  bg-pur text-white shadow-sm hover:brightness-95 transition">
                Upgrade
              </button>
            </div>
          </article>

          {/* Growth (Popular) */}
          <article
            className="relative bg-extrapurLight  text-pur  rounded-[1.25rem] p-8"
            style={{
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.45), inset 0 1px 0 rgba(157,0,255,0.06)", 
              border: "2px solid rgba(157, 0, 255, 0.2)", 
            }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="bg-pur text-white text-xs font-medium py-1.5 px-4 rounded-full shadow">
                Popular plan
              </div>
            </div>

            <h3 className="text-xl font-semibold text-pur">
              Growth{" "}
              <span className="text-sm font-medium text-gray-800">
                (Best Choice)
              </span>
            </h3>
            <p className="mt-2 text-sm text-gray-800/80">
              Built for freelancers, creators, and small teams scaling their
              productivity.
            </p>

            <ul className="mt-6 space-y-3 text-pur">
              {[
                "Everything in Starter",
                "Up to 5 AI Agents",
                "Advanced workflows & API integrations",
                "Priority support (24/7)",
              ].map((item) => (
                <li className="flex items-start gap-3" key={item}>
                  <svg
                    className="w-5 h-5 text-pur flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-black">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">
                    $39
                    <span className="text-sm font-normal text-gray-500">
                      {" "}
                      / per month
                    </span>
                  </div>
                  <div className="text-xs text-text-gray-500 mt-1">
                    2 days left in trial
                  </div>
                </div>
                <button className="rounded-xl text-[10px] px-4 md:px-6 py-2  bg-pur text-white font-medium shadow hover:brightness-95 transition">
                  Manage
                </button>
              </div>

              <div className="text-xs text-pur">
                * Annual billing and volume discounts available
              </div>
            </div>
          </article>

          {/* Enterprise */}
          <article className="bg-white/95 text-pur rounded-2xl p-8 shadow-lg transform transition hover:-translate-y-1">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="mt-2 text-sm text-gray-700">
              Perfect for startups, teams, and organizations with advanced
              needs.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Everything in Growth",
                "Unlimited AI Agents",
                "Dedicated success manager",
                "Compliance & security reports",
              ].map((item) => (
                <li className="flex items-start gap-3" key={item}>
                  <svg
                    className="w-5 h-5 text-pur flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-end justify-between">
              <div>
                <div className="text-2xl font-bold">
                  $15
                  <span className="text-sm font-normal text-gray-500">
                    {" "}
                    / per month
                  </span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Custom plans available
                </div>
              </div>
              <button className="rounded-full text-[10px] px-4 md:px-6 py-2  bg-pur text-white shadow-sm hover:brightness-95 transition">
                Custom Pricing
              </button>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
