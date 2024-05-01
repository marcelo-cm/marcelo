import Image from "next/image";
import React from "react";

const InfoSection = ({
  title,
  description,
  children,
  image,
  imagePosition = "right",
  level = 1,
  className,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  image?: string;
  imagePosition?: "left" | "right";
  level?: number;
  className?: string;
}) => {
  return (
    <div
      className={`w-full flex max-[1376px]:flex-col gap-8 lg:ml-${
        level * 2
      } ${className}`}
      id={title}
    >
      {image && imagePosition == "left" ? (
        <Image
          src={image}
          alt="Project Image"
          className="max-h-[400px] md:h-[650px] min-[1376px]:h-[350px] w-fit rounded-xl border-4 md:border-8 border-white/5"
          width={200}
          height={200}
        />
      ) : null}
      <div className={`w-full ${""} flex flex-col gap-2`} id="Overview">
        <h1
          className={`${
            level == 1
              ? "text-2xl max-w-[700px]"
              : level == 2
              ? `text-xl italic`
              : null
          } md:min-w-[530px]  w-full`}
        >
          {title}
          <p className="text-[#A0A0A0] inline font-light">–{description}</p>
        </h1>
        {children}
      </div>
      {image && imagePosition == "right" ? (
        <Image
          src={image}
          alt="Project Image"
          className="max-h-[400px] md:h-[650px] min-[1376px]:h-[350px] w-fit rounded-xl border-4 md:border-8 border-white/5"
          width={500}
          height={400}
        />
      ) : null}
    </div>
  );
};

export default InfoSection;
