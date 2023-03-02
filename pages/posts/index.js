import AllPosts from "../../components/Posts/AllPosts/AllPosts";
import { getAllPosts } from "../../lib/posts-utils";

export default function AllPostsPage({ posts }) {
  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
