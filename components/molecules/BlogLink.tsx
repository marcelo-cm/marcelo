import React from "react";
import CustomLink from "../ui/custom-link";
import { PostMetadata } from "@/lib/hooks/getPostMetadata";

const BlogLink = (props: PostMetadata) => {
  return (
    <a
      className="flex flex-col w-full font-light h-fit self-center max-w-[716px] hover:bg-[#202020] p-2 rounded-md transition-colors duration-200 ease-in-out"
      href={`/simplexity/${props.slug}`}
    >
      <div className="flex flex-col sm:flex-row w-full items-left sm:items-center mb-[2px]">
        <div className="text-normal flex flex-col sm:flex-row">
          <div className="w-full sm:w-fit flex flex-row whitespace-nowrap items-center">
            {props.title}{" "}
            <hr className="h-px mx-4 bg-[#A0A0A0]/10 border-0 flex-1 sm:hidden w-0" />
          </div>
        </div>
        <hr className="h-px mx-4 bg-[#A0A0A0]/10 border-0 sm:flex-1 invisible sm:visible" />
        <p className="text-[#A0A0A0] break-keep whitespace-nowrap">
          {props.date}
        </p>
      </div>
      <p className="text-[#A0A0A0] leading-tight">{props.subtitle}</p>
    </a>
  );
};

export default BlogLink;
