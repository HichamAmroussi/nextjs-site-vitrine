import PostCard from "@/components/postCard/PostCard";

export default function Blog() {
    return (
      <main className="flex gap-5 flex-wrap py-5">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </main>
    );
  }