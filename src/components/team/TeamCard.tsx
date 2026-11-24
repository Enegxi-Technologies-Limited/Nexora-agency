"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { TeamMember } from "@/data/team";

type TeamCardProps = {
member: TeamMember;
onClick: () => void;
};

export default function TeamCard({ member, onClick }: TeamCardProps) {
return (
    <motion.button
    onClick={onClick}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -6 }}
    className="group relative rounded-xl overflow-hidden border border-accent aspect-3/4 text-left cursor-pointer"
    >
    <Image
        src={member.image}
        alt={member.name}
        fill
        sizes="(min-width: 1280px) 21vw, (min-width: 768px) 22vw, 45vw"
        loading={member.slug === "ebenezer-boyinbode" ? "eager" : "lazy"}
        className="object-cover object-top transition-transform duration-400 group-hover:scale-105"
    />
    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 via-black/40 to-transparent p-4 pt-10">
        <div className="font-display text-sm font-bold leading-snug text-white">
        {member.name}
        </div>
        {member.credentials && (
        <div className="mt-0.5 text-xs font-normal leading-snug text-white/75">
            {member.credentials}
        </div>
        )}
        <div className="mt-1 text-xs text-fuchsia-300 font-semibold leading-snug drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
        {member.title}
        </div>
    </div>
    </motion.button>
);
}
