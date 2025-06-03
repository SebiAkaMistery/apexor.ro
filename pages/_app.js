import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
const Layout = dynamic(() => import('../components/Layout'), { ssr: false });
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import localFont from 'next/font/local';
import ScrollIndicator from '../components/ScrollIndicator';

const inter = localFont({
  src: [
    { path: '../public/fonts/Inter-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/Inter-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/Inter-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-inter',
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  useEffect(() => {
    function updateConsent() {
      if (window.Cookiebot && window.Cookiebot.consents) {
        window.gtag('consent', 'update', {
          ad_storage: window.Cookiebot.consents.marketing ? 'granted' : 'denied',
          analytics_storage: window.Cookiebot.consents.statistics ? 'granted' : 'denied',
        });
      }
    }

    window.addEventListener('CookiebotOnAccept', updateConsent);
    window.addEventListener('CookiebotOnDecline', updateConsent);

    // Aplică consimțământul curent la mount (în caz de reload pagina)
    updateConsent();

    return () => {
      window.removeEventListener('CookiebotOnAccept', updateConsent);
      window.removeEventListener('CookiebotOnDecline', updateConsent);
    };
  }, []);

  return (
    <div className={inter.variable}>
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={`https://apexor.ro${router.asPath}`} />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />

          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NXZTWS4T');`,
            }}
          />
          {/* Cookiebot Consent Banner */}
          <Script
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid="8250585a-82df-461d-beee-12481911ff5f"
            data-blockingmode="auto"
            type="text/javascript"
            strategy="lazyOnload"
          />
        </Head>
        {isHome ? (
          <>
            <Component {...pageProps} />
          </>
        ) : (
          <Layout>
            <Component {...pageProps} />
            {!isHome && <ScrollIndicator />}
          </Layout>
        )}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NXZTWS4T"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
      </>
    </div>
  );
}

export default appWithTranslation(MyApp);