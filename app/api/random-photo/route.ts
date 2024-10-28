import fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const photosDir = path.join(process.cwd(), 'public', 'about-images', 'art');
  const files = fs.readdirSync(photosDir);

  // Shuffle and pick the first 25 unique files
  const shuffledFiles = files.sort(() => 0.5 - Math.random());
  const selectedFiles = shuffledFiles.slice(0, 25);

  // Map to full URLs
  const fileUrls = selectedFiles.map((file) => `/about-images/art/${file}`);

  return new NextResponse(JSON.stringify(fileUrls), {
    status: 200,
  });
}
