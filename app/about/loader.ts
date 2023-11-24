// app/about/loader.ts

import { getPhotos } from "../../utils/getPhotos";

export async function loader() {
  const fashionPhotos = getPhotos("public/photos/fashion");
  const artPhotos = getPhotos("public/photos/art");

  return {
    fashionPhotos,
    artPhotos,
  };
}
