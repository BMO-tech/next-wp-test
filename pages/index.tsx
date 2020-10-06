import Head from 'next/head';
// import Link from 'next/link';

import Container from '@material-ui/core/Container';
import TopNav from '@/components/app/TopNav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next JS + WP</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <main>
        <Container>
          <TopNav />
        </Container>
      </main>
    </div>
  );
}
