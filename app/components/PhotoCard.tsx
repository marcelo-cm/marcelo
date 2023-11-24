import Image from "next/image";
import React from "react";

const PhotoCard = ({ image_url, alt }: { image_url: string; alt: string }) => {
  return (
    <img
      src={image_url}
      alt={alt}
      className="rounded-md h-full object-contain "
    />
  );
};

export default PhotoCard;
