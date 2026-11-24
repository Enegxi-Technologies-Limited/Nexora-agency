"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

type CountUpProps = {
target: number;
suffix?: string;
padLength?: number;
duration?: number;
};

export default function CountUp({
target,
suffix = "",
padLength,
duration = 1.5,
}: CountUpProps) {
const ref = useRef<HTMLSpanElement>(null);
const isInView = useInView(ref, { once: true, margin: "-80px" });
const [display, setDisplay] = useState(0);

useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
    duration,
    ease: "easeOut",
    onUpdate: (value) => setDisplay(Math.round(value)),
    });

    return () => controls.stop();
}, [isInView, target, duration]);

const formatted = padLength ? String(display).padStart(padLength, "0") : String(display);

return (
    <span ref={ref}>
    {formatted}
    {suffix}
    </span>
);
}