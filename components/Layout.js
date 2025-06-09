import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('./Navbar'), { ssr: false });
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-700">
          <p className="mb-2 sm:mb-0">
            Folosim cookies pentru a îmbunătăți experiența pe site. Continuarea navigării implică acceptul tău.
          </p>
          <a
            href="/politica-confidentialitate"
            className="text-green-700 underline hover:text-green-900"
          >
            Află mai multe
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}