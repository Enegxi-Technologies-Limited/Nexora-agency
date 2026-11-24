"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FORM_URL = process.env.NEXT_PUBLIC_TECH_INNOVATION_FORM_URL!;


export default function TechInnovationBanner() {
return (
    <motion.section
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-linear-to-br from-primary to-secondary py-16 px-[5%] text-center"
    >
    <div className="text-xs font-semibold tracking-[0.12em] text-white/70 uppercase mb-3">
        For Students & Aspiring Talent
    </div>
    <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold text-white tracking-tight mb-4">
        Join the Tech Innovation Program
    </h2>
    <p className="text-base text-white/80 leading-relaxed max-w-140 mx-auto mb-8">
        A hands-on learning track for students who want to build the same
        skills our team uses to execute real client work — strategy, code,
        and brand, all in one program.
    </p>
    <a
        href={FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-lg font-display font-semibold text-sm transition-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
    >
        Apply Now <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
    </a>
    </motion.section>
);
}