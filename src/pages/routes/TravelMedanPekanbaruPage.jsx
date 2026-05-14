import PageHero from "../../components/common/PageHero";
import PrimaryButton from "../../components/common/PrimaryButton";
import Seo from "../../components/seo/Seo";

export default function TravelMedanPekanbaruPage() {
  return (
    <>
      <Seo title="Travel Medan Pekanbaru Harian | Keren Travel" description="Travel Medan Pekanbaru harian, cocok untuk perjalanan bisnis, keluarga, dan pengiriman titipan." />
      <PageHero
        eyebrow="Rute Detail"
        title="Travel Medan - Pekanbaru"
        description="Jadwal rutin dan layanan cepat untuk perjalanan aman antar Medan dan Riau."
        cta={
          <div className="flex flex-wrap gap-3">
            <PrimaryButton to="/kontak">Pesan Travel</PrimaryButton>
            <PrimaryButton to="/pengiriman-barang" variant="outline">
              Kirim Barang
            </PrimaryButton>
          </div>
        }
      />
      <section className="container-page pb-14">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="glass-card p-5">
            <h2 className="text-lg font-semibold">Estimasi Waktu</h2>
            <p className="mt-2 text-sm text-slate-300">Sekitar 8-10 jam untuk perjalanan Medan-Pekanbaru.</p>
          </article>
          <article className="glass-card p-5">
            <h2 className="text-lg font-semibold">Jadwal Rutin</h2>
            <p className="mt-2 text-sm text-slate-300">Keberangkatan tersedia harian untuk kebutuhan cepat antar kota.</p>
          </article>
          <article className="glass-card p-5">
            <h2 className="text-lg font-semibold">Pengiriman Cepat</h2>
            <p className="mt-2 text-sm text-slate-300">Cocok untuk titip paket, oleh-oleh, dan dokumen.</p>
          </article>
        </div>
      </section>
    </>
  );
}
