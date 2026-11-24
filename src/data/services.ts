import {
TrendingUp,
Target,
Sparkles,
Settings2,
GraduationCap,
type LucideIcon,
} from "lucide-react";

export type Service = {
icon: LucideIcon;
title: string;
abstract: string;
caps: string[];
linkText: string;
};

export const services: Service[] = [
{
    icon: TrendingUp,
    title: "Business Development & Growth Support",
    abstract:
    "We design, audit, and install high-performance operational systems that transform fragmented businesses into scalable corporate entities.",
    caps: [
    "Corporate Restructuring & Workflow Automation",
    "B2B Partnership Architectures & Joint Ventures",
    "Institutional Lead Generation Systems",
    "Enterprise Proposal & Grant Development",
    "Cross-Border Market Expansion Blueprints",
    ],
    linkText: "Analyze Growth Solutions",
},
{
    icon: Target,
    title: "Project Planning, Management & Execution",
    abstract:
    "We eliminate execution risk. From on-the-ground deployment to cross-departmental alignment, we drive projects to completion within scope and budget.",
    caps: [
    "Rigorous Agile Project Planning & Roadmapping",
    "On-The-Ground Program Coordination",
    "Monitoring, Evaluation & Learning (MEL) Frameworks",
    "Multi-Tiered Stakeholder Alignment Systems",
    "Institutional Project Transparency Reporting",
    ],
    linkText: "View Execution Frameworks",
},
{
    icon: Sparkles,
    title: "Branding & Strategic Communications",
    abstract:
    "We position your brand to command market authority, build public trust, and clearly communicate your value proposition to institutional decision-makers.",
    caps: [
    "Corporate Brand Architecture & Identity Design",
    "High-Stakes Public Relations & Media Positioning",
    "Crisis Communications & Reputation Management",
    "Omnichannel Corporate Positioning Strategy",
    "Data-Backed Social Media Distribution Engines",
    ],
    linkText: "Explore Identity Frameworks",
},
{
    icon: Settings2,
    title: "Enterprise Digital Solutions",
    abstract:
    "We build secure, production-grade digital infrastructure, modern web platforms, and automated workflows designed to accelerate digital transformation.",
    caps: [
    "Custom Full-Stack Web Application Engineering",
    "Enterprise Product Design & Architecture (UI/UX)",
    "Internal Process & Workflow Automation Systems",
    "Legacy System Migrations & Modernizations",
    "Cloud-Native Scalability Deploys",
    ],
    linkText: "Audit Digital Infrastructure",
},
{
    icon: GraduationCap,
    title: "Training & Capacity Development",
    abstract:
    "We design, optimize, and deploy scaled human capital development programs that build high-performing workforces and empower communities.",
    caps: [
    "Advanced Corporate Digital Skills Accelerators",
    "Bespoke Executive Workforce Upskilling Initiatives",
    "Youth & Women Empowerment Interventions",
    "Scalable Entrepreneurship Incubation Frameworks",
    "Institutional Curriculum Engineering",
    ],
    linkText: "Review Capacity Programs",
},
];