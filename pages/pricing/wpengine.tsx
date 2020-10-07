import { WPEClient } from '@/lib/WPEClient';
import Head from 'next/head';

export async function getStaticProps(): Promise<{
  props: { [key: string]: any };
}> {
  const pricing = await WPEClient.get('pages/31150');
  return { props: { pricing } };
}

export default function WPEngine({ pricing }: any) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          id="wp-block-library-css"
          href="https://wpengine.com/wp-includes/css/dist/block-library/style.min.css?ver=5.5.1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elasticpress-related-posts-block-css"
          href="https://wpengine.com/wp-content/plugins/elasticpress/dist/css/related-posts-block-styles.min.css?ver=3.4.3"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="fl-builder-layout-31150-css"
          href="https://wpengine.com/wp-content/uploads/bb-plugin/cache/31150-layout.css?ver=dbd0011624adfee82e69460d09b8454c-23"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="wpe-bb-css"
          href="https://wpengine.com/wp-content/mu-plugins/wpengine-bb-mods/css/style.css?ver=1600874892"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="wpengine-style-css"
          href="https://wpengine.com/wp-content/themes/wpengine-breakthrough/style.css?ver=1600874892"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="wpengine-resource-center-css"
          href="https://wpengine.com/wp-content/themes/wpengine-breakthrough/css/resource-center.css?ver=1593610938"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="wpengine-widgets-css"
          href="https://wpengine.com/wp-content/themes/wpengine-breakthrough/css/widgets.css?ver=1598561359"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="wpengine-block-css-css"
          href="https://wpengine.com/wp-content/plugins/wpengine-blocks/build/main.css?ver=1573249056"
          type="text/css"
          media="all"
        />
      </Head>
      <h2>WP Engine Pricing Page</h2>
      <div dangerouslySetInnerHTML={{ __html: pricing.content.rendered }} />
    </>
  );
}
