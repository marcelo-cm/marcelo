import Link from "next/link";
import getPostMetadata, { PostMetadata } from "../../lib/hooks/getPostMetadata";
import BlogLink from "../_components/BlogLink";

const HomePage = () => {
  const postMetadata = getPostMetadata();

  return (
    <div className="flex flex-col w-full gap-4 items-center py-16">
      {/* TITLE & PAGE DESCRIPTION */}
      <div className="w-full flex flex-col gap-4 items-center mb-4 p-4">
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
      </div>
      <div className="flex flex-col-reverse gap-4 p-2">
        {postMetadata.map((post: PostMetadata) => (
          <BlogLink key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
