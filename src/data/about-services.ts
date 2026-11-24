import { TrendingUp, Target, Sparkles, Settings2, GraduationCap, type LucideIcon } from "lucide-react";

export type ServiceTile = {
icon: LucideIcon;
name: string;
tagline: string;
};

export const serviceTiles: ServiceTile[] = [
{ icon: TrendingUp, name: "Business Development", tagline: "Scaling fragmented ops into structure" },
{ icon: Target, name: "Project Management", tagline: "Execution discipline, on time" },
{ icon: Sparkles, name: "Branding & Comms", tagline: "Positioning that builds trust" },
{ icon: Settings2, name: "Digital Solutions", tagline: "The software your ops run on" },
{ icon: GraduationCap, name: "Capacity Training", tagline: "Upskilling who sustains the work" },
];