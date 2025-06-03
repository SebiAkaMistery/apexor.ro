

import Head from "next/head";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | APEXOR</title>
        <meta name="description" content="Ultimele articole și noutăți din domeniul energiei regenerabile, consultanței și oportunităților de finanțare - APEXOR Blog." />
      </Head>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold mb-6">Blog</h1>
        <article className="mb-12">
          <h2 className="text-2xl font-bold mb-2">🔋 Fondul pentru Modernizare 2025 – Ce trebuie să știi</h2>
          <p className="text-gray-700 mb-4">
            Lansat recent, apelul Fondul pentru Modernizare – Autoconsum oferă o oportunitate excepțională pentru companiile din România care doresc să investească în producția și stocarea de energie regenerabilă. Cu finanțare de până la 100% din cheltuielile eligibile și o perioadă de aplicare deschisă până pe 22 august 2025, programul promite o competiție intensă și un impact major în sectorul energetic.
          </p>
          <p className="text-gray-700 mb-4">
            APEXOR oferă sprijin complet în elaborarea cererilor de finanțare, dimensionarea corectă a investiției și integrarea stocării, conform noilor cerințe din ghid.
          </p>
          <p className="text-sm text-gray-500">Publicat: Iunie 2025</p>
        </article>

        <article className="mb-12">
          <h2 className="text-2xl font-bold mb-2">🔋 Modernisation Fund 2025 – What You Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Recently launched, the call for the Modernisation Fund – Self-Consumption offers an outstanding opportunity for Romanian companies seeking to invest in renewable energy production and storage. With up to 100% funding of eligible costs and an open application window until August 22, 2025, the program promises strong competition and major impact on the energy sector.
          </p>
          <p className="text-gray-700 mb-4">
            APEXOR provides full support in preparing funding applications, correctly sizing your investment, and integrating energy storage solutions as required by the updated guidelines.
          </p>
          <p className="text-sm text-gray-500">Published: June 2025</p>
        </article>

        <p className="text-gray-500">
          Mai multe articole în curând. / More articles coming soon.
        </p>
      </div>
    </>
  );
}