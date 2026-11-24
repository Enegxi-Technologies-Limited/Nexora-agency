"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/stats";
import StatItem from "./StatItem";

export default function StatsBar() {
return (
    <div className="px-[5%] pt-4 pb-16 bg-white">
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 border border-accent rounded-2xl overflow-hidden -mt-6 bg-white shadow-[0_8px_40px_rgba(69,0,92,0.08)] relative z-10"
    >
        {stats.map((stat) => (
        <StatItem key={stat.label} {...stat} />
        ))}
    </motion.div>
    </div>
);
}
