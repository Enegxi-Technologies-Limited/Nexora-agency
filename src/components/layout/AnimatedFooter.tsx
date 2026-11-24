"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

export default function AnimatedFooter({ children }: { children: ReactNode }) {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#0a060b] border-t border-accent/5 pt-12 pb-8 px-[5%]"
    >
      {children}
    </motion.footer>
  );
}
