import { Metadata, ResolvingMetadata } from 'next';

import BlogLink from '@/components/molecules/BlogLink';
import IconBar from '@/components/molecules/IconBar';

import getPostMetadata, { PostMetadata } from '@/lib/hooks/getPostMetadata';

export type MetadataProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: MetadataProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return {
    metadataBase: new URL('https://www.marcelochaman.ca'),
    title: 'Simplexity by Marcelo Chaman Mallqui',
    description: 'Personal Research & Thoughts',
    openGraph: {
      images: '/blog-assets/opengraph-image.png',
    },
    twitter: {
      images: '/blog-assets/twitter-image.png',
    },
  };
}

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const publicPosts = postMetadata.filter(
    (post) => post.visibility === 'public',
  );

  return (
    <div className="flex w-full flex-col items-center py-16">
      <div className="flex w-full flex-col gap-4 p-4 md:items-center md:p-0 md:pt-4">
        <h1 className="w-full max-w-[700px] text-4xl">
          Simplexity
          <p className="inline font-light text-u-300">
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
        {publicPosts.map((post: PostMetadata) => (
          <BlogLink key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
