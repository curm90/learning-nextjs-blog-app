import FeaturedPosts from "../components/Home/FeaturedPosts/FeaturedPosts";
import Hero from "../components/Home/Hero/Hero";

export default function Home() {
  const DUMMY_POSTS = [
    {
      title: "Getting started with NextJS",
      slug: "getting-started-with-nextjs",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is the React framework for production. It makes building fullstack applications a breeze and ships with built-in SSR.",
      date: "2022-02-10",
    },
    {
      title: "Getting started with NextJS",
      slug: "getting-started-with-nextjs1",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is the React framework for production. It makes building fullstack applications a breeze and ships with built-in SSR.",
      date: "2022-02-10",
    },
    {
      title: "Getting started with NextJS",
      slug: "getting-started-with-nextjs2",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is the React framework for production. It makes building fullstack applications a breeze and ships with built-in SSR.",
      date: "2022-02-10",
    },
    {
      title: "Getting started with NextJS",
      slug: "getting-started-with-nextjs3",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is the React framework for production. It makes building fullstack applications a breeze and ships with built-in SSR.",
      date: "2022-02-10",
    },
  ];

  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
