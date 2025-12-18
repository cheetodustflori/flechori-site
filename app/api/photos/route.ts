import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// NEW: import your real metadata
import meta from "../../data/photosMeta.json"; // NEW

type Photo = {
  name: string;
  src: string;
  caption: string;
  date: string;
};

// NEW: metadata type
type Meta = Record<string, { caption: string; date: string }>;

const IMG_RE = /^img(\d+)\.(png|jpe?g|webp|gif)$/i;

export async function GET() {
  const dir = path.join(process.cwd(), "public", "photos");

  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return NextResponse.json({ photos: [] });
  }

  const metaMap = meta as Meta; // NEW

  const photos: Photo[] = files
    .filter((f) => IMG_RE.test(f))
    .sort((a, b) => {
      const na = Number(a.match(IMG_RE)?.[1] ?? 0);
      const nb = Number(b.match(IMG_RE)?.[1] ?? 0);
      return na - nb;
    })
    .map((name) => {
      const src = `/photos/${name}`;

      // NEW: If you have metadata, use it. Otherwise fallback.
      const m = metaMap[name];
      if (m) {
        return { name, src, caption: m.caption, date: m.date };
      }

      // fallback caption/date (so missing entries don’t break your site)
      const num = name.match(/\d+/)?.[0] ?? "";
      return { name, src, caption: `Photo ${num}`, date: "—" };
    });

  return NextResponse.json({ photos });
}
