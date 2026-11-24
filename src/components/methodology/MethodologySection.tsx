"use client";

import { motion } from "framer-motion";
import { methodSteps } from "@/data/methodology";
import MethodStep from "./MethodStep";

export default function MethodologySection() {
return (
    <section id="methodology" className="bg-white py-24 px-[5%]">
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
    >
        <div className="text-xs font-semibold tracking-[0.12em] text-secondary uppercase mb-3">
        The Engine Methodology
        </div>
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.75rem)] font-bold text-text-main tracking-tight mb-4">
        Our 4-Step Proven Timeline
        </h2>
        <p className="text-base text-text-muted leading-relaxed max-w-140 mx-auto">
        A disciplined, repeatable process that eliminates ambiguity and
        drives every engagement to a successful outcome.
        </p>
    </motion.div>

    <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
        {/* connecting line — desktop only */}
        <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-linear-to-r from-primary to-secondary" />

        {methodSteps.map((step) => (
        <MethodStep key={step.step} {...step} />
        ))}
    </div>
    </section>
);
}