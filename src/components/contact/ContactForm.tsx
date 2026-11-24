"use client";

import { useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

const services = [
"Business Development & Growth Support",
"Project Planning, Management & Execution",
"Branding & Strategic Communications",
"Enterprise Digital Solutions",
"Training & Capacity Development",
"Multiple Services / Enterprise Partnership",
];

export default function ContactForm() {
const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
const [errorMessage, setErrorMessage] = useState("");
const [serviceOpen, setServiceOpen] = useState(false);
const [serviceError, setServiceError] = useState(false);
const serviceButtonRef = useRef<HTMLButtonElement>(null);
const serviceOptionRefs = useRef<Array<HTMLButtonElement | null>>([]);
const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    service: "",
    details: "",
});

const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.service) {
    setServiceError(true);
    setServiceOpen(true);
    serviceButtonRef.current?.focus();
    return;
    }

    setServiceError(false);
    setErrorMessage("");
    setStatus("sending");

    try {
    const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });

    const result: { success?: boolean; error?: string } = await response
        .json()
        .catch(() => ({}));
    if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to send contact request. Please try again.");
    }

    setStatus("sent");
    setFormData({ name: "", email: "", organization: "", phone: "", service: "", details: "" });
    } catch (error) {
    setStatus("error");
    setErrorMessage(
        error instanceof Error
        ? error.message
        : "Something went wrong. Please try again or email us directly.",
    );
    }
};

const inputClass =
    "bg-white/6 border border-accent/12 rounded-lg px-3.5 py-2.5 text-white text-sm outline-none transition-colors focus:border-secondary placeholder:text-white/30 w-full";

return (
    <form
    onSubmit={handleSubmit}
    className="bg-white/4 border border-accent/8 rounded-2xl p-8"
    >
    <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-white/60 uppercase tracking-[0.06em]">
            Full Name *
        </label>
        <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className={inputClass}
        />
        </div>
        <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-white/60 uppercase tracking-[0.06em]">
            Institutional Email *
        </label>
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="name@organization.com"
            className={inputClass}
        />
        </div>
    </div>

    <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-white/60 uppercase tracking-[0.06em]">
            Organization / Company *
        </label>
        <input
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            required
            placeholder="Your organization name"
            className={inputClass}
        />
        </div>
        <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-white/60 uppercase tracking-[0.06em]">
            Phone Number *
        </label>
        <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+234 000 000 0000"
            className={inputClass}
        />
        </div>
    </div>

    <div className="flex flex-col gap-1.5 mb-4">
        <label id="service-label" htmlFor="service" className="text-xs font-semibold text-white/60 uppercase tracking-[0.06em]">
        Core Operational Need *
        </label>
        <div
        className="relative"
        onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setServiceOpen(false);
            }
        }}
        >
        <button
            ref={serviceButtonRef}
            id="service"
            type="button"
            role="combobox"
            aria-haspopup="listbox"
            aria-expanded={serviceOpen}
            aria-controls="service-options"
            aria-required="true"
            aria-invalid={serviceError}
            aria-describedby={serviceError ? "service-error" : undefined}
            className={`${inputClass} flex items-center justify-between text-left ${formData.service ? "text-white" : "text-white/40"} ${serviceError ? "border-red-400" : ""}`}
            onClick={() => setServiceOpen((open) => !open)}
            onKeyDown={(event) => {
            if (["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) {
                event.preventDefault();
                setServiceOpen(true);
                const selectedIndex = services.indexOf(formData.service);
                const nextIndex = event.key === "ArrowUp"
                ? services.length - 1
                : selectedIndex >= 0 ? selectedIndex : 0;
                requestAnimationFrame(() => serviceOptionRefs.current[nextIndex]?.focus());
            } else if (event.key === "Escape") {
                setServiceOpen(false);
            }
            }}
        >
            <span>{formData.service || "Select a service area"}</span>
            <ChevronDown
            size={18}
            aria-hidden="true"
            className={`shrink-0 text-white/60 transition-transform ${serviceOpen ? "rotate-180" : ""}`}
            />
        </button>

        {serviceOpen && (
            <div
            id="service-options"
            role="listbox"
            aria-labelledby="service-label"
            className="absolute z-30 mt-2 max-h-64 w-full overflow-y-auto rounded-xl border border-secondary/30 bg-[#1a111c] p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.55)] ring-1 ring-white/5"
            >
            {services.map((service, index) => (
                <button
                key={service}
                ref={(element) => { serviceOptionRefs.current[index] = element; }}
                type="button"
                role="option"
                aria-selected={formData.service === service}
                className={`flex w-full items-center justify-between rounded-lg px-3.5 py-3 text-left text-sm transition-colors hover:bg-secondary/20 hover:text-white focus-visible:bg-secondary/20 focus-visible:text-white focus-visible:outline-none ${formData.service === service ? "bg-secondary/20 text-white" : "text-white/75"}`}
                onClick={() => {
                    setFormData((prev) => ({ ...prev, service }));
                    setServiceError(false);
                    setServiceOpen(false);
                    serviceButtonRef.current?.focus();
                }}
                onKeyDown={(event) => {
                    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                    event.preventDefault();
                    const direction = event.key === "ArrowDown" ? 1 : -1;
                    const nextIndex = (index + direction + services.length) % services.length;
                    serviceOptionRefs.current[nextIndex]?.focus();
                    } else if (event.key === "Escape") {
                    event.preventDefault();
                    setServiceOpen(false);
                    serviceButtonRef.current?.focus();
                    }
                }}
                >
                <span>{service}</span>
                {formData.service === service && <Check size={16} aria-hidden="true" className="text-fuchsia-300" />}
                </button>
            ))}
            </div>
        )}
        </div>
        {serviceError && (
        <p id="service-error" className="text-xs text-red-400" role="alert">
            Please select a service area.
        </p>
        )}
    </div>

    <div className="flex flex-col gap-1.5 mb-6">
        <label className="text-xs font-semibold text-white/60 uppercase tracking-[0.06em]">
        Project Scope & Details
        </label>
        <textarea
        name="details"
        value={formData.details}
        onChange={handleChange}
        placeholder="Briefly describe your project goals, timeline, and any specific challenges you are facing..."
        rows={4}
        className={`${inputClass} resize-y`}
        />
    </div>

    <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-3.5 bg-linear-to-br from-primary to-secondary text-white rounded-lg font-display font-bold text-sm transition-transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
    >
        {status === "sending" ? "Sending..." : "Dispatch Consultation Request \u2794"}
    </button>
    {status === "sent" && (
        <p role="status" className="text-sm text-green-400 mt-3 text-center">
        Thanks! We&apos;ll be in touch within 24 hours.
        </p>
    )}
    {status === "error" && (
        <p role="alert" className="text-sm text-red-400 mt-3 text-center">
        {errorMessage}
        </p>
    )}
    </form>
);
}
