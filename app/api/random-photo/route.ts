import fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const photosDir = path.join(process.cwd(), 'public', 'about-images', 'art');
  const files = fs.readdirSync(photosDir);
  const imageFiles = files.filter((file) => /\.(jpg|jpeg|png|gif)$/.test(file));
  const randomFile = imageFiles[Math.floor(Math.random() * imageFiles.length)];

  // Return the file path
  return new NextResponse(JSON.stringify(`/about-images/art/${randomFile}`), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      Expires: '0',
      Pragma: 'no-cache',
      'Surrogate-Control': 'no-store',
    },
  });
}
