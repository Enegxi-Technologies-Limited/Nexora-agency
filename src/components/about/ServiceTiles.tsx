"use client";

import { motion } from "framer-motion";
import { serviceTiles } from "@/data/about-services";

export default function ServiceTiles() {
return (
    <section className="bg-bg-dark py-24 px-[5%]">
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
    >
        <div className="text-xs font-semibold tracking-[0.12em] text-secondary/80 uppercase mb-3">
        What We Do
        </div>
        <h2 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white tracking-tight">
        Five Connected Tracks
        </h2>
    </motion.div>

    <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-[1000px] mx-auto">
        {serviceTiles.map(({ icon: Icon, name, tagline }, i) => (
        <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-white/4 border border-accent/10 rounded-xl p-5 text-center"
        >
            <Icon className="w-5 h-5 text-secondary mx-auto mb-3" strokeWidth={2} />
            <h3 className="font-display text-[0.85rem] font-bold text-white mb-1.5">
            {name}
            </h3>
            <p className="text-[0.75rem] text-white/45 leading-snug">{tagline}</p>
        </motion.div>
        ))}
    </div>
    </section>
);
}