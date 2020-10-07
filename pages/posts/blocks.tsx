import Head from 'next/head';
import { getPost } from '@/lib/posts';

export async function getStaticProps(): Promise<{
  props: { [key: string]: any };
}> {
  const post = await getPost('a-new-post');
  return { props: { post } };
}

export default function WPEngine({ post }: any) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          id="genesis-blocks-fontawesome-css"
          href="http://bmopress.mpu/wp-content/plugins/genesis-blocks/dist/assets/fontawesome/css/all.min.css?ver=1600187216"
          media="all"
        />
        <link
          rel="stylesheet"
          id="dashicons-css"
          href="http://bmopress.mpu/wp-includes/css/dashicons.min.css?ver=5.5.1"
          media="all"
        />
        <link
          rel="stylesheet"
          id="admin-bar-css"
          href="http://bmopress.mpu/wp-includes/css/admin-bar.min.css?ver=5.5.1"
          media="all"
        />
        <link
          rel="stylesheet"
          id="wp-block-library-css"
          href="http://bmopress.mpu/wp-includes/css/dist/block-library/style.min.css?ver=5.5.1"
          media="all"
        />
        <link
          rel="stylesheet"
          id="create-block-skyforge-menu-block-css"
          href="http://bmopress.mpu/wp-content/plugins/skyforge-menu/build/style-index.css?ver=1600204432"
          media="all"
        />
        <link
          rel="stylesheet"
          id="genesis-blocks-style-css-css"
          href="http://bmopress.mpu/wp-content/plugins/genesis-blocks/dist/blocks.style.build.css?ver=1600187216"
          media="all"
        />
        <link
          rel="stylesheet"
          id="twentytwenty-style-css"
          href="http://bmopress.mpu/wp-content/themes/twentytwenty/style.css?ver=1.5"
          media="all"
        />
      </Head>
      <h2>{post.title.rendered}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </>
  );
}
