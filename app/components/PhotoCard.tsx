import Image from "next/image";
import React from "react";

const PhotoCard = ({ image_url, alt }: { image_url: string; alt: string }) => {
  return (
    <div className="break-inside-avoid border-[1px] border-[#2e2e2e] w-fit h-fit bg-[#1C1C1C] rounded-xl min-w-[300px] p-2 overflow-none">
      <Image
        src={image_url}
        width={400}
        height={300}
        alt={alt}
        className="rounded-md"
      />
    </div>
  );
};

export default PhotoCard;
