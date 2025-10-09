import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Error404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden bg-gradient-to-b from-black via-[#1a1406] to-black text-center px-6">
      
      {/* Soft glowing background orb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25, scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-96 h-96 bg-pur rounded-full blur-3xl opacity-20"
      ></motion.div>

      {/* Glowing 404 text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-8xl sm:text-9xl font-extrabold text-pur drop-shadow-[0_0_25px_#7e22ce] z-10"
      >
        404
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-2xl sm:text-3xl mt-4 font-semibold text-gray-200 z-10"
      >
        Page Not Found
      </motion.h2>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-3 text-gray-400 max-w-md text-sm sm:text-base z-10"
      >
        Looks like you’ve wandered off the path. The page you’re seeking doesn’t exist or has been moved.
      </motion.p>

      {/* Home Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-8 z-10"
      >
        <Link
          to="/"
          className="px-6 py-3 text-lg font-medium rounded-full bg-pur text-black hover:bg-pur/90 transition-all shadow-lg hover:shadow-pur/50"
        >
          Go Home
        </Link>
      </motion.div>

      {/* Floating sparks animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0.05 }}
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {[...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 bg-pur rounded-full"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Footer Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.2, duration: 2 }}
        className="absolute bottom-6 text-xs text-gray-500 z-10"
      >
  
      </motion.div>
    </div>
  );
}
