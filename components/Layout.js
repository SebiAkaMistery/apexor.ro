import { useState } from 'react';
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('./Navbar'), { ssr: false });
import Footer from './footer';

export default function Layout({ children }) {
  const [showCookieBar, setShowCookieBar] = useState(true);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      {showCookieBar && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-700">
            <p className="mb-2 sm:mb-0">
              Folosim cookies pentru a îmbunătăți experiența pe site. Continuarea navigării implică acceptul tău.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="/politica-confidentialitate"
                className="text-green-700 underline hover:text-green-900"
              >
                Află mai multe
              </a>
              <button
                onClick={() => setShowCookieBar(false)}
                className="text-sm bg-green-700 text-white px-4 py-1 rounded hover:bg-green-800"
              >
                Am înțeles
              </button>
              <button
                onClick={() => setShowCookieBar(false)}
                className="text-gray-500 hover:text-gray-700 text-xl leading-none"
                aria-label="Închide"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}