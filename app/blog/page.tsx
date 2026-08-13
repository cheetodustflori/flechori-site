import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

// 1. Helper function to read and parse all markdown files
function getBlogPosts() {
  const folder = path.join(process.cwd(), 'blogs');
  const files = fs.readdirSync(folder);
  
  // Filter out any non-markdown files (like .DS_Store)
  const markdownFiles = files.filter((file) => file.endsWith('.md'));

  // Parse the frontmatter for each file
  const posts = markdownFiles.map((filename) => {
    const filePath = path.join(folder, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // matter() extracts the YAML frontmatter at the top of the .md file
    const { data } = matter(fileContents);
    
    return {
      // Fallback to the filename if the title isn't provided in the frontmatter
      title: data.title || filename.replace('.md', ''),
      date: data.date || 'No Date',
      description: data.description || '',
      // The slug is just the filename without the .md extension
      slug: filename.replace('.md', ''), 
    };
  });

  // Optional: Sort posts by date in descending order
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// 2. The main Server Component
export default function BlogIndex() {
  const posts = getBlogPosts();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <div key={post.slug} className="border p-4 rounded-lg">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500 mt-1">{post.date}</p>
            {post.description && (
              <p className="mt-2">{post.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}