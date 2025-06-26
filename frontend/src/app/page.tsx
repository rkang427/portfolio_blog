type BlogPost = {
  id: number;
  documentId: string;
  title: string;
  content: string;
  postedAt: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog-posts`);
  const json = await res.json();
  const posts: BlogPost[] = json.data || [];

  return (
    <>
      <div>
        <h1>Blog Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
