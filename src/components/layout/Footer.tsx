import Image from "next/image";

const serviceLinks = [
"Business Development",
"Project Management",
"Brand & Comms",
"Digital Solutions",
"Capacity Training",
];

const companyLinks = [
{ label: "About Nexora", href: "/aboutnexora" },
{ label: "Our Team", href: "#team" },
{ label: "Resources", href: "#resources" },
{ label: "Contact", href: "#contact" },
];

const contactLinks = [
"proposals@nexoraagency.com",
"WhatsApp",
"Lagos, Nigeria",
"LinkedIn",
"Twitter / X",
];

export default function Footer() {
return (
    <footer className="bg-[#0a060b] border-t border-accent/5 pt-12 pb-8 px-[5%]">
    <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-12 mb-10">
        <div>
        <div className="mb-4 inline-flex">
            <Image
            src="/logo-light.png"
            alt="Nexora Agency"
            width={211}
            height={68}
            className="h-12 w-auto"
            />
        </div>
        <p className="text-[0.82rem] text-white/35 leading-relaxed">
            Building Structure. Driving Growth. Delivering Impact. Your
            execution partner for strategy, digital infrastructure, and human
            capital development.
        </p>
        </div>

        <div>
        <div className="font-display text-xs font-bold text-white/50 uppercase tracking-widest mb-4">
            Services
        </div>
        <ul className="flex flex-col gap-2">
            {serviceLinks.map((label) => (
            <li key={label}>
                <a
                href="#services"
                className="text-white/35 text-[0.82rem] hover:text-secondary transition-colors"
                >
                {label}
                </a>
            </li>
            ))}
        </ul>
        </div>

        <div>
        <div className="font-display text-xs font-bold text-white/50 uppercase tracking-widest mb-4">
            Company
        </div>
        <ul className="flex flex-col gap-2">
            {companyLinks.map((link) => (
            <li key={link.label}>
                <a
                href={link.href}
                className="text-white/35 text-[0.82rem] hover:text-secondary transition-colors"
                >
                {link.label}
                </a>
            </li>
            ))}
        </ul>
        </div>

        <div>
        <div className="font-display text-xs font-bold text-white/50 uppercase tracking-widest mb-4">
            Contact
        </div>
        <ul className="flex flex-col gap-2">
            {contactLinks.map((label) => (
            <li key={label}>
                <a
                href="#"
                className="text-white/35 text-[0.82rem] hover:text-secondary transition-colors"
                >
                {label}
                </a>
            </li>
            ))}
        </ul>
        </div>
    </div>

    <div className="border-t border-white/6 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <span className="text-[0.78rem] text-white/25">
        © 2026 Nexora Agency. All rights reserved. Lagos, Nigeria.
        </span>
        <span className="text-[0.78rem] text-white/25">
        Privacy Policy · Terms of Engagement
        </span>
    </div>
    </footer>
);
}
