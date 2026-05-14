import PageHero from "../components/common/PageHero";
import PrimaryButton from "../components/common/PrimaryButton";
import Seo from "../components/seo/Seo";

export default function KontakPage() {
  return (
    <>
      <Seo title="Kontak Keren Travel" description="Hubungi admin Keren Travel untuk pesan travel, kirim barang, cek jadwal, atau charter mobil." />
      <PageHero
        eyebrow="Kontak Admin"
        title="Hubungi Keren Travel"
        description="Pesan travel, kirim barang, atau charter mobil bisa langsung melalui admin WhatsApp."
        cta={
          <div className="flex flex-wrap gap-3">
            <PrimaryButton to="/jadwal">Cek Jadwal</PrimaryButton>
            <PrimaryButton to="/pengiriman-barang" variant="outline">
              Kirim Barang
            </PrimaryButton>
          </div>
        }
      />
      <section className="container-page pb-14">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="glass-card-strong p-6 text-sm text-slate-300">
            <p className="muted-label">WhatsApp Admin</p>
            <p className="mt-2 text-base font-semibold text-white">0823-7240-4544</p>
            <p className="mt-2 text-base font-semibold text-white">0851-2912-0303</p>
          </article>
          <article className="glass-card-strong p-6 text-sm text-slate-300">
            <p className="muted-label">Area Layanan</p>
            <p className="mt-2 text-base font-semibold text-white">Medan, Sumatera Barat, Riau</p>
          </article>
          <article className="glass-card-strong p-6 text-sm text-slate-300">
            <p className="muted-label">Jam Operasional</p>
            <p className="mt-2 text-base font-semibold text-white">07.00 - 22.00 WIB</p>
          </article>
        </div>
      </section>
    </>
  );
}
