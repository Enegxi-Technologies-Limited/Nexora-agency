"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
hidden: { opacity: 0, y: 32 },
visible: { opacity: 1, y: 0 },
};

export default function Hero() {
return (
    <section id="top" className="relative min-h-screen pt-18 pb-24 px-[5%] overflow-hidden bg-bg-dark grid md:grid-cols-[60%_40%] items-center">
    <div className="pointer-events-none absolute -top-50 -left-50 w-175 h-175 rounded-full bg-[radial-gradient(circle,rgba(153,0,153,0.15)_0%,transparent_70%)]" />
    <div className="pointer-events-none absolute -bottom-25 right-0 w-125 h-125 rounded-full bg-[radial-gradient(circle,rgba(69,0,92,0.2)_0%,transparent_70%)]" />

    <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 pr-0 md:pr-16 py-20 md:py-0"
    >
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-secondary uppercase mb-6 before:content-[''] before:w-6 before:h-0.5 before:bg-secondary">
        Connecting Vision to Execution
        </div>

        <h1 className="font-display text-[clamp(2.8rem,5vw,4.5rem)] font-extrabold leading-[1.08] text-white tracking-[-0.03em] mb-6">
        Building Structure.
        <br />
        <span className="bg-linear-to-r from-secondary to-[#cc44cc] bg-clip-text text-transparent">
            Driving Growth.
        </span>
        <br />
        Delivering Impact.
        </h1>

        <p className="text-[1.05rem] leading-relaxed text-white/60 max-w-130 mb-10">
        We help businesses, organizations, and global institutions transform
        ambitious ideas into measurable, institutionalized results through
        precision strategy, hands-on execution, deployment-ready technology,
        and scaled capacity development.
        </p>

        <div className="flex gap-4 flex-wrap">
        <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-linear-to-br from-primary to-secondary text-white px-7 py-3.5 rounded-lg font-display font-semibold text-[0.95rem] transition-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40"
        >
            Book an Executive Consultation ➔
        </a>
        </div>
    </motion.div>

    <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 hidden md:flex justify-end items-center"
    >
        <div className="w-105 h-130 rounded-[20px] overflow-hidden relative border border-accent/15">
        <Image
            src="/images/hero-team.jpg"
            alt="Nexora Agency Team"
            fill
            priority
            unoptimized
            sizes="(min-width: 768px) 420px, 0px"
            className="object-cover object-top"
        />
        <div className="absolute bottom-6 left-6 bg-bg-dark/90 backdrop-blur-md border border-secondary/30 rounded-xl px-4 py-3 flex items-center gap-2.5">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-white text-[0.8rem] font-medium">
            Available for new engagements
            </span>
        </div>
        </div>
    </motion.div>
    </section>
);
}
