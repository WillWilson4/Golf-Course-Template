import type { APIRoute } from "astro";
import { business } from "../data/business";

const escapeXml = (value: string) =>
  value.replace(/[<>&'\"]/g, (character) => {
    const entities: Record<string, string> = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "'": "&apos;",
      '"': "&quot;",
    };
    return entities[character];
  });

export const GET: APIRoute = () => {
  const location = `${business.address.city.toUpperCase()}, ${business.address.region}`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#123c2d"/>
    <g fill="none" stroke="#c6a15b" opacity=".18">
      <circle cx="980" cy="120" r="200"/><circle cx="980" cy="120" r="260"/>
      <circle cx="120" cy="590" r="180"/>
    </g>
    <text x="90" y="270" fill="#c6a15b" font-family="Arial" font-size="24" font-weight="700" letter-spacing="5">PUBLIC GOLF · ${escapeXml(location)}</text>
    <text x="90" y="365" fill="#f7f2e8" font-family="Georgia" font-size="72">${escapeXml(business.name)}</text>
    <text x="90" y="430" fill="#fff" opacity=".7" font-family="Arial" font-size="28">${escapeXml(business.tagline)}</text>
  </svg>`;

  return new Response(svg, {
    headers: { "Content-Type": "image/svg+xml; charset=utf-8" },
  });
};
