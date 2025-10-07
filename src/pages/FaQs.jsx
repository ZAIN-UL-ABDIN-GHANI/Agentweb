// src/pages/FAQs.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    q: "What is an AI agent?",
    a: "An AI agent is a software entity capable of performing tasks autonomously or assisting humans by making decisions based on data and rules.",
  },
  {
    q: "How do AI agents help businesses?",
    a: "They automate repetitive tasks, provide customer support, analyze large datasets, and enhance decision-making processes.",
  },
  {
    q: "Are AI agents safe to use?",
    a: "Yes, when properly configured and monitored, AI agents follow rules and protocols designed to ensure safe and reliable operation.",
  },
  {
    q: "Can AI agents learn over time?",
    a: "Yes, advanced AI agents use machine learning to improve their performance and adapt to new situations.",
  },
  {
    q: "Do I need programming skills to use an AI agent?",
    a: "Not necessarily. Many AI agents offer user-friendly interfaces that allow setup and configuration without coding.",
  },
  {
    q: "Can AI agents replace humans?",
    a: "AI agents augment human work rather than fully replace humans. They handle repetitive tasks while humans focus on complex decisions.",
  },
  {
    q: "What industries benefit most from AI agents?",
    a: "Customer service, finance, healthcare, logistics, marketing, and IT operations are major industries leveraging AI agents.",
  },
  {
    q: "How do AI agents communicate?",
    a: "AI agents can communicate via chat interfaces, emails, voice assistants, APIs, or integration with other software systems.",
  },
  {
    q: "Are AI agents customizable?",
    a: "Yes, most AI agents allow customization of behavior, workflow, responses, and integration with other tools.",
  },
  {
    q: "What is the future of AI agents?",
    a: "AI agents will become more intelligent, proactive, and integrated into daily business operations, automating complex tasks and enabling better decision-making.",
  },
  {
    q: "How quickly can AI agents be deployed?",
    a: "Many cloud-based AI agents can be deployed within hours, depending on the complexity and integration requirements.",
  },
  {
    q: "Do AI agents work 24/7?",
    a: "Yes, one of their key benefits is continuous operation without fatigue, improving customer support and monitoring capabilities.",
  },
  {
    q: "Can AI agents integrate with existing software?",
    a: "Yes, most AI agents support APIs, webhooks, and plugins to connect with CRM, ERP, or other business tools.",
  },
  {
    q: "How do AI agents handle sensitive data?",
    a: "Properly configured AI agents follow encryption, access control, and compliance protocols to securely handle sensitive information.",
  },
  {
    q: "Do AI agents require ongoing maintenance?",
    a: "Yes, they need updates, monitoring, and occasional retraining to ensure optimal performance and reliability.",
  },
  {
    q: "Can AI agents generate reports?",
    a: "Absolutely, they can analyze data and generate dashboards, charts, or detailed reports automatically.",
  },
  {
    q: "Are AI agents cost-effective?",
    a: "Over time, AI agents reduce operational costs by automating tasks, minimizing errors, and improving efficiency.",
  },
  {
    q: "Can AI agents handle multiple languages?",
    a: "Many AI agents support multilingual communication, making them suitable for global operations.",
  },
  {
    q: "How do AI agents improve customer experience?",
    a: "They provide instant responses, personalized recommendations, and proactive notifications, enhancing engagement and satisfaction.",
  },
  {
    q: "What is the difference between AI agents and chatbots?",
    a: "Chatbots typically follow scripted flows, while AI agents are more autonomous, can learn, and handle complex tasks beyond simple Q&A.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4  mt-[7%] sm:px-6 md:px-12 py-12 bg-[#0b0b0b] min-h-screen text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 relative inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pur to-purple-500">
            Frequently Asked Questions
          </span>
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-24 h-1 rounded-full bg-pur animate-pulse"></span>
        </h1>

        <p className="text-center text-gray-400 mb-12 text-sm sm:text-base md:text-lg">
          Everything you need to know about AI Agents and how they can help your
          business.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="flex justify-between w-full px-5 py-4 text-left bg-white/5 hover:bg-white/10 transition-all duration-200 items-center"
              >
                <span className="font-medium text-white">{faq.q}</span>
                <span className="text-pur">
                  {openIndex === idx ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 py-4 bg-white/10 text-gray-300 text-sm sm:text-base"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
