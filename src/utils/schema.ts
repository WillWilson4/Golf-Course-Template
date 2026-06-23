import { business } from "../data/business";
import { siteSettings } from "../data/siteSettings";

export type Schema = Record<string, unknown>;

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

const absoluteUrl = (path: string) =>
  new URL(path, business.siteUrl).toString();

export function localBusinessSchema(): Schema {
  const sameAs = Object.values(business.social).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": ["SportsActivityLocation", "GolfCourse"],
    "@id": `${business.siteUrl}/#golf-course`,
    name: business.name,
    url: business.siteUrl,
    description: business.description,
    telephone: business.phone,
    email: business.email,
    image: absoluteUrl(siteSettings.defaultSocialImage),
    priceRange: business.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: business.openingHours.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.days,
      opens: entry.opens,
      closes: entry.closes,
    })),
    sameAs,
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href ?? "/"),
    })),
  };
}

export function faqSchema(
  items: readonly { question: string; answer: string }[],
): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  published: Date;
  path: string;
}): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.published.toISOString(),
    author: { "@type": "Organization", name: business.name },
    publisher: { "@id": `${business.siteUrl}/#golf-course` },
    mainEntityOfPage: absoluteUrl(article.path),
  };
}

export function eventSchema(event: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
}): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: { "@id": `${business.siteUrl}/#golf-course` },
  };
}
