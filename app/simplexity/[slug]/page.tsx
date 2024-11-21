import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import { Metadata, ResolvingMetadata } from 'next';

import IconBar from '@/components/molecules/IconBar';

import getPostMetadata from '@/lib/hooks/getPostMetadata';

import { MetadataProps } from '../page';

const getPostContent = (slug: string) => {
  const folder = 'blogposts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

export async function generateMetadata(
  { params, searchParams }: MetadataProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = params.slug;

  const fileContents = getPostContent(slug);

  const { title, date, subtitle, visibility } = {
    title: fileContents.data.title,
    date: fileContents.data.date,
    subtitle: fileContents.data.subtitle,
    visibility: fileContents.data.visibility,
  };

  return {
    metadataBase: new URL('https://www.marcelochaman.ca'),
    title: `${title} | Simplexity by Marcelo`,
    description: subtitle,
    openGraph: {
      images: [
        {
          url: `/api/og?title=${title}&date=${date}&visibility=${visibility}`,
          width: 2160,
          height: 1080,
          alt: `${title} | ${subtitle}`,
        },
      ],
    },
    twitter: {
      images: [
        {
          url: `/api/og?title=${title}&date=${date}&visibility=${visibility}`,
          width: 2160,
          height: 1080,
          alt: `${title} | ${subtitle}`,
        },
      ],
    },
  };
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const validatePassword = (password: string | string[] | undefined) => {
  if (!password) return false;
  return password === process.env.BLOG_PASSWORD;
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const password = props.searchParams?.magic;
  const post = getPostContent(slug);

  if (post.data.visibility == 'private' && !validatePassword(password)) {
    return (
      <div className="no-scrollbar flex h-screen w-screen items-center justify-center font-light">
        This post is private. Shoot me a text, and I'll give you the password.
      </div>
    );
  }

  return (
    <div className="no-scrollbar flex w-full justify-center overflow-scroll p-4 py-16 font-light">
      <div className="flex w-full max-w-[700px] flex-col gap-2">
        <div>
          <h2 className="">{post.data.title}</h2>
          <h3 className="text-u-300">{post.data.subtitle}</h3>
          <IconBar className="!mb-2 mt-4" />
        </div>
        <hr className="my-2 w-full border-u-300/10" />
        <article className="prose w-full max-w-[700px] pb-32 prose-headings:pt-6 prose-headings:text-xs prose-headings:font-medium prose-headings:uppercase prose-headings:leading-none prose-headings:text-u-300 prose-p:text-[15px] prose-p:font-light prose-p:leading-snug prose-p:text-white prose-a:cursor-pointer prose-a:font-normal prose-a:text-u-300 prose-a:underline prose-blockquote:border-l-2 prose-blockquote:border-u-300 prose-blockquote:pl-4 prose-blockquote:font-normal prose-blockquote:italic prose-blockquote:text-u-300 prose-strong:font-medium prose-strong:text-white prose-em:text-white prose-kbd:cursor-pointer prose-kbd:rounded prose-kbd:bg-u-900 prose-kbd:px-1 prose-kbd:py-0.5 prose-kbd:font-normal prose-kbd:text-u-300 prose-code:mx-1 prose-code:cursor-pointer prose-code:rounded prose-code:border prose-code:border-u-900 prose-code:bg-transparent prose-code:px-1 prose-code:py-0.5 prose-code:font-normal prose-code:text-u-300 prose-pre:cursor-pointer prose-pre:rounded prose-pre:border prose-pre:border-u-900 prose-pre:bg-transparent prose-pre:font-normal prose-pre:text-u-300 prose-ol:text-white prose-ul:text-white prose-li:pl-4 prose-li:text-[15px] prose-li:text-white prose-li:marker:font-light prose-li:marker:text-u-300 prose-img:cursor-pointer prose-img:rounded prose-img:border prose-img:border-u-900 prose-hr:border-u-900">
          <Markdown>{post.content}</Markdown>
          <hr className="my-2 w-full border-u-300/10" />
          <IconBar className="!mb-2 mt-4" />
        </article>
      </div>
    </div>
  );
};

export default PostPage;
