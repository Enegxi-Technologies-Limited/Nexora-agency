import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import MissionStatement from "@/components/about/MissionStatement";
import WhyNexoraSummary from "@/components/about/WhyNexoraSummary";
import MethodologyCompact from "@/components/about/MethodologyCompact";
import ServiceTiles from "@/components/about/ServiceTiles";
import AboutCta from "@/components/about/AboutCta";
import { absoluteSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn why Nexora Agency exists: to close the gap between strategy and execution for businesses, NGOs, and institutions across Africa and beyond.",
  alternates: {
    canonical: absoluteSiteUrl("/aboutnexora"),
  },
  openGraph: {
    title: "About Nexora Agency",
    description:
      "The same team that designs the strategy is the team that executes it.",
    url: absoluteSiteUrl("/aboutnexora"),
    siteName: "Nexora Agency",
    images: [
      {
        url: absoluteSiteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "Nexora Agency — Building Structure. Driving Growth. Delivering Impact.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Nexora Agency",
    description:
      "Learn how Nexora Agency closes the gap between strategy and execution.",
    images: [absoluteSiteUrl("/og-image.jpg")],
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
