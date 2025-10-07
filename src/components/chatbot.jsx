// src/components/ChatBot.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaRobot, FaTimes } from "react-icons/fa";

const STORAGE_KEY = "local_chat_history_v3";

// 💬 Extended Chatbot Config — all general, AI, support, and website queries
const chatbotConfig = {
  responses: {
    greeting: [
      "Hello! 👋 How can I assist you today?",
      "Hey there! Welcome to our AI Agent platform.",
      "Hi! I'm your smart assistant. What would you like to know?",
    ],
    help: [
      "I'm here to help! You can ask about pricing, products, AI agents, support, or anything else.",
      "Sure! Try asking things like 'What do you offer?', 'How can I contact you?', or 'Show me pricing'.",
    ],
    pricing: [
      "Our plans are flexible — from starter to enterprise levels.",
      "We offer monthly and annual plans depending on your needs.",
      "Custom pricing is available for business automation packages.",
    ],
    contact: [
      "You can reach us anytime at support@devrolin.com 📧",
      "Visit our Contact page for email, phone, and location details.",
      "Our support team is available 24/7 — feel free to reach out!",
    ],
    agents: [
      "Our AI Agents handle automation, research, analytics, and customer interaction.",
      "We design intelligent agents that learn and adapt to your workflow.",
      "Want to know which agent fits your use case? I can help with that!",
    ],
    about: [
      "We’re a modern AI company focused on building next-gen smart agents.",
      "Our mission is to simplify AI adoption for startups and enterprises.",
      "We help businesses automate workflows using intelligent AI systems.",
    ],
    features: [
      "✨ Key features: Automation, AI chat, data analysis, integrations, and analytics dashboards.",
      "We offer natural language AI, workflow builders, and customizable chat agents.",
      "Our features focus on smart automation, user interaction, and intelligent insights.",
    ],
    support: [
      "Need technical support? Our team is ready to help 24/7.",
      "If you’re facing an issue, please describe it — I’ll guide you through!",
      "For account issues or setup help, visit our Help Center or contact support.",
    ],
    location: [
      "We’re based in Islamabad, Pakistan 🇵🇰 and operate globally online.",
      "Our offices are digital-first, with global remote teams.",
    ],
    hours: [
      "Our AI services are available 24/7! 🤖",
      "Support team is online Monday–Saturday, 9 AM to 10 PM PKT.",
    ],
    career: [
      "We’re always open to talented developers! Visit our Careers page for open roles.",
      "Interested in joining us? Send your resume to hr@devrolin.com 💼",
    ],
    product: [
      "We offer customizable AI Agents for automation, marketing, and analytics.",
      "Our core products include Smart AI Agents, Data Bots, and Integration Tools.",
      "You can explore our agent demos for better understanding of our tools.",
    ],
    technology: [
      "We use advanced AI models, NLP, and automation APIs for our systems.",
      "Our tech stack includes React, Node.js, Python, and cloud-based AI APIs.",
    ],
    security: [
      "Your data is secured with end-to-end encryption 🔒",
      "We comply with industry standards and never share user data with third parties.",
    ],
    thanks: [
      "You're very welcome! 😊 Anything else you'd like to ask?",
      "Glad I could help! Want to explore our agents or pricing?",
    ],
    smalltalk: [
      "Haha, that’s funny 😄",
      "I like your energy!",
      "I’m always learning new things!",
    ],
    bye: [
      "Goodbye! 👋 Have a wonderful day!",
      "See you soon! Don’t hesitate to come back anytime.",
    ],
    default: [
      "Hmm... I didn’t get that. Could you ask about pricing, agents, or features?",
      "I’m not sure yet 🤔 — try rephrasing your question.",
      "I’m learning more every day — could you be a bit more specific?",
    ],
  },

  // 🔍 Keyword Categories
  keywords: {
    greeting: ["hi", "hello", "hey", "good morning", "good evening", "yo"],
    help: ["help", "assist", "support", "how to", "guide"],
    pricing: ["price", "pricing", "cost", "charges", "plan", "subscription"],
    contact: ["contact", "email", "address", "call", "phone", "reach"],
    agents: ["agent", "ai agent", "bot", "assistant", "automation"],
    about: ["about", "company", "who are you", "team", "mission"],
    features: ["feature", "tool", "function", "option", "capability"],
    support: ["issue", "problem", "error", "trouble", "fix", "bug"],
    location: ["where", "location", "address", "office", "based"],
    hours: ["open", "hours", "timing", "schedule"],
    career: ["career", "job", "hire", "join", "internship"],
    product: ["product", "service", "offer", "solution", "package"],
    technology: ["technology", "tech", "stack", "framework", "language"],
    security: ["secure", "safety", "privacy", "data", "encryption"],
    thanks: ["thank", "thanks", "appreciate", "grateful"],
    smalltalk: ["haha", "lol", "funny", "cool", "nice", "great"],
    bye: ["bye", "goodbye", "see you", "later", "take care"],
  },
};

// Response Logic
function getBotResponse(userMessage) {
  const msg = userMessage.toLowerCase();
  for (const [category, keywords] of Object.entries(chatbotConfig.keywords)) {
    if (keywords.some((keyword) => msg.includes(keyword))) {
      const replies = chatbotConfig.responses[category];
      return replies[Math.floor(Math.random() * replies.length)];
    }
  }
  const defaultReplies = chatbotConfig.responses.default;
  return defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
}

//  Create message object
function makeMessage(sender, text) {
  return {
    id: `${sender}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    sender,
    text,
    ts: Date.now(),
  };
}

export default function ChatBot({ placeholder = "Ask me about pricing, agents, support, or anything..." }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef(null);

  // Load chat history
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setMessages(JSON.parse(raw));
  }, []);

  // Save + auto-scroll
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg = makeMessage("user", trimmed);
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setIsTyping(true);

    await new Promise((r) => setTimeout(r, 700));
    const botReply = getBotResponse(trimmed);
    const botMsg = makeMessage("bot", botReply);
    setMessages((m) => [...m, botMsg]);
    setIsTyping(false);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed right-6 bottom-[10%] sm:bottom-[15%] sm:right-4 w-14 h-14 rounded-full bg-pur text-black flex items-center justify-center shadow-lg hover:scale-105 transition-transform z-[9999]"
        >
          <FaRobot size={24} />
        </button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 80, y: 80 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 80, y: 80 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed inset-0 flex items-end justify-center z-[9999] sm:items-center sm:px-4"
          >
            <div className="w-full max-w-sm sm:max-w-md h-[80vh] sm:h-[70vh] flex flex-col bg-[#0b0b0b]/90 backdrop-blur-md border border-white rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-pur flex items-center justify-center text-black">
                    <FaRobot />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">AI Agent Assistant</div>
                    <div className="text-xs text-gray-400">Ask me anything ✨</div>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/5 rounded-md">
                  <FaTimes />
                </button>
              </div>

              {/* Messages */}
              <div ref={listRef} className="flex-1 overflow-y-auto p-4 space-y-3">
                <AnimatePresence>
                  {messages.map((m) => (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[82%] px-3 py-2 rounded-lg ${
                          m.sender === "user"
                            ? "bg-pur text-black rounded-tr-none"
                            : "bg-white/10 text-gray-200 rounded-tl-none"
                        }`}
                      >
                        <div className="whitespace-pre-wrap text-sm">{m.text}</div>
                        <div className="text-[10px] text-gray-400 mt-1 text-right">
                          {new Date(m.ts).toLocaleTimeString()}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      key="typing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white/10 px-3 py-2 rounded-lg text-sm">
                        <div className="flex gap-1 items-center">
                          <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" />
                          <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce delay-75" />
                          <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce delay-150" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Input */}
              <div className="px-3 py-3 border-t border-white flex items-center gap-2">
                <textarea
                  rows={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder={placeholder}
                  className="flex-1 resize-none bg-transparent text-sm text-white placeholder:text-gray-500 outline-none p-2 rounded-md"
                />
                <button
                  onClick={() => sendMessage(input)}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-pur text-black rounded-md font-semibold hover:scale-105 transition"
                  title="Send"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
