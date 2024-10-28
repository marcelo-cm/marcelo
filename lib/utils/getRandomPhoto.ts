'use server';

import fs from 'fs';
import path from 'path';

export const getRandomPhoto = async () => {
  const photosDir = path.join(process.cwd(), 'public', 'about-images', 'art');
  const files = fs.readdirSync(photosDir);
  const imageFiles = files.filter((file) => /\.(jpg|jpeg|png|gif)$/.test(file));
  const randomFile = imageFiles[Math.floor(Math.random() * imageFiles.length)];

  return `/about-images/art/${randomFile}`;
};
