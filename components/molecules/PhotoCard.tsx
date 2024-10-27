import React from 'react';

import Image from 'next/image';

const PhotoCard = ({ image_url, alt }: { image_url: string; alt: string }) => {
  return (
    <Image
      src={image_url}
      alt={alt}
      quality={50}
      className="h-full rounded-md object-contain"
      placeholder="blur"
    />
  );
};

export default PhotoCard;
