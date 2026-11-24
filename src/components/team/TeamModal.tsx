"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import type { TeamMember } from "@/data/team";
import { FaLinkedin, FaInstagram  } from "react-icons/fa";

type TeamModalProps = {
member: TeamMember | null;
onClose: () => void;
};

export default function TeamModal({ member, onClose }: TeamModalProps) {
// Close on Escape key
useEffect(() => {
    if (!member) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
    document.body.style.overflow = previousOverflow;
    window.removeEventListener("keydown", onKeyDown);
    };
}, [member, onClose]);

return (
    <AnimatePresence>
    {member && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm"
        >
        <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${member.name} profile`}
            className="relative isolate my-auto min-h-[min(42rem,calc(100dvh-2rem))] max-h-[calc(100dvh-2rem)] max-w-3xl w-full overflow-hidden rounded-2xl border border-white/15 bg-[#120a16] text-white shadow-2xl"
        >
            <div className="absolute inset-0 -z-20">
            <Image
                src={member.image}
                alt=""
                fill
                sizes="(min-width: 768px) 48rem, calc(100vw - 2rem)"
                className="scale-105 object-cover object-top blur-[2px]"
            />
            </div>
            <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#100716]/90 via-[#100716]/45 to-[#100716]/20" />

            <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-md transition-colors hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
            <X className="w-4.5 h-4.5" />
            </button>

            <div className="relative flex max-h-[calc(100dvh-2rem)] min-h-[min(42rem,calc(100dvh-2rem))] items-end overflow-y-auto p-4 sm:p-8">
            <div className="w-full rounded-xl border border-white/25 bg-[#160d1df2] p-5 shadow-2xl backdrop-blur-xl sm:p-8">
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                {member.name}
            </h3>
            <div className="mt-3 mb-2 inline-flex w-fit max-w-full rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-relaxed text-white">
                {member.title}
            </div>
            {member.credentials && (
                <div className="mb-4 text-sm font-normal text-white/65 sm:text-base">
                    {member.credentials}
                </div>
            )}
            <p className="mb-6 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
                {member.bio}
            </p>

            <div className="flex flex-wrap items-center gap-3">
                {member.LinkedIn && (
                <a
                    href={member.LinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    title="LinkedIn"
                    className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/35 px-3 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    <FaLinkedin aria-hidden="true" className="h-4 w-4" />
                </a>
                )}

                {member.instagram && (
                <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on Instagram`}
                    title="Instagram"
                    className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/35 px-3 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    <FaInstagram aria-hidden="true" className="h-4 w-4" />
                </a>
                )}
            </div>
            </div>
            </div>
        </motion.div>
        </motion.div>
    )}
    </AnimatePresence>
);
}
