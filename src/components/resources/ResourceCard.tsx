"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import type { Resource } from "@/data/resources";

export default function ResourceCard({ icon: Icon, title, description, buttonLabel }: Resource) {
return (
    <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white/4 border border-accent/10 rounded-xl p-8 transition-all hover:border-secondary/40 hover:bg-secondary/6"
    >
    <Icon className="w-7 h-7 text-secondary mb-4" strokeWidth={1.8} />
    <h3 className="font-display text-base font-bold text-white mb-2.5">
        {title}
    </h3>
    <p className="text-[0.85rem] text-white/45 leading-relaxed mb-5">
        {description}
    </p>
    <button className="inline-flex items-center gap-1.5 bg-secondary/15 text-secondary border border-secondary/30 px-4 py-2.5 rounded-md text-[0.82rem] font-semibold transition-all hover:bg-secondary hover:text-white">
        <Download className="w-3.5 h-3.5" strokeWidth={2.5} />
        {buttonLabel}
    </button>
    </motion.div>
);
}