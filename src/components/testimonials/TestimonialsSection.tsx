"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  const [paused, setPaused] = useState(false);

  // Duplicate the array so the loop looks seamless
  const track = [...testimonials, ...testimonials];

  return (
    <section className="bg-[#faf8fc] py-24 overflow-hidden">
      <div className="text-center mb-12 px-[5%]">
        <div className="text-xs font-semibold tracking-[0.12em] text-secondary uppercase mb-3">
          Social Proof Archive
        </div>
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.75rem)] font-bold text-text-main tracking-tight">
          What Our Partners Say
        </h2>
      </div>

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="overflow-hidden"
      >
        <motion.div
          className="flex gap-6"
          animate={{ x: paused ? undefined : ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {track.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}