"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
const [visible, setVisible] = useState(false);

useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
}, []);

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

return (
    <AnimatePresence>
    {visible && (
        <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-linear-to-br from-primary to-secondary text-white flex items-center justify-center shadow-lg shadow-secondary/30"
        >
        <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
        </motion.button>
    )}
    </AnimatePresence>
);
}