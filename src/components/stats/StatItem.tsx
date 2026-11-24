type StatItemProps = {
num: string;
label: string;
micro: string;
};

export default function StatItem({ num, label, micro }: StatItemProps) {
return (
    <div className="px-6 py-8 text-center border-r border-accent last:border-r-0">
    <div className="font-display text-[2.2rem] font-extrabold text-primary leading-none mb-1">
        {num}
    </div>
    <div className="text-[0.85rem] font-semibold text-text-main mb-1.5">
        {label}
    </div>
    <div className="text-xs text-text-muted leading-snug">{micro}</div>
    </div>
);
}