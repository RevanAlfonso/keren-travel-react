import PageHero from "../../components/common/PageHero";
import PrimaryButton from "../../components/common/PrimaryButton";
import Seo from "../../components/seo/Seo";

export default function TravelMedanPadangPage() {
  return (
    <>
      <Seo title="Travel Medan Padang Harian | Keren Travel" description="Layanan travel Medan ke Padang untuk mudik, perjalanan keluarga, dan perjalanan rutin antar kota." />
      <PageHero
        eyebrow="Rute Detail"
        title="Travel Medan - Padang"
        description="Keberangkatan harian dengan armada nyaman, cocok untuk mudik dan perjalanan keluarga."
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
            <p className="mt-2 text-sm text-slate-300">Sekitar 11-13 jam tergantung kondisi perjalanan.</p>
          </article>
          <article className="glass-card p-5">
            <h2 className="text-lg font-semibold">Penjemputan</h2>
            <p className="mt-2 text-sm text-slate-300">Tersedia antar jemput area tertentu setelah konfirmasi admin.</p>
          </article>
          <article className="glass-card p-5">
            <h2 className="text-lg font-semibold">Titip Paket</h2>
            <p className="mt-2 text-sm text-slate-300">Anda bisa kirim paket/dokumen pada rute keberangkatan ini.</p>
          </article>
        </div>
      </section>
    </>
  );
}
