export type Stat = {
value: number;
padLength?: number;
suffix: string;
label: string;
micro: string;
};

export const stats: Stat[] = [
{
    value: 7,
    suffix: "+",
    label: "Years Combined Exp.",
    micro: "Engineered by industry-vetted project leads and software architects.",
},
{
    value: 3,
    padLength: 2,
    suffix: "+",
    label: "Enterprise Projects",
    micro: "Deployed for startups, SMEs, NGOs, and public institutions.",
},
{
    value: 6,
    padLength: 2,
    suffix: "+",
    label: "Key Sectors Served",
    micro: "Active across Government, Education, Technology, and Development.",
},
{
    value: 98,
    suffix: "%",
    label: "Execution Success Rate",
    micro: "Data-backed project delivery structured on clear timelines.",
},
];