// src/pages/Contact.jsx
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import robotAnimation from "../assets/files/Robot.json";
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    agent: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    msg: "",
  });

  const agents = [
  { value: "", label: "Any / Unsure" },
  { value: "task", label: "Task Automation" },
  { value: "research", label: "Research" },
  { value: "business", label: "Business Intelligence" },
  { value: "support", label: "Customer Support" },
  { value: "marketing", label: "Marketing" },
  { value: "sales", label: "Sales" },
  { value: "healthcare", label: "Healthcare" },
  { value: "education", label: "Education" },
  { value: "finance", label: "Finance" },
  { value: "hr", label: "HR" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "security", label: "Security" },
];

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Email is invalid";
    if (!form.message.trim() || form.message.length < 10)
      e.message = "Message must be at least 10 characters";
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  // called when user selects an agent from the Listbox
  function handleAgentChange(value) {
    // also write the selection into your form state (so handleSubmit sees it)
    setForm((s) => ({ ...s, agent: value.value }));

    // blur the Listbox button to force it to close
    // small timeout lets HeadlessUI process the selection first
    setTimeout(() => {
      if (listboxButtonRef.current) listboxButtonRef.current.blur();
      else if (document.activeElement) document.activeElement.blur();
    }, 50);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const eobj = validate();
    if (Object.keys(eobj).length) {
      setErrors(eobj);
      return;
    }
    setStatus({ submitting: true, success: null, msg: "" });

    try {
      await new Promise((r) => setTimeout(r, 900));
      setStatus({
        submitting: false,
        success: true,
        msg: "Thanks — we received your message. We'll contact you soon.",
      });
      setForm({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        agent: "",
      });
      setSelected(agents[0]); // reset dropdown
    } catch {
      setStatus({
        submitting: false,
        success: false,
        msg: "Something went wrong. Please try again later.",
      });
    }
  }

  return (
    <main className="min-h-screen px-[8%] md:px-[6%] py-[20%] md:py-8 mt-[10%] sm:mt-[2%] md:mt-[6%] text-sm md:text-base">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT – Form */}
        <section className="lg:col-span-7">
          <h1 className="text-white font-extrabold">
            <span className="block text-pur text-[20px] sm:text-2xl md:text-3xl lg:text-4xl">
              Let’s Discuss Your Next
            </span>
            <span className="block text-4xl sm:text-5xl md:text-[54px] lg:text-[64px] leading-tight tracking-[-0.02em]">
              <span className="inline-block ml-10 text-white/95">AI</span>
              <span className="inline-block ml-3 text-pur">Agents</span>
            </span>
            <span className="block mt-2 text-sm md:text-base text-white/90">
              Talk to our team about integrations and custom solutions
            </span>
            <span
              aria-hidden
              className="mt-4 block w-[70%] h-1 rounded-full bg-gradient-to-r from-pur/80 to-[#7B4CFF]/60"
            />
          </h1>

          <p className="mt-4 max-w-2xl text-gray-300 text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
            Fill out the form and our product team will get back to you to
            discuss pilots, demos, pricing, and technical integration details.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-4 max-w-2xl"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-gray-300 text-xs">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`mt-1 block w-full rounded-md border px-3 py-2 bg-[#0b0b0d]/60 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[--pur] ${
                    errors.name ? "border-red-500" : "border-gray-700"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </label>

              <label className="block">
                <span className="text-gray-300 text-xs">Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className={`mt-1 block w-full rounded-md border px-3 py-2 bg-[#0b0b0d]/60 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[--pur] ${
                    errors.email ? "border-red-500" : "border-gray-700"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-gray-300 text-xs">
                  Company (optional)
                </span>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  className="mt-1 block w-full rounded-md border px-3 py-2 bg-[#0b0b0d]/60 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[--pur] border-gray-700"
                />
              </label>

              <label className="block w-full">
                <span className="text-gray-300 text-xs">
                  Interested Agent (optional)
                </span>

                <select
                  name="agent"
                  value={form.agent}
                  onChange={(e) => {
                    const val = e.target.value;
                    setForm((s) => ({ ...s, agent: val }));
                    setSelected(
                      agents.find((a) => a.value === val) || agents[0]
                    );
                  }}
                  className="mt-1 w-full rounded-md border border-gray-700
      bg-[#0b0b0d]/60 text-white px-3 py-2 text-sm md:text-base
      focus:outline-none focus:ring-2 focus:ring-pur appearance-none"
                >
                  {agents.map((agent) => (
                    <option
                      key={agent.value}
                      value={agent.value}
                      className={`text-white bg-[#0b0b0d] hover:bg-pur checked:bg-pur`}
                    >
                      {agent.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block">
              <span className="text-gray-300 text-xs">Subject</span>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Short subject"
                className="mt-1 block w-full rounded-md border px-3 py-2 bg-[#0b0b0d]/60 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[--pur] border-gray-700"
              />
            </label>

            <label className="block">
              <span className="text-gray-300 text-xs">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                placeholder="Tell us about your use case, expected scale, integrations..."
                className={`mt-1 block w-full rounded-md border px-3 py-2 bg-[#0b0b0d]/60 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[--pur] ${
                  errors.message ? "border-red-500" : "border-gray-700"
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400">{errors.message}</p>
              )}
            </label>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={status.submitting}
                className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-pur text-white hover:bg-purLight hover:text-black font-semibold shadow hover:brightness-95 transition disabled:opacity-60"
              >
                {status.submitting ? "Sending..." : "Send Message"}
              </button>

              <Link
                to="/agents"
                className="px-[6px] text-[12px] md:text-[16px] md:px-6 py-2 rounded-md bg-pur text-white font-semibold shadow hover:bg-purLight hover:text-black transition"
              >
                View Agent
              </Link>
            </div>

            {status.success && (
              <div className="mt-3 rounded-md bg-green-900/30 border border-green-700 p-3 text-green-200">
                {status.msg}
              </div>
            )}
            {status.success === false && (
              <div className="mt-3 rounded-md bg-red-900/30 border border-red-700 p-3 text-red-200">
                {status.msg}
              </div>
            )}
          </form>
        </section>

        {/* RIGHT – Contact Info */}
        <aside className="lg:col-span-5">
          <div className="sticky top-24 space-y-6">
            <div className="rounded-xl bg-[#1a1406] border border-pur/60 p-5">
              <h4 className="text-pur font-semibold">Get in touch</h4>
              <p className="mt-2 text-gray-300 text-sm">
                Email:{" "}
                <a className="text-white/90" href="mailto:sales@domain.com">
                  sales@domain.com
                </a>
              </p>
              <p className="mt-1 text-gray-300 text-sm">
                Phone: <span className="text-white/90">+92 300 0000000</span>
              </p>
              <p className="mt-3 text-gray-400 text-xs">
                Typical response time: 1-2 business days
              </p>

              <div className="mt-4 border-t border-gray-700/30 pt-4 text-sm text-gray-300">
                <p className="font-medium text-white/90">For partnerships</p>
                <p className="mt-1">partner@domain.com</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden bg-[#0b0b0d] border border-pur/60">
              <Lottie
                animationData={robotAnimation}
                loop
                autoplay
                className="w-[300px] h-[300px] md:h-[260px] md:w-[450px] "
              />

              <div className="p-4">
                <p className="text-gray-300 text-sm">
                  Prefer a live demo? Book a 20-min walkthrough with our product
                  team — we'll tailor the demo to your use case.
                </p>
                <Link
                  to="/book-demo"
                  className="mt-3 inline-block px-3 py-2 rounded-md bg-[--pur] text-black font-semibold text-sm hover:brightness-95 transition"
                >
                  Book demo
                </Link>
              </div>
            </div>

            <div className="text-xs text-gray-400">
              <p>Address: 123 AI Street, Islamabad</p>
              <p className="mt-1">© {new Date().getFullYear()} Company</p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
