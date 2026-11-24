"use client";

import { motion } from "framer-motion";
import type { Industry } from "@/data/industries";

export default function IndustryCard({ icon: Icon, title, body }: Industry) {
return (
    <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white border border-accent rounded-xl p-7 flex gap-4 items-start transition-all hover:border-secondary hover:shadow-[0_8px_30px_rgba(69,0,92,0.08)]"
    >
    <div className="w-11 h-11 shrink-0 bg-accent rounded-[10px] flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" strokeWidth={2} />
    </div>
    <div>
        <h3 className="font-display text-[0.95rem] font-bold text-primary mb-1.5">
        {title}
        </h3>
        <p className="text-[0.85rem] text-text-muted leading-relaxed">{body}</p>
    </div>
    </motion.div>
);
}