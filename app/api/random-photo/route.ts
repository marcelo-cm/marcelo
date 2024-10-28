import fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const photosDir = path.join(process.cwd(), 'public', 'about-images', 'art');
  const files = fs.readdirSync(photosDir);
  const randomFile = files[Math.floor(Math.random() * files.length)];

  return new NextResponse(JSON.stringify(`/about-images/art/${randomFile}`), {
    status: 200,
  });
}
