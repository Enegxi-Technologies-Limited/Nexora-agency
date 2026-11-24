"use client";

import { motion } from "framer-motion";
import { industries } from "@/data/industries";
import IndustryCard from "./IndustryCard";

export default function IndustriesSection() {
return (
    <section id="industries" className="bg-[#faf8fc] py-24 px-[5%]">
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
    >
        <div className="text-xs font-semibold tracking-[0.12em] text-secondary uppercase mb-3">
        Industries We Serve
        </div>
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.75rem)] font-bold text-text-main tracking-tight">
        Built for Institutional Scale
        </h2>
    </motion.div>

    <div className="grid sm:grid-cols-2 gap-6 max-w-200 mx-auto">
        {industries.map((industry) => (
        <IndustryCard key={industry.title} {...industry} />
        ))}
    </div>
    </section>
);
}