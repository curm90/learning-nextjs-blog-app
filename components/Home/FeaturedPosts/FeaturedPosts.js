import Posts from "../../Posts/Posts";
import classes from "./FeaturedPosts.module.css";

export default function FeaturedPosts({ posts }) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <Posts posts={posts} />
    </section>
  );
}
