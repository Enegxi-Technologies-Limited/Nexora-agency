import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import MissionStatement from "@/components/about/MissionStatement";
import WhyNexoraSummary from "@/components/about/WhyNexoraSummary";
import MethodologyCompact from "@/components/about/MethodologyCompact";
import ServiceTiles from "@/components/about/ServiceTiles";
import AboutCta from "@/components/about/AboutCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn why Nexora Agency exists: to close the gap between strategy and execution for businesses, NGOs, and institutions across Africa and beyond.",
  openGraph: {
    title: "About Nexora Agency",
    description:
      "The same team that designs the strategy is the team that executes it.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/aboutnexora`,
    siteName: "Nexora Agency",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
return (
    <>
    <Navbar />
    <MissionStatement />
    <WhyNexoraSummary />
    <MethodologyCompact />
    <ServiceTiles />
    <AboutCta />
    <Footer />
    <BackToTop />
    </>
);
}
