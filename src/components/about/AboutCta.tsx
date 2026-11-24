    import Link from "next/link";
    import { ArrowRight } from "lucide-react";

    export default function AboutCta() {
    return (
        <section className="bg-white py-20 px-[5%] text-center">
        <h2 className="font-display text-[clamp(1.4rem,2.5vw,1.9rem)] font-bold text-text-main tracking-tight mb-6">
            Ready to see what execution actually looks like?
        </h2>
        <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-br from-primary to-secondary text-white px-7 py-3.5 rounded-lg font-display font-semibold text-sm transition-transform hover:-translate-y-1"
        >
            Start the Conversation <ArrowRight className="w-4 h-4" />
        </Link>
        </section>
    );
    }