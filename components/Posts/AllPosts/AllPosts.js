import Posts from "../Posts";
import classes from "./AllPosts.module.css";

export default function AllPosts({ posts }) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <Posts posts={posts} />
    </section>
  );
}
