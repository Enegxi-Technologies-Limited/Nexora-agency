import type { ContactChannel as ContactChannelType } from "@/data/contact-channels";

export default function ContactChannel({ icon: Icon, label, value, href }: ContactChannelType) {
const content = (
    <>
    <Icon className="w-5 h-5 text-secondary shrink-0 mt-0.5" strokeWidth={2} />
    <div>
        <div className="text-xs text-white/40 font-semibold uppercase tracking-[0.08em] mb-0.5">
        {label}
        </div>
        <div className="text-sm text-white font-medium">{value}</div>
    </div>
    </>
);

const baseClass =
    "flex items-start gap-3 p-4 bg-white/4 border border-accent/8 rounded-[10px]";

if (href) {
    return (
    <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`${baseClass} transition-colors hover:border-secondary/40 hover:bg-secondary/6`}
    >
        {content}
    </a>
    );
}

return <div className={baseClass}>{content}</div>;
}