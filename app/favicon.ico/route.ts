const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#0c0b09"/>
  <path d="M16 18h7v11h18V18h7v28h-7V35H23v11h-7V18Z" fill="#f7f0e8"/>
  <path d="M48 18v28" stroke="#f2a86b" stroke-width="4" stroke-linecap="round"/>
</svg>`;

export const dynamic = "force-static";

export function GET() {
  return new Response(faviconSvg, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Type": "image/svg+xml",
    },
  });
}
