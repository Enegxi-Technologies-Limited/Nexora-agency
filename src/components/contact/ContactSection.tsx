"use client";

import { motion } from "framer-motion";
import { contactChannels } from "@/data/contact-channels";
import ContactChannel from "./ContactChannel";
import ContactForm from "./ContactForm";

export default function ContactSection() {
return (
    <section id="contact" className="bg-bg-dark py-24 px-[5%]">
    <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-start">
        <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        >
        <div className="text-xs font-semibold tracking-[0.12em] text-secondary/80 uppercase mb-3">
            Initiate Your Engagement
        </div>
        <h2 className="font-display text-[clamp(1.6rem,2.5vw,2.2rem)] font-extrabold text-white tracking-tight mb-4">
            Connect with Our Growth Advisors
        </h2>
        <p className="text-[0.95rem] text-white/50 leading-relaxed mb-8">
            Build structure and scale your next initiative. Our team
            responds to all inquiries within 24 hours.
        </p>
        <div className="flex flex-col gap-4">
            {contactChannels.map((channel) => (
            <ContactChannel key={channel.label} {...channel} />
            ))}
        </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        >
        <ContactForm />
        </motion.div>
    </div>
    </section>
);
}