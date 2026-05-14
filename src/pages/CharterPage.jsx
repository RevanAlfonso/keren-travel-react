import PageHero from "../components/common/PageHero";
import PrimaryButton from "../components/common/PrimaryButton";
import Seo from "../components/seo/Seo";

export default function CharterPage() {
  return (
    <>
      <Seo title="Charter Mobil Medan ke Sumbar/Riau | Keren Travel" description="Layanan charter mobil antar kota untuk perjalanan keluarga, bisnis, dan kebutuhan khusus." />
      <PageHero
        eyebrow="Layanan Charter"
        title="Charter Mobil Antar Kota"
        description="Butuh jadwal fleksibel? Gunakan layanan charter untuk perjalanan lebih privat dan nyaman."
        cta={
          <div className="flex flex-wrap gap-3">
            <PrimaryButton to="/kontak">Charter Sekarang</PrimaryButton>
            <PrimaryButton to="/kontak" variant="outline">
              Hubungi Admin
            </PrimaryButton>
          </div>
        }
      />
      <section className="container-page pb-14">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="glass-card p-5">
            <h2 className="text-lg font-semibold">Privat & Fleksibel</h2>
            <p className="mt-2 text-sm text-slate-300">Pilih waktu berangkat sesuai kebutuhan keluarga atau bisnis.</p>
          </article>
          <article className="glass-card p-5">
            <h2 className="text-lg font-semibold">Rute Medan-Sumbar-Riau</h2>
            <p className="mt-2 text-sm text-slate-300">Layanan fokus antar kota dengan pengemudi berpengalaman.</p>
          </article>
          <article className="glass-card p-5">
            <h2 className="text-lg font-semibold">Harga Transparan</h2>
            <p className="mt-2 text-sm text-slate-300">Estimasi biaya dijelaskan di awal agar perjalanan lebih tenang.</p>
          </article>
        </div>
      </section>
    </>
  );
}
