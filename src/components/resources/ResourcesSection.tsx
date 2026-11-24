"use client";

import { motion } from "framer-motion";
import { resources } from "@/data/resources";
import ResourceCard from "./ResourceCard";

export default function ResourcesSection() {
return (
    <section id="resources" className="bg-bg-dark py-24 px-[5%]">
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
    >
        <div className="text-xs font-semibold tracking-[0.12em] text-secondary/80 uppercase mb-3">
        Institutional Frameworks
        </div>
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.75rem)] font-bold text-white tracking-tight mb-4">
        Access Our Corporate Resources
        </h2>
        <p className="text-base text-white/40 leading-relaxed max-w-140 mx-auto">
        We operate with absolute structural clarity. Download our
        operational files to evaluate our models before we talk.
        </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-6">
        {resources.map((resource) => (
        <ResourceCard key={resource.title} {...resource} />
        ))}
    </div>
    </section>
);
}