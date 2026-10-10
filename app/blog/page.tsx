// 'use client';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
// import { useEffect } from 'react';

function getBlogPosts() {
  const folder = path.join(process.cwd(), 'blogs');
  const files = fs.readdirSync(folder);
  
  const markdownFiles = files.filter((file) => file.endsWith('.md'));

  const posts = markdownFiles.map((filename) => {
    const filePath = path.join(folder, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    const { data } = matter(fileContents);
    
    return {
      title: data.title || filename.replace('.md', ''),
      date: data.date || 'No Date',
      description: data.description || '',
      tags: data.tags || '',
      slug: filename.replace('.md', ''), 
    };
  });

  // Optional: Sort posts by date in descending order
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// 2. The main Server Component
export default function BlogIndex() {
  const posts = getBlogPosts();

  // const unfinished = posts.tags.includes("unfinished");

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="flex gap-2 mb-3">
        <p>Filter</p>
        <ul className="flex gap-2">
          <li>study abroad</li>
          <li>faith</li>
          <li>guides/how-to</li>
          <li>life updates</li>
          <li>etc</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          
          <div key={post.slug} className="border p-4 rounded-lg">
            {post.tags.includes("unfinished") && <p>unfinished.. </p>}
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500 mt-1">{post.date}</p>
            <p><b>tags:</b> {post.tags}</p>
            {/* {post.tags.contains("unfinished") ? <p><b>tags:</b> {post.tags}</p> : } */}
            {post.description && (
              <p className="mt-2">{post.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}