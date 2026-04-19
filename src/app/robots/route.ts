import { NextResponse } from 'next/server';

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.georgiacarcrashguide.com';
  const robots = `User-agent: *\nDisallow:\nSitemap: ${siteUrl}/sitemap.xml\n`;
  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}
