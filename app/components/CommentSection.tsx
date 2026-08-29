'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const ICONS = ['˖🪿˚', '🐱✮', '🐰ᢉ𐭩', 'ʚɞ🐻‍❄️', '𐙚🧸ྀི']; 
const COLORS = ['#CACC90', '#F4EBBE', '#A9AFD1', '#A1CDF4', '#7C809B'];

type Comment = { 
  id: number; 
  parent_id: number | null; 
  content: string; 
  created_at: string; 
  author_name: string; 
  icon: string; 
  bg_color: string; 
};



  
export default function CommentSection({ slug }: { slug: string }) {
   // Inside CommentSection component:
const [isAdmin, setIsAdmin] = useState(false);

// Optional: Type a secret phrase anywhere on the component to unlock admin mode
useEffect(() => {
  let buffer = "";
  const handleKeyDown = (e: KeyboardEvent) => {
    buffer += e.key;
    if (buffer.endsWith("adminmode")) {
      setIsAdmin(prev => !prev);
      buffer = "";
      alert(isAdmin ? "Admin mode locked." : "Admin mode unlocked!");
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [isAdmin]);

  const [comments, setComments] = useState<Comment[]>([]);
  const [content, setContent] = useState('');
  const [replyingTo, setReplyingTo] = useState<number | null>(null);

  // Guest Avatar State
  const [authorName, setAuthorName] = useState('');
  const [icon, setIcon] = useState(ICONS[0]);
  const [bgColor, setBgColor] = useState(COLORS[0]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 1. Fetch comments for this post
    const loadComments = async () => {
      const { data } = await supabase
        .from('comments')
        .select('*')
        .eq('post_slug', slug)
        .order('created_at');
      if (data) setComments(data as Comment[]);
    };
    loadComments();

    // 2. Load saved avatar from previous visits
    const savedProfile = localStorage.getItem('blog_guest_profile');
    if (savedProfile) {
      const parsed = JSON.parse(savedProfile);
      setAuthorName(parsed.authorName);
      setIcon(parsed.icon);
      setBgColor(parsed.bgColor);
    }
    setIsLoaded(true);
  }, [slug]);

  const handlePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !content.trim()) return;

    // Save their cute avatar for next time
    localStorage.setItem('blog_guest_profile', JSON.stringify({ authorName, icon, bgColor }));

    const newComment = { 
      post_slug: slug, 
      content, 
      parent_id: replyingTo,
      author_name: authorName,
      icon,
      bg_color: bgColor
    };

    const { data, error } = await supabase.from('comments').insert([newComment]).select().single();

    if (data && !error) {
      setComments([...comments, data]);
      setContent('');
      setReplyingTo(null);
    }
  };

  const handleDelete = async (commentId: number) => {
    // 1. Delete from Supabase database
    const { error } = await supabase
      .from('comments')
      .delete()
      .eq('id', commentId);

    if (!error) {
      // 2. Remove it from local state immediately
      setComments(prevComments => prevComments.filter(c => c.id !== commentId && c.parent_id !== commentId));
    }
  };

  if (!isLoaded) return null; // Prevent hydration mismatch with localStorage

  return (
    <div className="mt-12 font-larken border-t border-black pt-8">
      <h2 className="text-2xl font-bold italic mb-6">comments</h2>

      {/* Recursive Comment Rendering */}
      <div className="space-y-6 mb-8">
        {comments.filter(c => !c.parent_id).map((comment) => (
  <CommentNode 
    key={comment.id} 
    comment={comment} 
    allComments={comments} 
    onReply={setReplyingTo} 
    onDelete={handleDelete} // ADD THIS
    isAdmin={isAdmin}
  />
))}
        {comments.length === 0 && <p className="text-gray-500">aww this comment section is so quiet... pls make some noise</p>}
      </div>

      {/* Guest Form with Avatar Builder */}
      <form onSubmit={handlePost} className="flex flex-col gap-4 p-6 border border-gray rounded-xl">
        
        {replyingTo && (
          <div className="flex justify-between text-sm font-bold bg-yellow-100 p-2 border border-gray mb-2">
            <span>Replying to a comment...</span>
            <button type="button" onClick={() => setReplyingTo(null)} className="underline hover:text-black">Cancel</button>
          </div>
        )}

        {/* The Avatar Builder */}
        <div className="flex flex-wrap md:flex-nowrap gap-6 items-center mb-2">
          <div className={`w-16 h-16 flex items-center justify-center rounded-full text-3xl border border-gray`} style={{ backgroundColor: bgColor }}>
            {icon}
          </div>
          
          <div className="flex flex-col gap-3 flex-1">
            <input 
              type="text" 
              placeholder="Nickname" 
              value={authorName} 
              onChange={e => setAuthorName(e.target.value)} 
              className="border border-gray p-2 bg-white max-w-xs" 
              required 
            />
            <div className="flex gap-4">
              <div className="flex gap-2 text-xl">
                {ICONS.map(i => <button type="button" key={i} onClick={() => setIcon(i)} className="hover:scale-110">{i}</button>)}
              </div>
              <div className="w-px bg-gray-300 mx-2" />
              <div className="flex gap-2 items-center">
                {COLORS.map(c => <button type="button" key={c} onClick={() => setBgColor(c)} className={`w-5 h-5 rounded-full border border-gray `} style={{ backgroundColor: c }} />)}
              </div>
            </div>
          </div>
        </div>

        {/* Comment Input */}
        <textarea 
          value={content} 
          onChange={e => setContent(e.target.value)} 
          placeholder="Leave a comment..." 
          className="p-3 border bg-white border-gray rounded-xl min-h-[100px] resize-y" 
          required 
        />
        
        <button type="submit" className="bg-blue-200 rounded-xl hover:cursor-pointer text-white px-6 py-2 self-end font-bold hover:bg-blue-400">
          Post Comment
        </button>
      </form>
    </div>
  );
}

// Nested Node - Reads flat data directly
function CommentNode({ comment, allComments, onReply, onDelete, isAdmin }: { comment: Comment; allComments: Comment[]; onReply: (id: number) => void ; onDelete: (id: number) => void; isAdmin: boolean;}) {
  const replies = allComments.filter(c => c.parent_id === comment.id);
  return (
    <div className="mb-2">
      <div className="p-4 bg-white border border-gray-200 flex gap-4">
        <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-xl border border-gray `} style={{backgroundColor:comment.bg_color}}>
          {comment.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-baseline gap-2 mb-1">
             <p className="font-bold text-gray-900">{comment.author_name}</p>
             <p className="text-xs text-gray-400">{new Date(comment.created_at).toLocaleDateString()}</p>
          </div>

          {isAdmin && (
              <button 
                onClick={() => onDelete(comment.id)} 
                className="text-xs text-red-500 hover:underline font-bold"
              >
                delete
              </button>
            )}

          <p className="whitespace-pre-wrap text-gray-800 mb-2 leading-relaxed">{comment.content}</p>
          <button onClick={() => onReply(comment.id)} className="text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-black">Reply</button>
        </div>
      </div>
      {replies.length > 0 && (
        <div className="ml-6 border-l border-gray-300 pl-4 mt-2 space-y-2">
          {replies.map(reply => (
            <CommentNode 
              key={reply.id} 
              comment={reply} 
              allComments={allComments} 
              onReply={onReply} 
              onDelete={onDelete} 
              isAdmin={isAdmin}
            />
          ))}
        </div>
      )}
    </div>
  );
}