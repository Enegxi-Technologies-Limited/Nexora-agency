"use client";

import { motion } from "framer-motion";

export default function MissionStatement() {
return (
    <section className="bg-bg-dark pt-32 pb-20 px-[5%] text-center">
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
    >
        <div className="text-xs font-semibold tracking-[0.12em] text-secondary uppercase mb-6">
        About Nexora
        </div>
        <h1 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-white leading-[1.15] tracking-tight max-w-[800px] mx-auto mb-8">
        Most organizations don&apos;t have a strategy problem.
        <br />
        <span className="text-secondary">They have an execution problem.</span>
        </h1>
        <p className="text-base text-white/50 leading-relaxed max-w-[560px] mx-auto">
        We built Nexora to close that gap. The same team that designs the
        strategy is the team that executes it — writing the code, managing
        the stakeholders, training the staff, and reporting the numbers.
        That&apos;s why businesses, NGOs, government ministries, and
        growing startups bring us in not just to plan, but to deliver.
        </p>
    </motion.div>
    </section>
);
}