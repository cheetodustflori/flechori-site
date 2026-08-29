import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Point directly to the new "blogs" folder
const blogsDirectory = path.join(process.cwd(), 'blogs');

export function getAllBlogSlugs() {
  const fileNames = fs.readdirSync(blogsDirectory);
  
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }));
}

export function getBlogData(slug: string) {
  const fullPath = path.join(blogsDirectory, `${slug}.md`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title,
      date: data.date,
      // You can add other blog-specific frontmatter here like 'tags' or 'coverImage'
    };
  } catch (error) {
    return null; 
  }
}