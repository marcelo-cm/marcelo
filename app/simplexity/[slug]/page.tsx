import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../lib/hooks/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "blogposts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
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
    <div className="overflow-scroll no-scrollbar w-full flex justify-center py-16 p-4 font-light">
      <div className="w-full max-w-[700px] flex flex-col gap-2">
        <div>
          <h2 className="">{post.data.title}</h2>
          <h3 className="text-[#a0a0a0]">{post.data.subtitle}</h3>
        </div>
        <hr className="border-[#343434] my-2 w-full" />
        <article
          className="w-full max-w-[700px] 
                    prose prose-p:text-white prose-p:text-[15px] prose-p:font-light prose-p:leading-snug
                    prose-headings:text-[#A0A0A0] prose-headings:text-xs prose-headings:font-medium prose-headings:uppercase prose-headings:leading-none prose-headings:pt-6
                    prose-a:text-[#A0A0A0] prose-a:font-normal prose-a:underline prose-a:cursor-pointer
                    prose-blockquote:text-[#A0A0A0] prose-blockquote:font-normal prose-blockquote:italic prose-blockquote:border-l-2 prose-blockquote:border-[#A0A0A0] prose-blockquote:pl-4
                    prose-pre:text-[#A0A0A0] prose-pre:font-normal prose-pre:border prose-pre:border-[#343434] prose-pre:bg-transparent prose-pre:rounded prose-pre:cursor-pointer
                    prose-code:text-[#A0A0A0] prose-code:font-normal prose-code:border prose-code:border-[#343434] prose-code:bg-transparent prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-code:mx-1 prose-code:cursor-pointer
                    prose-kbd:text-[#A0A0A0] prose-kbd:font-normal prose-kbd:bg-[#343434] prose-kbd:rounded prose-kbd:px-1 prose-kbd:py-0.5 prose-kbd:cursor-pointer
                    prose-ol:text-white
                    prose-ul:text-white
                    prose-li:text-white prose-li:pl-4 prose-li:marker:text-[#a0a0a0] prose-li:marker:font-light prose-li:text-[15px]
                    prose-img:border prose-img:border-[#343434] prose-img:rounded prose-img:cursor-pointer
                    prose-em:text-white prose-strong:text-white prose-strong:font-medium prose-strong:font-bold
                    prose-hr:border-[#343434] 
                    pb-32
                    "
        >
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </div>
  );
};

export default PostPage;
