import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex min-h-screen mt-[6%] sm:mt-[5%] items-center justify-center bg-gradient-to-b from-black via-[#1a1406] to-black px-4">
      <div className="w-full max-w-sm bg-black/60 border border-pur rounded-xl shadow-lg backdrop-blur-md p-6">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-white mb-1">
          Create Account
        </h2>
        <p className="text-gray-400 text-center text-sm mb-5">
          Join the future with <span className="text-pur">AI Agents</span>
        </p>

        {/* Form */}
        <form className="space-y-3">
          <div>
            <label className="block text-gray-300 text-xs mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-pur"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-xs mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-pur"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-xs mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-pur"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-pur text-black text-sm font-semibold shadow hover:bg-purLight transition"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-5">
          <div className="h-px flex-1 bg-gray-700" />
          <p className="text-gray-400 text-[11px]">or</p>
          <div className="h-px flex-1 bg-gray-700" />
        </div>

        {/* Social Signup */}
        <button className="w-full py-2 rounded-md border border-gray-700 text-gray-300 text-sm hover:bg-white/5 transition">
          Continue with Google
        </button>

        {/* Footer */}
        <p className="mt-5 text-center text-gray-400 text-xs">
          Already have an account?{" "}
          <Link to="/login" className="text-pur hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
