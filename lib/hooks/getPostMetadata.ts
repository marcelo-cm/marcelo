import fs from 'fs';
import matter from 'gray-matter';

export type PostMetadata = {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
};

const getPostMetadata = (): PostMetadata[] => {
  const folder = 'blogposts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  // Get gray-matter data from each file.
  const posts: PostMetadata[] = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`blogposts/${fileName}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date, // Assuming valid date or non-date string
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.md', ''),
      visibility: matterResult.data.visibility,
    };
  });

  // Sort posts by date, treating invalid dates as the oldest.
  posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    // If either date is invalid, move it to the end.
    if (isNaN(dateA) && isNaN(dateB)) return 0; // Both invalid
    if (isNaN(dateA)) return 1; // `a` is invalid, `b` comes first
    if (isNaN(dateB)) return -1; // `b` is invalid, `a` comes first

    // Compare valid dates
    return dateA - dateB; // Newest first
  });

  return posts;
};

export default getPostMetadata;
