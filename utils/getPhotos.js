// utils/getPhotos.js

import fs from "fs";
import path from "path";

export function getPhotos(directory) {
  const photoDirectory = path.join(process.cwd(), directory);
  const filenames = fs.readdirSync(photoDirectory);

  return filenames.map((filename) => ({
    image_url: `/${directory}/${filename}`,
    alt: `Photo - ${filename}`,
  }));
}
