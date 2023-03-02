import FeaturedPosts from "../components/Home/FeaturedPosts/FeaturedPosts";
import Hero from "../components/Home/Hero/Hero";
import { getFeaturedPosts } from "../lib/posts-utils";

export default function Home({ featuredPosts }) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      featuredPosts,
    },
  };
}
