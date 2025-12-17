import Link from "next/link";
import { posts } from "@/lib/posts";
import Header from "../components/header";

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-10 m-[15px]">
      <Header>
        <h1 className="text-2xl font-bold italic font-larken ">writing</h1>
      </Header>

      <ul className="space-y-6">
        {posts.map((post) => (
          
          <li key={post.slug}>
            <img src="writing/notecard.svg"/>
            <Link
              href={`/writing/${post.slug}`}
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
    </div>
  );
}
