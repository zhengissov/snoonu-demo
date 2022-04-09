import { GetServerSidePropsContext } from 'next';
import { AppProps } from 'next/app';
import { getCookie } from 'cookies-next';
import Head from 'next/head';
import { ColorScheme } from '@mantine/core';
import { Direction } from 'contexts/Direction';
import { Providers } from 'contexts';

export default function App(props: AppProps & { colorScheme: ColorScheme; direction: Direction }) {
  const { Component, pageProps, colorScheme, direction } = props;

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <Providers colorScheme={colorScheme} direction={direction}>
        <Component {...pageProps} />
      </Providers>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
  direction: getCookie('mantine-direction', ctx) || 'ltr',
});
