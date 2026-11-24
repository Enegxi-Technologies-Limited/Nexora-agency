"use client";

import { motion } from "framer-motion";
import { pillars } from "@/data/pillars";
import Pillar from "./Pillar";

export default function WhyUsSection() {
return (
    <section
    id="why"
    className="bg-bg-dark text-white grid md:grid-cols-2 gap-10 md:gap-20 items-start py-24 px-[5%]"
    >
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="md:sticky md:top-30"
    >
        <div className="text-xs font-semibold tracking-[0.12em] text-secondary/80 uppercase mb-3">
        The Execution Difference
        </div>
        <h2 className="font-display text-[clamp(1.8rem,2.5vw,2.4rem)] font-extrabold leading-tight tracking-tight mb-4">
        The Execution Deficit:
        <br />
        <span className="text-secondary">
            Why Traditional Consulting Fails
        </span>
        </h2>
        <p className="text-base text-white/50 leading-relaxed">
        Most consultancies leave you with a polished strategy document and
        a handshake. We stay until the work is done — in the field, in the
        code, with your stakeholders.
        </p>
    </motion.div>

    <div className="flex flex-col gap-8 pt-4">
        {pillars.map((pillar) => (
        <Pillar key={pillar.num} {...pillar} />
        ))}
    </div>
    </section>
);
}