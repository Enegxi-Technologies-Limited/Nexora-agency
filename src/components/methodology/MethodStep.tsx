"use client";

import { motion } from "framer-motion";
import type { MethodStep as MethodStepType } from "@/data/methodology";

export default function MethodStep({ step, title, body }: MethodStepType) {
return (
<motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center px-4 relative"
>
    <div className="w-14 h-14 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 font-display font-extrabold text-white text-sm relative z-10 shadow-lg shadow-secondary/30">
    {step}
    </div>
    <h3 className="font-display text-base font-bold text-primary mb-2.5">
    {title}
    </h3>
    <p className="text-[0.85rem] text-text-muted leading-relaxed">{body}</p>
</motion.div>
);
}