import Head from "next/head";
import PostContent from "../../components/Posts/PostDetail/PostContent/PostContent";
import { getPostData, getPostsFiles } from "../../lib/posts-utils";

export default function Post({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="'description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />;
    </>
  );
}

export function getStaticProps(context) {
  const {
    params: { slug },
  } = context;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postsFilesNames = getPostsFiles();

  const slugs = postsFilesNames.map((fileName) =>
    fileName.replace(/\.md$/, "")
  );

  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
