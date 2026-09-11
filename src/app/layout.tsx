import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import AuthProvider from "@/components/AuthProvider";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// Canonical domain — update here if the production domain ever changes.
export const metadataBase = new URL("https://www.hopebridgeconsulting.org");

// Brand-anchored defaults. Page titles override these; the template keeps
// "Hope Bridge Consulting" visible in most browser tabs and SERP snippets.
export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Hope Bridge Consulting and Consultancy — Counseling & Consultancy in Dar es Salaam",
    template: "%s | Hope Bridge Consulting",
  },
  description:
    "Hope Bridge Consulting and Consultancy provides professional counseling and consultancy services for individuals, couples, families, and organizations in Dar es Salaam, Tanzania — including mental health support, relationship counseling, organizational development, and project consultancy.",
  keywords:
    "Hope Bridge Consulting, Hope Bridge Consulting and Consultancy, counseling Dar es Salaam, marriage counseling Tanzania, family counseling, organizational development, project consultancy, mental health counseling, psychosocial support, training and coaching",
  authors: [{ name: "Hope Bridge Consulting and Consultancy" }],
  creator: "Hope Bridge Consulting and Consultancy",
  openGraph: {
    type: "website",
    locale: "en_TZ",
    url: "https://www.hopebridgeconsulting.org",
    siteName: "Hope Bridge Consulting",
    title: "Hope Bridge Consulting and Consultancy — Counseling & Consultancy in Dar es Salaam",
    description:
      "Professional counseling and consultancy for individuals, couples, families, and organizations in Dar es Salaam, Tanzania.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Hope Bridge Consulting and Consultancy logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hopebridgeconsulting",
    title: "Hope Bridge Consulting and Consultancy — Counseling & Consultancy in Dar es Salaam",
    description:
      "Professional counseling and consultancy for individuals, couples, families, and organizations in Dar es Salaam, Tanzania.",
    images: ["/logo.jpg"],
  },
  icons: {
      icon: "/logo.svg",
    shortcut: "/logo.svg",
  },
  // Google/Bing verify tags can go in <head> via a small <script> or <meta> in
  // src/app/head.tsx if you add one later. For now this is the canonical source.
  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION",
  //   yandex: "YOUR_YANDEX_VERIFICATION",
  //   bing: "YOUR_BING_WEBSITE_VERIFICATION",
  // },
};

// Structured data: tells search engines this site and your Google Business Profile
// describe the same real organization. Keep these values in sync with your GBP.
function OrganizationJsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": "https://www.hopebridgeconsulting.org/#organization",
        name: "Hope Bridge Consulting and Consultancy",
        alternateName: [
          "Hope Bridge Consulting",
          "Hope Bridge Counseling and Consultancy",
        ],
        url: "https://www.hopebridgeconsulting.org",
        logo: "https://www.hopebridgeconsulting.org/logo.jpg",
        image: "https://www.hopebridgeconsulting.org/logo.jpg",
        description:
          "Professional counseling and consultancy services for individuals, couples, families, and organizations in Dar es Salaam, Tanzania.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "Tanzania",
          addressLocality: "Dar es Salaam",
          postalCode: "P.O. Box 32724",
          addressRegion: "Ubungo",
          streetAddress:
            "Msigani, Malambamawili, Ubungo, Dar es Salaam",
        },
        geo: {
          "@type": "GeoCoordinates",
          addressCountry: "Tanzania",
        },
        areaServed: {
          "@type": "City",
          name: "Dar es Salaam",
          containedInPlace: {
            "@type": "Country",
            name: "Tanzania",
          },
        },
        knowsAbout: [
          "Mental Health Counseling",
          "Marriage and Couples Counseling",
          "Family Counseling",
          "Psychosocial Support",
          "Organizational Development",
          "Institutional Strengthening",
          "Project Management Consultancy",
          "Research Consultancy",
          "Technical Consultancy",
          "Training and Coaching",
        ],
        sameAs: [
          "https://www.hopebridgeconsulting.org",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+255683410417",
            contactType: "customer service",
            availableLanguage: ["English", "Swahili"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+255655806343",
            contactType: "customer service",
            availableLanguage: ["English", "Swahili"],
          },
        ],
        priceRange: "$$",
        openingHoursSpecification: [],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.hopebridgeconsulting.org/#website",
        url: "https://www.hopebridgeconsulting.org",
        name: "Hope Bridge Consulting and Consultancy",
        alternateName: "Hope Bridge Consulting",
        publisher: {
          "@id": "https://www.hopebridgeconsulting.org/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.hopebridgeconsulting.org?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.hopebridgeconsulting.org/logo.jpg",
        url: "https://www.hopebridgeconsulting.org/logo.jpg",
        caption: "Hope Bridge Consulting and Consultancy logo",
        inLanguage: "en-TZ",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
    />
  );
}

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <OrganizationJsonLd />
        <AuthProvider>
          <ClientLayout>{children}</ClientLayout>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
