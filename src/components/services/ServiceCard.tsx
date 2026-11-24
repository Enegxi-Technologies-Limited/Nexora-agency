"use client";

import { motion } from "framer-motion";
import type { Service } from "@/data/services";

export default function ServiceCard({ icon: Icon, title, abstract, caps, linkText }: Service) {
return (
    <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group bg-white border border-accent border-t-4 border-t-primary rounded-xl p-8 transition-all duration-400 cursor-pointer hover:-translate-y-2 hover:border-t-secondary hover:shadow-[0_30px_60px_rgba(69,0,92,0.1)]"
    >
    <div className="w-11 h-11 bg-accent rounded-[10px] flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-primary" strokeWidth={2} />
    </div>
    <h3 className="font-display text-lg font-bold text-primary mb-3">{title}</h3>
    <p className="text-sm text-text-muted leading-relaxed mb-5">{abstract}</p>
    <ul className="flex flex-col gap-1.5 mb-5">
        {caps.map((cap) => (
        <li key={cap} className="text-[0.8rem] text-text-muted flex items-start gap-2">
            <span className="text-secondary font-bold shrink-0 mt-px">→</span>
            {cap}
        </li>
        ))}
    </ul>
    <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:gap-2.5 transition-all">
        {linkText} ↗
    </a>
    </motion.div>
);
}