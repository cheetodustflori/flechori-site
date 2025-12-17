import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";

// Pre-generate all /blog/[slug] pages at build time
export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Note: params is now a Promise in newer Next.js
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ unwrap the Promise

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    console.log("Slug not found:", slug);
    console.log("Available slugs:", posts.map((p) => p.slug));
    notFound();
  }

  const paragraphs = post!.content.split("\n\n");

  return (
    <main>
      <h1 className="mb-2 text-3xl font-bold">{post!.title}</h1>
      <p className="mb-6 text-sm text-gray-500">
        {new Date(post!.date).toLocaleDateString()}
      </p>

      <article className="space-y-4 leading-relaxed text-gray-800">
        {paragraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </article>
    </main>
  );
}
