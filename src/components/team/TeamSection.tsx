"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { team, type TeamMember } from "@/data/team";
import TeamCard from "./TeamCard";
import TeamModal from "./TeamModal";

export default function TeamSection() {
const [selected, setSelected] = useState<TeamMember | null>(null);

return (
    <section id="team" className="bg-white py-24 px-[5%]">
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
    >
        <div className="text-xs font-semibold tracking-[0.12em] text-secondary uppercase mb-3">
        Executive Leadership
        </div>
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.75rem)] font-bold text-text-main tracking-tight mb-4">
        The Stewards Behind the Work
        </h2>
        <p className="text-base text-text-muted leading-relaxed max-w-140 mx-auto">
        A cross-functional team of practitioners - not just advisors - who
        have built, shipped, and scaled across multiple industries.
        </p>
        <p className="mt-3 text-sm text-text-muted/80">
        Select a leader&apos;s photo to learn more about their experience, expertise, and role at Nexora.
        </p>
    </motion.div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {team.map((member) => (
        <TeamCard
            key={member.slug}
            member={member}
            onClick={() => setSelected(member)}
        />
        ))}
    </div>

    <TeamModal member={selected} onClose={() => setSelected(null)} />
    </section>
);
}
