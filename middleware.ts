import { NextRequest, NextResponse } from "next/server";

import { isAiCrawler } from "@/utils/aiCrawlers";

// Backstop: even if a PDF ends up back under /public, or the route path
// changes, any request for a document is refused to automated clients.
export function middleware(request: NextRequest) {
  if (isAiCrawler(request.headers.get("user-agent"))) {
    return new NextResponse("Not available to automated clients.", {
      status: 403,
      headers: { "X-Robots-Tag": "noindex, nofollow, noarchive, noai, noimageai" },
    });
  }

  const response = NextResponse.next();
  response.headers.set(
    "X-Robots-Tag",
    "noindex, nofollow, noarchive, noai, noimageai",
  );
  return response;
}

export const config = {
  matcher: ["/api/resume", "/:path*.pdf"],
};
