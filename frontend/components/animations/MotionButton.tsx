"use client";

import { motion } from "framer-motion";
import { ButtonHTMLAttributes } from "react";

interface MotionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function MotionButton({
  children,
  ...props
}: MotionButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="px-4 py-2 bg-black text-white rounded-md"
      {...props}
    >
      {children}
    </motion.button>
  );
}
