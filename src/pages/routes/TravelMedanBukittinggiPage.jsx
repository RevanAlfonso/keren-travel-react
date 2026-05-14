import PageHero from "../../components/common/PageHero";
import PrimaryButton from "../../components/common/PrimaryButton";
import Seo from "../../components/seo/Seo";

const highlights = [
  {
    icon: "⏱",
    label: "Estimasi Waktu",
    value: "10–12 Jam",
    desc: "Perjalanan langsung tanpa transit, sesuai kondisi jalur lintas Sumatera.",
  },
  {
    icon: "👨‍👩‍👧",
    label: "Ramah Keluarga",
    value: "Nyaman",
    desc: "Cocok untuk mudik, kunjungan keluarga, dan perjalanan rutin antar kota.",
  },
  {
    icon: "📄",
    label: "Titip Dokumen",
    value: "Prioritas",
    desc: "Dokumen penting dikirim lebih cepat dengan penanganan khusus.",
  },
];

const schedules = [
  { depart: "06.00 WIB", arrive: "18.00 WIB", type: "Pagi", seats: "Tersedia" },
  { depart: "13.00 WIB", arrive: "01.00 WIB", type: "Siang", seats: "Tersedia" },
  { depart: "20.00 WIB", arrive: "08.00 WIB", type: "Malam", seats: "Terbatas" },
];

const faqs = [
  {
    q: "Apakah ada layanan antar jemput?",
    a: "Ya, kami menyediakan layanan antar jemput dari rumah di area Medan dan sekitarnya.",
  },
  {
    q: "Berapa kapasitas penumpang per keberangkatan?",
    a: "Armada kami berkapasitas 7–13 penumpang tergantung jenis kendaraan yang tersedia.",
  },
  {
    q: "Apakah bisa titip barang tanpa ikut travel?",
    a: "Bisa, dengan layanan pengiriman barang antar kota kami yang terjadwal setiap hari.",
  },
];

export default function TravelMedanBukittinggiPage() {
  return (
    <>
      <Seo
        title="Travel Medan Bukittinggi Harian | Keren Travel"
        description="Travel harian Medan Bukittinggi dengan layanan antar jemput dan opsi titip barang antar kota."
      />

      <PageHero
        eyebrow="Rute Detail"
        title="Travel Medan — Bukittinggi"
        description="Perjalanan antar kota yang praktis untuk keluarga, mahasiswa, dan kebutuhan rutin."
        cta={
          <div className="flex flex-wrap gap-3">
            <PrimaryButton to="/kontak">Pesan Travel</PrimaryButton>
            <PrimaryButton to="/pengiriman-barang" variant="outline">
              Kirim Barang
            </PrimaryButton>
          </div>
        }
      />

      {/* Route Visual Strip */}
      <section className="border-y border-white/10 bg-white/5 py-5">
        <div className="container-page">
          <div className="flex items-center justify-center gap-4 text-sm font-medium">
            <span className="text-base font-semibold text-white">Medan</span>
            <div className="flex flex-1 items-center gap-1" style={{ maxWidth: "320px" }}>
              <div className="h-px flex-1 bg-gradient-to-r from-white/20 via-brand-100 to-white/20" />
              <span className="rounded-full border border-brand-100/40 bg-brand-100/10 px-3 py-0.5 text-xs text-brand-100">
                ±11 jam
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-white/20 via-brand-100 to-white/20" />
            </div>
            <span className="text-base font-semibold text-white">Bukittinggi</span>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container-page py-12">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-100">
          Keunggulan Rute
        </p>
        <h2 className="mb-8 text-2xl font-bold text-white">
          Kenapa pilih Keren Travel?
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((h) => (
            <article
              key={h.label}
              className="glass-card group relative overflow-hidden p-6 transition hover:-translate-y-1"
            >
              {/* top accent line */}
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-brand-100/60 to-transparent" />
              <div className="mb-4 text-3xl">{h.icon}</div>
              <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-slate-400">
                {h.label}
              </p>
              <p className="mb-2 text-xl font-bold text-white">{h.value}</p>
              <p className="text-sm leading-relaxed text-slate-300">{h.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Schedule Table */}
      <section className="container-page pb-12">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-100">
          Jadwal Keberangkatan
        </p>
        <h2 className="mb-8 text-2xl font-bold text-white">Jadwal Harian</h2>
        <div className="glass-card overflow-hidden p-0">
          <div className="hidden grid-cols-4 border-b border-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-slate-400 md:grid">
            <span>Sesi</span>
            <span>Berangkat</span>
            <span>Estimasi Tiba</span>
            <span>Ketersediaan</span>
          </div>
          {schedules.map((s, i) => (
            <div
              key={s.depart}
              className={`grid grid-cols-2 gap-y-1 border-b border-white/5 px-6 py-4 last:border-0 md:grid-cols-4 md:items-center ${
                i % 2 === 0 ? "bg-white/5" : ""
              }`}
            >
              <span className="text-sm font-semibold text-white">{s.type}</span>
              <span className="text-right text-sm text-slate-300 md:text-left">
                {s.depart}
              </span>
              <span className="col-span-2 text-xs text-slate-400 md:col-span-1 md:text-sm md:text-slate-300">
                {s.arrive}
              </span>
              <span
                className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-medium ${
                  s.seats === "Tersedia"
                    ? "bg-emerald-400/10 text-emerald-400"
                    : "bg-amber-400/10 text-amber-400"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    s.seats === "Tersedia" ? "bg-emerald-400" : "bg-amber-400"
                  }`}
                />
                {s.seats}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-slate-500">
          * Jadwal dapat berubah. Hubungi kami untuk konfirmasi ketersediaan kursi.
        </p>
      </section>

      {/* FAQ */}
      <section className="container-page pb-14">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-100">
          FAQ
        </p>
        <h2 className="mb-8 text-2xl font-bold text-white">Pertanyaan Umum</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="glass-card p-5">
              <p className="mb-2 text-sm font-semibold text-white">{f.q}</p>
              <p className="text-sm leading-relaxed text-slate-300">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="container-page pb-14">
        <div className="glass-card relative overflow-hidden px-8 py-10 text-center">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-100/5 via-transparent to-brand-100/5" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-100/50 to-transparent" />
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-100">
            Siap Berangkat?
          </p>
          <h2 className="mb-2 text-2xl font-bold text-white">
            Pesan sekarang, berangkat hari ini
          </h2>
          <p className="mx-auto mb-6 max-w-md text-sm text-slate-300">
            Hubungi kami via WhatsApp atau kunjungi halaman kontak untuk reservasi dan informasi
            lengkap.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <PrimaryButton to="/kontak">Pesan Travel</PrimaryButton>
            <PrimaryButton to="/pengiriman-barang" variant="outline">
              Kirim Barang
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}