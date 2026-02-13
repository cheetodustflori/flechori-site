import Link from "next/link";
import { posts } from "@/lib/posts";
import Header from "../components/header";

export default function BlogPage() {
  const genreBackgrounds: Record<string, string> = {
    poetry: "bg-[url('/writing/red-notecard.svg')]",
    blog: "bg-[url('/writing/blue-notecard.svg')]",
    default: "bg-[url('/writing/notecard.svg')]"
  };
  return (
    <div className="flex flex-col gap-10 m-[15px]">
      <Header>
        <h1 className="text-2xl font-bold italic font-larken ">writing</h1>
        <ul className="flex flex-row gap-2">
          <li>a <i>key:</i></li>
          <li className="text-[#E4615A] font-bold">poetry</li>
          <li className="text-[#6C89C4] font-bold">blogs</li>
          <li className="text-[#FFDC8B] font-bold">etc</li>
        </ul>
      </Header>

      <ul className="space-y-6">
        {posts.map((post) => {
          const bgImage = genreBackgrounds[post.genre] || genreBackgrounds.default;
          return (
          <li key={post.slug}>
            <Link
              href={`/writing/${post.slug}`}
              className="text-xl"
            >
              <div className={`${bgImage} hover:relative hover:top-1 font-pecita left-[-70px] relative flex align-middle bg-[url('/writing/notecard.svg')] bg-no-repeat bg-contain w-full h-[200px]`}>
                <div className="flex flex-col max-w-[400px]">
                  <div className="relative left-[120px] top-[5px]">
                  {new Date(post.date).toLocaleDateString()}: {post.title}
                  </div>
                <div>
                  <p className="relative left-[120px] top-2.5 overflow-clip whitespace-normal text-ellipsis">{post.summary}</p>
                </div>
                </div>
                
                
              </div>
            </Link>
            
          </li>
)})}
      </ul>
    </div>
  );
}
