import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

import getPostMetadata from '../../../lib/hooks/getPostMetadata';

const getPostContent = (slug: string) => {
  const folder = 'blogposts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div className="no-scrollbar flex w-full justify-center overflow-scroll p-4 py-16 font-light">
      <div className="flex w-full max-w-[700px] flex-col gap-2">
        <div>
          <h2 className="">{post.data.title}</h2>
          <h3 className="text-[#a0a0a0]">{post.data.subtitle}</h3>
        </div>
        <hr className="my-2 w-full border-[#343434]" />
        <article className="prose w-full max-w-[700px] pb-32 prose-headings:pt-6 prose-headings:text-xs prose-headings:font-medium prose-headings:uppercase prose-headings:leading-none prose-headings:text-[#A0A0A0] prose-p:text-[15px] prose-p:font-light prose-p:leading-snug prose-p:text-white prose-a:cursor-pointer prose-a:font-normal prose-a:text-[#A0A0A0] prose-a:underline prose-blockquote:border-l-2 prose-blockquote:border-[#A0A0A0] prose-blockquote:pl-4 prose-blockquote:font-normal prose-blockquote:italic prose-blockquote:text-[#A0A0A0] prose-strong:font-bold prose-strong:font-medium prose-strong:text-white prose-em:text-white prose-kbd:cursor-pointer prose-kbd:rounded prose-kbd:bg-[#343434] prose-kbd:px-1 prose-kbd:py-0.5 prose-kbd:font-normal prose-kbd:text-[#A0A0A0] prose-code:mx-1 prose-code:cursor-pointer prose-code:rounded prose-code:border prose-code:border-[#343434] prose-code:bg-transparent prose-code:px-1 prose-code:py-0.5 prose-code:font-normal prose-code:text-[#A0A0A0] prose-pre:cursor-pointer prose-pre:rounded prose-pre:border prose-pre:border-[#343434] prose-pre:bg-transparent prose-pre:font-normal prose-pre:text-[#A0A0A0] prose-ol:text-white prose-ul:text-white prose-li:pl-4 prose-li:text-[15px] prose-li:text-white prose-li:marker:font-light prose-li:marker:text-[#a0a0a0] prose-img:cursor-pointer prose-img:rounded prose-img:border prose-img:border-[#343434] prose-hr:border-[#343434]">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </div>
  );
};

export default PostPage;
