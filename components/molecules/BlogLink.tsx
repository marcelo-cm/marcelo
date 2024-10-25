import React from 'react';

import CustomLink from '../ui/custom-link';

import { PostMetadata } from '@/lib/hooks/getPostMetadata';

const BlogLink = (props: PostMetadata) => {
  return (
    <a
      className="flex h-fit w-full max-w-[716px] flex-col self-center rounded-md p-2 font-light transition-colors duration-200 ease-in-out hover:bg-u-950"
      href={`/simplexity/${props.slug}`}
    >
      <div className="items-left mb-[2px] flex w-full flex-col sm:flex-row sm:items-center">
        <div className="text-normal flex flex-col sm:flex-row">
          <div className="flex w-full flex-row items-center whitespace-nowrap sm:w-fit">
            {props.title}{' '}
            <hr className="mx-4 h-px w-0 flex-1 border-0 bg-u-300/10 sm:hidden" />
          </div>
        </div>
        <hr className="invisible mx-4 h-px border-0 bg-u-300/10 sm:visible sm:flex-1" />
        <p className="whitespace-nowrap break-keep text-u-300">{props.date}</p>
      </div>
      <p className="leading-tight text-u-300">{props.subtitle}</p>
    </a>
  );
};

export default BlogLink;
