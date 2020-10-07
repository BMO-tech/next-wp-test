import Head from 'next/head';

export default function Main({ children }: any) {
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
      <div>{children}</div>
    </>
  );
}
