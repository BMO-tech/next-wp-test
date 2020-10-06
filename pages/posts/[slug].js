import Layout from '@/components/layout';
import { getPostSlugs, getPost } from '@/lib/posts';

export default function Post({ post }) {
  return (
    <Layout>
      {post.title.rendered}
      <br />
      {post.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getPostSlugs();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);
  return {
    props: {
      post,
    },
  };
}
