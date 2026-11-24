import { BookOpen, FileText, FolderOpen, type LucideIcon } from "lucide-react";

export type Resource = {
icon: LucideIcon;
title: string;
description: string;
buttonLabel: string;
};

export const resources: Resource[] = [
{
    icon: BookOpen,
    title: "Project Onboarding Pack (v2.6)",
    description:
    "Learn how projects begin, our communication tools, sprint schedules, expectations, and delivery milestones.",
    buttonLabel: "Download Onboarding Pack (PDF)",
},
{
    icon: FileText,
    title: "Enterprise Client Proposal Framework",
    description:
    "Review a direct sample of our proposal layouts, resource tracking methods, and transparent project budgets.",
    buttonLabel: "View Proposal Template (PDF)",
},
{
    icon: FolderOpen,
    title: "Nexora Agency Institutional Profile",
    description:
    "A comprehensive look at our service capabilities, technical stack, full case studies, and compliance guidelines.",
    buttonLabel: "Access Company Profile (PDF)",
},
];