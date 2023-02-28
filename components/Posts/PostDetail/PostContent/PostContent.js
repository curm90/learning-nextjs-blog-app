import PostHeader from "../PostHeader/PostHeader";
import classes from "./PostContent.module.css";

const DUMMY_POST = {
  title: "Getting started with NextJS",
  slug: "getting-started-with-nextjs3",
  image: "getting-started-nextjs.png",
  date: "2022-02-10",
  content: "# This is a first post",
};

export default function PostContent() {
  const { image, slug, title, content } = DUMMY_POST;
  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      {content}
    </article>
  );
}
