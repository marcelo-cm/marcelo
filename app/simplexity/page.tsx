import Link from 'next/link';

import BlogLink from '../../components/molecules/BlogLink';
import IconBar from '../../components/molecules/IconBar';

import getPostMetadata, { PostMetadata } from '../../lib/hooks/getPostMetadata';

const HomePage = () => {
  const postMetadata = getPostMetadata();

  return (
    <div className="flex flex-col w-full items-center py-16">
      {/* TITLE & PAGE DESCRIPTION */}
      <div className="w-full flex flex-col gap-4 items-center p-4 md:p-0 md:pt-4">
        <h1 className="text-4xl max-w-[700px] w-full">
          Simplexity
          <p className="text-[#A0A0A0] inline font-light">
            –Personal Research & Thoughts
          </p>
        </h1>
        <p className="max-w-[700px] w-full font-light">
          A series of writings on design, development, life, and everything in
          between. I hope you find something interesting here.
        </p>
        <IconBar />
      </div>
      <div className="flex flex-col-reverse gap-4 p-2 w-full">
        {postMetadata.map((post: PostMetadata) => (
          <BlogLink key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
