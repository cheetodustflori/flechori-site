import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import Header from "@/app/components/header";
import Link from "next/link";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    console.log("Slug not found:", slug);
    console.log(
      "Available slugs:",
      posts.map((p) => p.slug)
    );
    notFound();
  }

  const paragraphs = post!.content.split("\n\n");

  return (
    <div className="flex flex-col gap-10 m-[15px]">
      <Header>
        <h1 className="text-2xl font-bold italic font-larken ">writing</h1>
        <Link href="/writing" className="font-larken">back to writing</Link>
      </Header>
      <div className="flex flex-row items-center justify-between">
        <h1 className="font-pecita text-3xl font-bold">{post!.title}</h1>
        <p className="font-pecita font-bold">
          {new Date(post!.date).toLocaleDateString()}
        </p>
      </div>

      <article className="bg-[url('/writing/notepage.svg')] p-5 bg-repeat-y bg-cover bg-center font-larken space-y-4 leading-relaxed text-gray-800 border">
        {paragraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </article>
      <div>
        
      </div>
    </div>
  );
}
