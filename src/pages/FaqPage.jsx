import Seo from "../components/seo/Seo";
import { faqPengiriman } from "../data/siteData";

const faqGeneral = [
  { q: "Apakah bisa antar jemput?", a: "Bisa. Antar jemput tersedia di titik tertentu sesuai area layanan." },
  { q: "Bagaimana cara booking travel?", a: "Anda bisa langsung hubungi admin melalui halaman kontak untuk konfirmasi kursi." }
];

export default function FaqPage() {
  const allFaq = [...faqGeneral, ...faqPengiriman];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  };

  return (
    <>
      <Seo title="FAQ Travel & Pengiriman | Keren Travel" description="Pertanyaan umum tentang travel antar kota, mudik, charter, dan pengiriman barang Keren Travel." jsonLd={jsonLd} />
      <section className="container-page page-block">
        <p className="muted-label">Pusat Bantuan</p>
        <h1 className="section-title">FAQ Keren Travel</h1>
        <p className="section-copy max-w-3xl">Semua jawaban penting seputar travel, mudik, charter mobil, dan titip barang antar kota.</p>
        <div className="mt-6 space-y-3">
          {allFaq.map((item) => (
            <details key={item.q} className="glass-card-strong p-5">
              <summary className="cursor-pointer text-sm font-semibold text-white">{item.q}</summary>
              <p className="mt-3 text-sm text-slate-300">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
