"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";
import { Globe } from "lucide-react";

export default function ServicesSection() {
return (
    <section id="services" className="py-24 px-[5%] bg-[#faf8fc]">
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
    >
        <div className="text-xs font-semibold tracking-[0.12em] text-secondary uppercase mb-3">
        Core Operational Capabilities
        </div>
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.75rem)] font-bold text-text-main tracking-tight mb-4">
        High-Impact Engines Built to Scale
        </h2>
        <p className="text-base text-text-muted leading-relaxed max-w-140 mx-auto">
        Specialized service tracks designed for modern organizations that
        need both strategy and execution under one roof.
        </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
        ))}

        {/* CTA card — not data-driven, it's unique */}
        <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-linear-to-br from-primary to-[#6b0090] rounded-xl p-8 flex flex-col"
        >
        <div className="w-11 h-11 bg-white/10 rounded-[10px] flex items-center justify-center text-xl mb-5">
            <Globe className="w-5 h-5" />
        </div>
        <h3 className="font-display text-lg font-bold text-white mb-3">
            Ready to Scale?
        </h3>
        <p className="text-sm text-white/60 leading-relaxed mb-6">
            Every initiative begins with a precise understanding of where you
            are and where you need to be. Let our advisors map your path
            forward.
        </p>
        <a
            href="#contact"
            className="mt-auto inline-flex items-center justify-center gap-2 bg-linear-to-br from-primary to-secondary text-white px-7 py-3.5 rounded-lg font-display font-semibold text-sm transition-transform hover:-translate-y-1"
        >
            Start the Conversation ➔
        </a>
        </motion.div>
    </div>
    </section>
);
}