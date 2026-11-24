import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import StatsBar from "@/components/stats/StatsBar";
import ServicesSection from "@/components/services/ServicesSection";
import WhyUsSection from "@/components/why-us/WhyUsSection";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import MethodologySection from "@/components/methodology/MethodologySection";
// import TechInnovationBanner from "@/components/tech-innovation/TechInnovationBanner";
import IndustriesSection from "@/components/industries/IndustriesSection";
import ResourcesSection from "@/components/resources/ResourcesSection";
import TeamSection from "@/components/team/TeamSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: {
    absolute: "Nexora Agency — Building Structure. Driving Growth. Delivering Impact.",
  },
  description:
    "Nexora Agency helps businesses, NGOs, and institutions turn strategy into execution — through project management, branding, digital solutions, and capacity training.",
  openGraph: {
    title: "Nexora Agency",
    description:
      "We don't just plan — we execute. Strategy, software, and brand under one roof.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
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

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      {/* <TechInnovationBanner /> */}
      <ServicesSection />
      <WhyUsSection />
      <MethodologySection />
      <IndustriesSection />
      <TeamSection />
      <ResourcesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </>
  );
}
