"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
{ href: "#services", label: "Services" },
{ href: "#methodology", label: "Approach" },
{ href: "#team", label: "Team" },
{ href: "#resources", label: "Resources" },
{ href: "#contact", label: "Contact" },
];

const linkClassName =
"text-white/70 hover:text-white text-sm font-medium transition-colors";

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

function closeMenu() {
    setMenuOpen(false);
}

return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/95 backdrop-blur-md border-b border-accent/10">
    <div className="relative flex items-center justify-between h-18 px-[5%]">
        <a href="#top" className="flex items-center gap-2.5" onClick={closeMenu}>
          <Image
            src="/logo-light.png"
            alt="Nexora Agency"
            width={211}
            height={68}
            className="h-10 sm:h-12 w-auto"
            priority
          />
        </a>

        <ul className="hidden md:flex gap-8 list-none">
        {navLinks.map((link) => (
            <li key={link.href}>
            <a href={link.href} className={linkClassName}>
                {link.label}
            </a>
            </li>
        ))}
        </ul>

        <a
        href="#contact"
        className="hidden md:inline-flex bg-linear-to-br from-primary to-secondary text-white px-5.5 py-2.5 rounded-md font-display font-semibold text-sm transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-secondary/35"
        >
        Book Consultation
        </a>

        <button
        type="button"
        className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 transition-colors"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
        >
        {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        {menuOpen && (
        <div
            id="mobile-navigation"
            className="absolute top-full left-0 right-0 md:hidden border-t border-accent/10 bg-bg-dark/98 px-[5%] py-5 shadow-xl"
        >
            <ul className="flex flex-col gap-5 list-none">
            {navLinks.map((link) => (
                <li key={link.href}>
                <a href={link.href} className={linkClassName} onClick={closeMenu}>
                    {link.label}
                </a>
                </li>
            ))}
            </ul>
            <a
            href="#contact"
            onClick={closeMenu}
            className="mt-6 inline-flex w-full justify-center bg-linear-to-br from-primary to-secondary text-white px-5.5 py-3 rounded-md font-display font-semibold text-sm transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-secondary/35"
            >
            Book Consultation
            </a>
        </div>
        )}
    </div>
    </nav>
);
}
