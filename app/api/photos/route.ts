import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const IMG_RE = /^img(\d+)\.(png|jpe?g|webp|gif|svg)$/i;

export async function GET() {
  const dir = path.join(process.cwd(), "public", "photos");

  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return NextResponse.json({ files: [] });
  }

  const images = files
    .filter((f) => IMG_RE.test(f))
    .sort((a, b) => {
      const na = Number(a.match(IMG_RE)?.[1] ?? 0);
      const nb = Number(b.match(IMG_RE)?.[1] ?? 0);
      return na - nb;
    });

  return NextResponse.json({ files: images });
}
