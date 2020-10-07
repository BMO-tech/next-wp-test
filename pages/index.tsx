import Head from 'next/head';
import { ApiClientClass } from '@/lib/ApiClient';
import { IMenuItem } from '@/lib/models';
import Container from 'react-bootstrap/Container';
import TopNav from '@/components/app/TopNav';

export default function Home({ menuItems }: any) {
  return (
    <>
      <Head>
        <title>Next JS + WP</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <TopNav menuItems={menuItems} />
      <Container fluid></Container>
    </>
  );
}

export async function getStaticProps(ctx: any) {
  const MenuClient = new ApiClientClass('wp-json/wp-api-menus/v2');
  const menuItems: IMenuItem[] = await MenuClient.get('menu-locations/primary');

  return {
    props: {
      menuItems,
    },
  };
}
