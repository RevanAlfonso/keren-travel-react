import { Link } from "react-router-dom";
import Seo from "../components/seo/Seo";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Keren Travel",
  description: "Layanan travel antar kota dan pengiriman barang dari Medan ke Sumatera Barat dan Riau.",
  url: "https://keren-travel.vercel.app",
  telephone: "0851-2912-0303",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Medan",
    addressRegion: "Sumatera Utara",
    addressCountry: "ID"
  },
  areaServed: ["Medan", "Sumatera Barat", "Riau"],
  serviceType: ["Travel Antar Kota", "Titip Paket", "Charter Mobil", "Rental Mobil", "Antar Jemput"],
};

const values = [
  { icon: "🛡️", title: "Terpercaya", desc: "Sudah melayani ratusan penumpang dengan track record aman dan konsisten.", accent: "#10b981" },
  { icon: "⏱️", title: "Tepat Waktu", desc: "Keberangkatan harian dengan jadwal teratur agar penumpang bisa merencanakan perjalanan.", accent: "#8b5cf6" },
  { icon: "💬", title: "Responsif", desc: "Admin aktif setiap hari dari pagi hingga malam untuk bantu proses booking dan pertanyaan.", accent: "#f59e0b" },
  { icon: "🚗", title: "Armada Nyaman", desc: "Armada rutin diservis dan dijaga kebersihannya demi kenyamanan perjalanan Anda.", accent: "#3b82f6" },
  { icon: "📦", title: "Dual Service", desc: "Satu platform untuk travel penumpang dan pengiriman barang, paket, serta dokumen.", accent: "#ec4899" },
  { icon: "🗺️", title: "Multi Rute", desc: "Melayani 7+ rute andalan di Sumbar dan Riau dengan keberangkatan setiap hari.", accent: "#f97316" },
];

const timeline = [
  { year: "2023", title: "Keren Travel Berdiri", desc: "Dimulai dengan satu armada dan tekad melayani penumpang Medan–Sumbar dengan sepenuh hati." },
  { year: "2024", title: "Ekspansi Rute Riau", desc: "Menambah rute ke Pekanbaru, Duri, dan Dumai untuk menjangkau lebih banyak penumpang." },
  { year: "2025", title: "Layanan Pengiriman", desc: "Meluncurkan layanan titip barang dan paket antar kota yang resmi dan terstruktur." },
  { year: "2026", title: "Platform Digital", desc: "Hadir secara online dengan website modern untuk kemudahan informasi dan pemesanan." },
];

export default function TentangPage() {
  return (
    <>
      <Seo
        title="Tentang Keren Travel | Travel & Pengiriman Terpercaya Medan"
        description="Profil Keren Travel – layanan travel modern antar kota dan pengiriman barang dari Medan ke Sumbar dan Riau. Terpercaya, armada nyaman, harian."
        canonical="https://keren-travel.vercel.app/tentang"
        jsonLd={jsonLd}
      />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "50vh" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(7,20,43,0.93) 40%, rgba(7,20,43,0.6) 100%), url('/team-photo.png')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(199,168,76,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,168,76,.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container-page relative z-10 py-20 md:py-28">
          <p className="muted-label mb-4">Profil Perusahaan</p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tentang <span style={{ color: "#E7C46D" }}>Keren Travel</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl leading-relaxed mb-8">
            Keren Travel adalah layanan travel antar kota modern yang juga fokus pada titip barang dan paket cepat antara Medan, Sumatera Barat, dan Riau.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/rute"
              className="btn-shine inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
              style={{ background: "linear-gradient(135deg, #E7C46D, #C9A84C)", color: "#07142B" }}
            >
              Lihat Rute Kami
            </Link>
            <Link to="/kontak" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-white/30 text-white hover:bg-white/10 transition-all">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────── */}
      <div className="border-y border-white/10 bg-white/[0.03]">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 py-5">
          {[
            { value: "7+", label: "Rute Aktif" },
            { value: "3×", label: "Jadwal Harian" },
            { value: "500+", label: "Pelanggan" },
            { value: "1.5+", label: "Tahun Operasi" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center py-2 px-4">
              <span className="text-2xl font-bold" style={{ color: "#E7C46D" }}>{s.value}</span>
              <span className="text-xs text-slate-400 mt-0.5">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── VALUES ──────────────────────────────────────────── */}
      <section className="container-page py-16">
        <p className="muted-label mb-2">Nilai Kami</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Mengapa Memilih Keren Travel?</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((v) => (
            <article key={v.title} className="glass-card group p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${v.accent}, transparent)` }} />
              <div className="text-4xl mb-4">{v.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{v.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── TIMELINE ────────────────────────────────────────── */}
      <section className="container-page pb-16">
        <p className="muted-label mb-2">Perjalanan Kami</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Sejarah Keren Travel</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#E7C46D]/60 via-[#E7C46D]/20 to-transparent hidden md:block" />
          <div className="space-y-6">
            {timeline.map((t, i) => (
              <div key={t.year} className="glass-card p-6 md:ml-16 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[4.5rem] hidden md:flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-bold" style={{ borderColor: "#E7C46D", background: "#0B1E3F", color: "#E7C46D" }}>
                  {i + 1}
                </div>
                <div className="flex items-start gap-4">
                  <span className="shrink-0 px-3 py-1 rounded-lg text-sm font-bold border" style={{ borderColor: "#E7C46D40", color: "#E7C46D", background: "#E7C46D15" }}>{t.year}</span>
                  <div>
                    <h3 className="font-bold text-white">{t.title}</h3>
                    <p className="text-sm text-slate-300 mt-1">{t.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="container-page pb-14">
        <div className="glass-card-strong px-8 py-12 text-center relative overflow-hidden border border-[#E7C46D]/30">
          <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #E7C46D, transparent)" }} />
          <p className="muted-label mb-2">Bergabung Bersama Kami</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Siap merasakan perjalanan bersama Keren Travel?</h2>
          <p className="text-slate-300 text-sm max-w-md mx-auto mb-8">Pesan tiket atau kirim barang hari ini. Admin kami siap membantu 7 hari seminggu.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/jadwal" className="btn-shine inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm" style={{ background: "linear-gradient(135deg, #E7C46D, #C9A84C)", color: "#07142B" }}>
              Pesan Travel
            </Link>
            <Link to="/kontak" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm border border-white/30 text-white hover:bg-white/10 transition-all">
              Hubungi Admin
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
