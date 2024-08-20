import Link from 'next/link';

import BlogLink from '../../components/molecules/BlogLink';
import IconBar from '../../components/molecules/IconBar';

import getPostMetadata, { PostMetadata } from '../../lib/hooks/getPostMetadata';

const HomePage = () => {
  const postMetadata = getPostMetadata();

  return (
    <div className="flex w-full flex-col items-center py-16">
      {/* TITLE & PAGE DESCRIPTION */}
      <div className="flex w-full flex-col items-center gap-4 p-4 md:p-0 md:pt-4">
        <h1 className="w-full max-w-[700px] text-4xl">
          Simplexity
          <p className="inline font-light text-[#A0A0A0]">
            –Personal Research & Thoughts
          </p>
        </h1>
        <p className="w-full max-w-[700px] font-light">
          A series of writings on design, development, life, and everything in
          between. I hope you find something interesting here.
        </p>
        <IconBar />
      </div>
      <div className="flex w-full flex-col-reverse gap-4 p-2">
        {postMetadata.map((post: PostMetadata) => (
          <BlogLink key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
