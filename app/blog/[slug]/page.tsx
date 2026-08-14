import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; 
import ReactMarkdown from 'react-markdown';

// 1. This function runs at build time
export async function generateStaticParams() {
  const folder = path.join(process.cwd(), 'blogs');
  const files = fs.readdirSync(folder);

  // It must return an array of objects where the keys match your dynamic route parameters.
  // In this case, we need an array like: [{ slug: 'post-1' }, { slug: 'post-2' }]
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({
      slug: file.replace('.md', ''),
    }));
}

// 2. Your page component remains mostly the same
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params (Next.js 15 requirement)
  const { slug } = await params; 

  const filePath = path.join(process.cwd(), 'blogs', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Extract frontmatter and body content
  const { data, content } = matter(fileContent);
  
  return (
    <article className="p-8">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="text-gray-500">{data.date}</p>
      
      {/* Right now, this just outputs raw markdown text */}
      <div className="mt-6 prose prose-slate whitespace-pre-wrap">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  );
}