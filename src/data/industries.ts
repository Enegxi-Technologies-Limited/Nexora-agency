import { Landmark, Globe2, GraduationCap, Rocket, type LucideIcon } from "lucide-react";

export type Industry = {
icon: LucideIcon;
title: string;
body: string;
};

export const industries: Industry[] = [
{
    icon: Landmark,
    title: "Government & Public Sector",
    body: "Compliant, structured training programs and digital transformation projects designed for municipal and federal agencies.",
},
{
    icon: Globe2,
    title: "NGOs & International Development",
    body: "High-accountability execution partners built to manage social impact, monitoring, evaluation, and community upskilling initiatives.",
},
{
    icon: GraduationCap,
    title: "Educational Institutions",
    body: "Next-generation tech curriculum integration, digital skills centers, and modern administration portal engineering.",
},
{
    icon: Rocket,
    title: "SMEs & High-Growth Startups",
    body: "Transitioning founder-led startups into structured corporate operations with custom brands and scalable software infrastructure.",
},
];