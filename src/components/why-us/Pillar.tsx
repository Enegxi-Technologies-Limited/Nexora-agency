"use client";

import { motion } from "framer-motion";
import type { Pillar as PillarType } from "@/data/pillars";

export default function Pillar({ num, title, body }: PillarType) {
return (
    <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="border-l-2 border-accent/15 pl-6 transition-colors hover:border-secondary"
    >
    <div className="text-[0.7rem] font-bold tracking-widest text-secondary uppercase mb-2">
        {num}
    </div>
    <h3 className="font-display text-lg font-bold text-white mb-2.5">
        {title}
    </h3>
    <p className="text-sm text-white/55 leading-relaxed">{body}</p>
    </motion.div>
);
}