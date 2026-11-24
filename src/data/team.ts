export type TeamMember = {
slug: string;
name: string;
credentials?: string;
title: string;
image: string;
bio: string;
LinkedIn?: string;
instagram?: string;
};

export const team: TeamMember[] = [
{
    slug: "ayomide-akintade",
    name: "Ayomide Akintade",
    credentials: "MBA (Marketing & Strategy)",
    title: "CEO & Head of Operations",
    image: "/images/team/ayomide-akintade.png",
    bio: "Expertise in corporate operations, project management, and business development. Leads overall strategy, execution, and client growth outcomes.",
    LinkedIn: "http://www.linkedin.com/in/akintade-ayomide",
    instagram: "https://www.instagram.com/ayobamitade?jplx=MXhpdm8zOXkxdzA0cw==",
    
},
{
    slug: "ebenezer-boyinbode",
    name: "Ebenezer Boyinbode",
    credentials: "MSc, PhD (In View)",
    title: "Technical Lead",
    image: "/images/team/Ebenezer-Boyinbode.png",
    bio: "MSc, PhD (In View) with 7+ years of building production-grade software solutions across fintech, edtech, healthtech, and other sectors. Has led several engineering teams delivering secure, scalable platforms for enterprise and startup clients. Owns technical architecture, engineering standards, and delivery at Nexora.",
    LinkedIn: "https://www.linkedin.com/in/boyinbode-ebenezer/",
    
},
{
    slug: "seun-ojo",
    name: "Seun Ojo",
    credentials: "MTech (Project Management)",
    title: "Head of Brand & Design",
    image: "/images/team/Seun-Ojo.png",
    bio: "MTech in Project Management with 7+ years of driving brand architecture, visual identity, and creative production. Owns all brand assets, design systems, and campaign creatives from concept to delivery.",
    LinkedIn: "https://www.linkedin.com/in/samuel-oluwaseun-ojo-990a1297?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/sheneryprints?avpt=OTNjc2FtOXZkZmIy",
},
{
    slug: "simi-adejumo",
    name: "Simi Adejumo",
    title: "Head of Partnerships & Communications",
    image: "/images/team/Simi-Adejumo.png",
    bio: "Similoluwa Adejumo is a partnerships and communications professional with experience in executive support, community management, content strategy, and stakeholder engagement. She is passionate about building meaningful relationships, strengthening brand visibility, and creating impactful communication strategies. At Nexora, she leads partnerships, communications, and community engagement to support business growth.",
    LinkedIn: "https://www.linkedin.com/in/similoluwa-adejumo/",
    instagram: "https://www.instagram.com/the_simiadejumo/",
},
];
