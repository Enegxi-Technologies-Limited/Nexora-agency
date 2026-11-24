"use client";

import { motion } from "framer-motion";
import { methodSteps } from "@/data/methodology";

export default function MethodologyCompact() {
return (
    <section className="bg-white py-24 px-[5%]">
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
    >
        <div className="text-xs font-semibold tracking-[0.12em] text-secondary uppercase mb-3">
        How We Work
        </div>
        <h2 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-text-main tracking-tight">
        A Four-Stage Discipline
        </h2>
    </motion.div>

    <div className="flex flex-col md:flex-row gap-6 max-w-[900px] mx-auto">
        {methodSteps.map((step, i) => (
        <motion.div
            key={step.step}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex-1 flex md:flex-col items-center md:items-start gap-4 md:gap-0"
        >
            <div className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-display font-bold text-white text-xs md:mb-4">
            {step.step}
            </div>
            <div>
            <h3 className="font-display text-sm font-bold text-primary mb-1">
                {step.title}
            </h3>
            <p className="text-[0.82rem] text-text-muted leading-relaxed">
                {step.body}
            </p>
            </div>
        </motion.div>
        ))}
    </div>
    </section>
);
}