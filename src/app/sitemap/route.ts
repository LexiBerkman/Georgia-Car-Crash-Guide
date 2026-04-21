import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.georgiacarcrashguide.com';
  const routes = [
    '',
    'practice-areas',
    'contact',
    'resources',
    'resources/settlement-value-claim-georgia',
    'resources/demand-letter-insurance-georgia',
    'resources/social-media-fatal-to-pi-case',
    'resources/how-insurance-adjusters-value-claims',
    'resources/um-bad-faith-georgia',
    'faq',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map(
        (route) => `
      <url>
        <loc>${baseUrl}/${route}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>`
      )
      .join('')}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
