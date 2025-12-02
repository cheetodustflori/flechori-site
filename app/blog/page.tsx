// app/blog/page.tsx
import Link from "next/link";
import { posts } from "@/lib/posts";

export default function BlogPage() {
  return (
    <main>
      <h1 className="mb-4 text-3xl font-bold">Writing</h1>
      <p className="mb-8 text-gray-600">
        Essays, notes, and things I&apos;m thinking about.
      </p>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-xl font-semibold hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <p className="mt-1 text-gray-700">{post.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
