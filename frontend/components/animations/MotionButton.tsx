"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface MotionButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
}

export default function MotionButton({
  children,
  ...props
}: MotionButtonProps) {
  return (
    <motion.button
      {...props} // spread motion-compatible props
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`px-4 py-2 bg-black text-white rounded-md ${props.className ?? ""}`}
    >
      {children}
    </motion.button>
  );
}

