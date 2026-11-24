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
    const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
}, [member, onClose]);

return (
    <AnimatePresence>
    {member && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-100 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        >
        <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl overflow-hidden grid sm:grid-cols-2 max-w-3xl w-full relative"
        >
            <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
            >
            <X className="w-4.5 h-4.5" />
            </button>

            <div className="relative aspect-3/4 sm:aspect-auto">
            <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(min-width: 640px) 24rem, calc(100vw - 2rem)"
                className="object-cover object-top"
            />
            </div>

            <div className="p-8 flex flex-col justify-center">
            <h3 className="font-display text-xl font-bold text-primary">
                {member.name}
            </h3>
            {member.credentials && (
                <div className="text-sm text-text-muted mt-0.5 mb-3">
                    {member.credentials}
                </div>
            )}
            <div className="inline-flex w-fit rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-white mb-4">
                {member.title}
            </div>
            <p className="text-sm text-text-muted leading-relaxed mb-6">
                {member.bio}
            </p>

            <div className="flex items-center gap-3">
                {member.LinkedIn && (
                <a
                    href={member.LinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    title="LinkedIn"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent text-secondary transition-colors hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                    <FaLinkedin aria-hidden="true" className="h-5 w-5" />
                </a>
                )}

                {member.instagram && (
                <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on Instagram`}
                    title="Instagram"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent text-secondary transition-colors hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                    <FaInstagram aria-hidden="true" className="h-5 w-5" />
                </a>
                )}
            </div>
            </div>
        </motion.div>
        </motion.div>
    )}
    </AnimatePresence>
);
}
