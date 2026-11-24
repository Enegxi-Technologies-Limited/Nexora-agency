"use client";

import { motion } from "framer-motion";
import { differences } from "@/data/about-differences";
import DifferenceCard from "./DifferenceCard";

export default function WhyNexoraSummary() {
return (
    <section className="bg-[#faf8fc] py-24 px-[5%]">
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
    >
        <div className="text-xs font-semibold tracking-[0.12em] text-secondary uppercase mb-3">
        The Execution Difference
        </div>
        <h2 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-text-main tracking-tight">
        Why Nexora Is Different
        </h2>
    </motion.div>

    <div className="grid sm:grid-cols-3 gap-6 max-w-[900px] mx-auto">
        {differences.map((d) => (
        <DifferenceCard key={d.title} {...d} />
        ))}
    </div>
    </section>
);
}