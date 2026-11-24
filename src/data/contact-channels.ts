import { MessageCircle, Mail, MapPin, type LucideIcon } from "lucide-react";

export type ContactChannel = {
icon: LucideIcon;
label: string;
value: string;
href?: string;
};

export const contactChannels: ContactChannel[] = [
{
    icon: MessageCircle,
    label: "Instant Secure Access",
    value: "Chat via WhatsApp",
    href: "https://wa.link/j6q6py",
},
{
    icon: Mail,
    label: "Direct Strategic RFP Intake",
    value: "proposals@nexoraagency.com",
    href: "mailto:proposals@nexoraagency.com",
},
{
    icon: MapPin,
    label: "Corporate Headquarters",
    value: "Lagos, Nigeria | Remote Operations Worldwide",
    // no href — it's a location, not a clickable action
},
];