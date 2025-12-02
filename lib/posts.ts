// lib/posts.ts
export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "first-post",
    title: "My First Post",
    date: "2025-12-02",
    summary: "Testing my first blog post in the new site.",
    content: `
This is my first post.

If you're reading this, the blog system is finally working 🎉

I can write as much as I want here.
Later I can swap this to real Markdown files or MDX, but for now this is good enough.
    `.trim(),
  },
  {
    slug: "second-post",
    title: "Second Post",
    date: "2025-12-03",
    summary: "Another test post to make sure slugs are working.",
    content: `
This is my second post.

Just making sure multiple posts work, not just the first one.
    `.trim(),
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
