"use client";

import { motion } from "framer-motion";

export default function Landing() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center text-center"
    >
      <div>
        <h1 className="text-5xl font-bold">Startup Benefits Platform</h1>
        <p className="mt-4 text-gray-500">
          Exclusive SaaS deals for early-stage startups
        </p>
      </div>
    </motion.section>
  );
}
