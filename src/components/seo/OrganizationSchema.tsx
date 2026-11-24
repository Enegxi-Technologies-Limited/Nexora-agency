export default function OrganizationSchema() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nexora Agency",
    url: siteUrl,
    logo: `${siteUrl}/logo-light.png`,
    description:
      "Nexora Agency helps businesses, NGOs, and institutions turn strategy into execution through project management, branding, digital solutions, and capacity training.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    sameAs: [
      // add real social links once you have them, e.g.:
      // "https://www.linkedin.com/company/nexoraagency",
      // "https://twitter.com/nexoraagency",
    ],
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
