import Seo from "../components/seo/Seo";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Keren Travel",
  description: "Layanan travel antar kota dan pengiriman barang Medan ke Sumatera Barat dan Riau.",
  areaServed: ["Medan", "Sumatera Barat", "Riau"],
  serviceType: ["Travel Antar Kota", "Titip Paket", "Charter Mobil", "Antar Jemput"]
};

export default function TentangPage() {
  return (
    <>
      <Seo title="Tentang Keren Travel" description="Profil Keren Travel sebagai layanan travel modern dan titip barang antar kota." jsonLd={jsonLd} />
      <section className="container-page page-block">
        <p className="muted-label">Profil Perusahaan</p>
        <h1 className="section-title">Tentang Keren Travel</h1>
        <p className="section-copy">
          Keren Travel adalah layanan travel antar kota modern yang juga fokus pada titip barang dan paket cepat antara Medan, Sumatera Barat, dan Riau.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="glass-card-strong p-6">
            <h2 className="text-lg font-semibold text-white">Fokus Mudik & Keluarga</h2>
            <p className="mt-2 text-sm text-slate-300">Kami melayani perjalanan yang nyaman untuk kebutuhan keluarga dan pulang kampung.</p>
          </article>
          <article className="glass-card-strong p-6">
            <h2 className="text-lg font-semibold text-white">Travel + Titip Barang</h2>
            <p className="mt-2 text-sm text-slate-300">Satu platform praktis untuk antar penumpang sekaligus pengiriman paket antar kota.</p>
          </article>
          <article className="glass-card-strong p-6">
            <h2 className="text-lg font-semibold text-white">Layanan Harian</h2>
            <p className="mt-2 text-sm text-slate-300">Rute Medan, Sumbar, dan Riau aktif setiap hari untuk kebutuhan yang cepat dan konsisten.</p>
          </article>
        </div>
      </section>
    </>
  );
}
