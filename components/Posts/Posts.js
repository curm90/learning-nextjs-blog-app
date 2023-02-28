import classes from "./Posts.module.css";
import Post from "./Post/Post";

export default function Posts({ posts }) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </ul>
  );
}
