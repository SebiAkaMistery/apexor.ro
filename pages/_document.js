import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ro" className="font-inter">
      <Head>
        <link rel="icon" href="/favicon.ico" fetchPriority="low" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        {/* Canonical link can be set dynamically in each page */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}