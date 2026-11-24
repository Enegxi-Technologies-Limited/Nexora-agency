"use client";

import { motion } from "framer-motion";
import type { Difference } from "@/data/about-differences";

export default function DifferenceCard({ icon: Icon, title, body }: Difference) {
return (
    <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white border border-accent rounded-xl p-7 text-center"
    >
    <div className="w-11 h-11 bg-accent rounded-[10px] flex items-center justify-center mx-auto mb-4">
        <Icon className="w-5 h-5 text-primary" strokeWidth={2} />
    </div>
    <h3 className="font-display text-base font-bold text-primary mb-2">
        {title}
    </h3>
    <p className="text-sm text-text-muted leading-relaxed">{body}</p>
    </motion.div>
);
}