import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebook } from "react-icons/fa";

export default function Login() {
  return (
    <motion.div
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      className="flex min-h-screen mt-[6%] sm:mt-[8%] items-center justify-center bg-gradient-to-r from-black via-[#1a1406] to-black bg-[length:200%_200%] px-4"
    >
      <motion.div
        initial={{ opacity: 0, x: -80, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1] }}
        className="w-full max-w-sm bg-black/60 border border-pur rounded-2xl shadow-[0_0_35px_rgba(128,0,255,0.15)] backdrop-blur-xl p-8"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-3xl font-extrabold text-center text-white mb-2"
        >
          Welcome Back
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-gray-400 text-center text-sm mb-6"
        >
          Log in to access your <span className="text-pur font-semibold">AI Agents</span>
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-4"
        >
          <div>
            <label className="block text-gray-300 text-xs mb-1">Email</label>
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: "#a855f7" }}
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-pur transition-all"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-xs mb-1">Password</label>
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: "#a855f7" }}
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-pur transition-all"
            />
          </div>

          <div className="flex justify-end">
            <a href="#" className="text-xs text-pur hover:underline transition">
              Forgot password?
            </a>
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(168,85,247,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="submit"
            className="w-full py-2 rounded-md bg-pur text-black text-sm font-semibold shadow hover:bg-purLight transition-all"
          >
            Login
          </motion.button>
        </motion.form>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center gap-2 my-6"
        >
          <div className="h-px flex-1 bg-gray-700" />
          <p className="text-gray-400 text-[11px] tracking-widest uppercase">or</p>
          <div className="h-px flex-1 bg-gray-700" />
        </motion.div>

        {/* Social Logins */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="space-y-3"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.08)",
              boxShadow: "0 0 15px rgba(255,255,255,0.1)",
            }}
            className="w-full flex items-center justify-center gap-2 py-2 rounded-md border border-gray-700 text-gray-300 text-sm transition-all"
          >
            <FaGoogle className="text-red-500 text-lg" />
            Continue with Google
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.08)",
              boxShadow: "0 0 15px rgba(59,89,152,0.2)",
            }}
            className="w-full flex items-center justify-center gap-2 py-2 rounded-md border border-gray-700 text-gray-300 text-sm transition-all"
          >
            <FaFacebook className="text-blue-500 text-lg" />
            Continue with Facebook
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-6 text-center text-gray-400 text-xs"
        >
          Don’t have an account?{" "}
          <Link to="/signup" className="text-pur hover:underline font-medium">
            Sign Up
          </Link>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
