import { absoluteSiteUrl } from "@/lib/site";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nexora Agency",
    url: absoluteSiteUrl("/"),
    logo: absoluteSiteUrl("/logo-light.png"),
    description:
      "Nexora Agency helps businesses, NGOs, and institutions turn strategy into execution through project management, branding, digital solutions, and capacity training.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
