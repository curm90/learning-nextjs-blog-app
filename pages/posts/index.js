import Head from "next/head";
import AllPosts from "../../components/Posts/AllPosts/AllPosts";
import { getAllPosts } from "../../lib/posts-utils";

export default function AllPostsPage({ posts }) {
  return (
    <>
      <Head>
        <title>All posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts"
        />
      </Head>
      <AllPosts posts={posts} />;
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
