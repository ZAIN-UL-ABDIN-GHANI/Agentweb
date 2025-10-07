// src/components/ChatBot.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaRobot, FaTimes } from "react-icons/fa";

const STORAGE_KEY = "local_chat_history_v1";

function makeMessage(sender, text) {
  return {
    id: `${sender}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    sender,
    text,
    ts: Date.now(),
  };
}

// Dummy AI reply
function dummyAgentReply() {
  return `An AI agent is a software entity designed to perform tasks autonomously or assist humans in various activities...`;
}

export default function ChatBot({ placeholder = "Ask me anything about agents..." }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef(null);

  // Load messages
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setMessages(JSON.parse(raw));
  }, []);

  // Save messages + scroll
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

    await new Promise((r) => setTimeout(r, 800));

    const botMsg = makeMessage("bot", dummyAgentReply());
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
          className="fixed right-6 bottom-[15%] sm:bottom-4 sm:right-4 w-14 h-14 rounded-full bg-pur text-black flex items-center justify-center shadow-lg z-[9999]"
        >
          <FaRobot size={24} />
        </button>
      )}

      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 flex items-end justify-center z-[9999] sm:items-center sm:px-4"
          >
            <div className="w-full max-w-sm sm:max-w-md h-[80vh] sm:h-[70vh] flex flex-col bg-[#0b0b0b]/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-pur flex items-center justify-center text-black">
                    <FaRobot />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Agent (Demo)</div>
                    <div className="text-xs text-gray-400">Frontend demo — dummy AI</div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-md"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Messages */}
              <div ref={listRef} className="flex-1 overflow-y-auto p-4 space-y-3">
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
              </div>

              {/* Input */}
              <div className="px-3 py-3 border-t border-white/10 flex items-center gap-2">
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
