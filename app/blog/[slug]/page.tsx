import { notFound } from "next/navigation";
import fs from 'fs';
import { getBlogData, getAllBlogSlugs } from "@/lib/blogs";
import path from 'path';
import matter from 'gray-matter'; 
import ReactMarkdown from 'react-markdown';
import Header from "../../components/header"
import Link from 'next/link';
import CommentSection from "@/app/components/CommentSection";

// 1. This function runs at build time
export async function generateStaticParams() {
  return getAllBlogSlugs();
}

// 2. Your page component remains mostly the same
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params (Next.js 15 requirement)
  const { slug } = await params; 

 const data = getBlogData(slug);

  if (!data) {
    notFound();
  }
  
  return (
    <>
    <article className="p-8">
      <Header>
                <h1 className="text-2xl font-bold">{data.title}</h1>
                <Link href="/blog" className="font-larken hover:underline">back to blogs</Link>
          </Header>
      
      <p className="text-gray-500">{data.date}</p>
      
      {/* Right now, this just outputs raw markdown text */}
      <div className="mt-6 prose prose-stone  prose-headings:bold whitespace-normal">
        <ReactMarkdown
          components={{
            p: ({ node, ...props }) => (
              <p className="whitespace-pre-wrap leading-relaxed mb-4" {...props} />
            ),
            img: ({ node, ...props }) => (
              <img className="max-w-full rounded shadow-sm my-6 mx-auto block" {...props} />
            ),
          }}
        >
          {data.content}
        </ReactMarkdown>
      </div>
    </article>
    <CommentSection slug={slug} />
    </>
  );
}