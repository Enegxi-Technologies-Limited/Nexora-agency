import type { Metadata } from "next";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Nexora Agency",
    template: "%s | Nexora Agency",
  },
  description:
    "Strategy, execution, and digital infrastructure for businesses, NGOs, and institutions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col">
        <OrganizationSchema />
        {children}
      </body>
    </html>
  );
}
