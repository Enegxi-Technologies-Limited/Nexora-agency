import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({ quote, author, org }: Testimonial) {
return (
    <div className="w-[85vw] max-w-[480px] bg-white border border-accent rounded-xl p-8 shrink-0">
    <div className="flex gap-1 text-secondary mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-secondary" strokeWidth={0} />
        ))}
    </div>
    <p className="text-sm text-text-muted leading-relaxed italic mb-5">
        &ldquo;{quote}&rdquo;
    </p>
    <div className="font-display text-sm font-bold text-primary">
        {author}
    </div>
    <div className="text-[0.78rem] text-text-muted">{org}</div>
    </div>
);
}
