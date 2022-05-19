import { getAllPosts, PostMeta } from "@/src/api";
import Articles from "@/src/components/articles";
import Header from "@/src/components/header";

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <>
    <Header/>
      <h1>Artiklar</h1>
      <Articles posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
}
