import fs from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";

import { isAiCrawler } from "@/utils/aiCrawlers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Only these files can be served, so `file` can never traverse the filesystem.
const ALLOWED_FILES: Record<string, string> = {
  devops: "Maor_Idi_Automation_DevOps_Resume.pdf",
  "devops-old": "Maor_Idi_DevOps_Engineer_Resume.pdf",
  english: "resume-english.pdf",
  hebrew: "resume-hebrew.pdf",
};

const RESUME_DIR = path.join(process.cwd(), "private", "resume");

export async function GET(request: NextRequest) {
  if (isAiCrawler(request.headers.get("user-agent"))) {
    return new NextResponse("Not available to automated clients.", {
      status: 403,
      headers: { "X-Robots-Tag": "noindex, nofollow, noarchive, noai, noimageai" },
    });
  }

  const key = request.nextUrl.searchParams.get("file") ?? "devops";
  const fileName = ALLOWED_FILES[key];

  if (!fileName) {
    return new NextResponse("Not found", { status: 404 });
  }

  let file: Buffer;
  try {
    file = await fs.readFile(path.join(RESUME_DIR, fileName));
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }

  return new NextResponse(new Uint8Array(file), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      // `inline` keeps the browser's own "open in tab, then save" behaviour.
      "Content-Disposition": `inline; filename="${fileName}"`,
      "X-Robots-Tag": "noindex, nofollow, noarchive, noai, noimageai",
      "Cache-Control": "private, no-store",
    },
  });
}
