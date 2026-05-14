import PageHero from "../components/common/PageHero";
import PrimaryButton from "../components/common/PrimaryButton";
import Seo from "../components/seo/Seo";
import { faqPengiriman } from "../data/siteData";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqPengiriman.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a }
  }))
};

export default function PengirimanBarangPage() {
  return (
    <>
      <Seo
        title="Pengiriman Barang Medan ke Sumbar & Riau | Keren Travel"
        description="Layanan titip barang, paket cepat, dokumen, dan oleh-oleh antar kota dari Medan ke Sumbar dan Riau."
        jsonLd={jsonLd}
      />
      <PageHero
        eyebrow="Layanan Pengiriman"
        title="Titip Barang & Paket Antar Kota"
        description="Pengiriman cepat Medan ke Sumbar/Riau untuk paket, dokumen, dan oleh-oleh dengan alur simpel."
        cta={
          <div className="flex flex-wrap gap-3">
            <PrimaryButton to="/kontak">Kirim Barang</PrimaryButton>
            <PrimaryButton to="/kontak" variant="outline">
              Hubungi Admin
            </PrimaryButton>
          </div>
        }
      />
      <section className="container-page pb-2">
        <div className="flex flex-wrap gap-2">
          <span className="chip">Titip Paket Cepat</span>
          <span className="chip">Dokumen Prioritas</span>
          <span className="chip">Pengiriman Oleh-oleh</span>
        </div>
      </section>
      <section className="container-page py-8">
        <h2 className="section-title">Jenis Layanan Pengiriman</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {[
            "Layanan titip barang",
            "Pengiriman paket cepat",
            "Pengiriman dokumen",
            "Pengiriman oleh-oleh"
          ].map((item) => (
            <article key={item} className="glass-card-strong p-5 transition hover:border-brand-100/60">
              <h3 className="text-base font-semibold">{item}</h3>
              <p className="mt-2 text-sm text-slate-300">Proses cepat, konfirmasi jelas, dan update status melalui admin.</p>
              <p className="mt-3 text-xs text-brand-100">Siap kirim via jadwal travel harian</p>
            </article>
          ))}
        </div>
      </section>
      <section className="container-page py-4">
        <h2 className="section-title">Prosedur Pengiriman</h2>
        <ol className="mt-4 grid gap-3 text-sm text-slate-300 md:grid-cols-3">
          <li className="glass-card-strong p-4">1. Hubungi admin dan infokan detail barang.</li>
          <li className="glass-card-strong p-4">2. Barang diterima dan dicatat untuk keamanan.</li>
          <li className="glass-card-strong p-4">3. Pengiriman dilakukan pada jadwal keberangkatan terdekat.</li>
        </ol>
      </section>
      <section className="container-page py-6">
        <h2 className="section-title">Estimasi & Cakupan</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="glass-card-strong p-5">
            <h3 className="font-semibold">Estimasi Pengiriman</h3>
            <p className="mt-2 text-sm text-slate-300">Medan ke Sumbar: sekitar 1 hari. Medan ke Riau: hari yang sama atau keesokan hari.</p>
          </div>
          <div className="glass-card-strong p-5">
            <h3 className="font-semibold">Area Cakupan</h3>
            <p className="mt-2 text-sm text-slate-300">Medan ↔ Sumatera Barat dan Medan ↔ Riau dengan keberangkatan harian.</p>
          </div>
        </div>
      </section>
      <section className="container-page py-6">
        <h2 className="section-title">Keamanan Barang</h2>
        <p className="section-copy">
          Setiap titipan dicatat detail pengirim dan penerima. Barang sensitif seperti dokumen diprioritaskan untuk pengiriman aman.
        </p>
      </section>
      <section className="container-page pb-14 pt-6">
        <h2 className="section-title">FAQ Pengiriman</h2>
        <div className="mt-4 space-y-3">
          {faqPengiriman.map((item) => (
            <details key={item.q} className="glass-card-strong p-4">
              <summary className="cursor-pointer text-sm font-semibold">{item.q}</summary>
              <p className="mt-2 text-sm text-slate-200">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
