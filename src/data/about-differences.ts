import { Layers, ShieldCheck, Zap, type LucideIcon } from "lucide-react";

export type Difference = {
icon: LucideIcon;
title: string;
body: string;
};

export const differences: Difference[] = [
{
    icon: Layers,
    title: "We Execute, Not Just Advise",
    body: "We co-build in the field and in the codebase — not just in slide decks.",
},
{
    icon: ShieldCheck,
    title: "Built for Accountability",
    body: "Transparent, milestone-driven systems — every resource maps to a measurable outcome.",
},
{
    icon: Zap,
    title: "One Team, Zero Handoff Friction",
    body: "Strategy, software, and brand sit under one roof — nothing stalls waiting on a vendor.",
},
];