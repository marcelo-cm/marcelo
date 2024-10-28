import fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function GET(req: NextRequest) {
  const photosDir = path.join(process.cwd(), 'public', 'about-images', 'art');
  const files = fs.readdirSync(photosDir);
  const imageFiles = files.filter((file) => /\.(jpg|jpeg|png|gif)$/.test(file));
  const randomFile = imageFiles[Math.floor(Math.random() * imageFiles.length)];

  // Return the file path
  return new NextResponse(JSON.stringify(`/about-images/art/${randomFile}`), {
    status: 200,
  });
}
