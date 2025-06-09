import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="ro" className="font-inter">
      <Head>
        <link rel="icon" href="/favicon.ico" fetchPriority="low" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        {/* Canonical link can be set dynamically in each page */}
        <meta name="cookie-consent" content="This site uses cookies to improve user experience. By continuing to browse, you accept our cookie policy." />
        <link rel="prefetch" href="/politica-confidentialitate" as="document" />
        <Script
          id="gtm"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NXZTWS4T');`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}