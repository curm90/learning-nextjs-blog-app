import Head from "next/head";
import FeaturedPosts from "../components/Home/FeaturedPosts/FeaturedPosts";
import Hero from "../components/Home/Hero/Hero";
import { getFeaturedPosts } from "../lib/posts-utils";

export default function Home({ featuredPosts }) {
  return (
    <>
      <Head>
        <title>Liam's blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
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
