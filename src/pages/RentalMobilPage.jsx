import { Link } from "react-router-dom";
import Seo from "../components/seo/Seo";

const WA_NUMBER = "6285129120303";

const fleet = [
  {
    name: "Toyota HiAce",
    capacity: "12–13 Penumpang",
    category: "Minibus",
    icon: "🚌",
    accent: "#10b981",
    features: ["AC Double Blower", "Reclining Seat", "Bagasi Luas", "USB Charger"],
    desc: "Armada unggulan untuk perjalanan kelompok besar, keluarga, atau rombongan wisata dengan kenyamanan maksimal.",
  },
  {
    name: "Toyota Innova",
    capacity: "6–7 Penumpang",
    category: "MPV Premium",
    icon: "🚗",
    accent: "#8b5cf6",
    features: ["AC Dingin", "Kursi Nyaman", "Bagasi Standar", "Full Service"],
    desc: "Pilihan premium untuk perjalanan keluarga kecil atau perjalanan bisnis yang membutuhkan kenyamanan ekstra.",
  },
  {
    name: "Toyota Avanza",
    capacity: "5–6 Penumpang",
    category: "MPV",
    icon: "🚙",
    accent: "#f59e0b",
    features: ["AC Standar", "Kursi Fleksibel", "Irit Bahan Bakar", "Mudah Bermanuver"],
    desc: "Solusi terbaik untuk keluarga yang ingin fleksibilitas tinggi dan biaya yang lebih terjangkau.",
  },
];

const packages = [
  {
    title: "Rental Harian",
    duration: "Per Hari (12 jam)",
    icon: "📅",
    accent: "#10b981",
    desc: "Sewa armada seharian penuh untuk perjalanan wisata, keluarga, atau keperluan umum dalam kota dan luar kota.",
    highlights: ["Bebas tujuan dalam 12 jam", "Driver profesional", "BBM dapat ditanggung"],
  },
  {
    title: "Rental Antar Kota",
    duration: "Satu arah / PP",
    icon: "🗺️",
    accent: "#8b5cf6",
    desc: "Perjalanan antar kota dengan kenyamanan privat. Pilihan jadwal bebas, tidak tergantung jadwal travel umum.",
    highlights: ["Medan → Sumbar / Riau", "Berangkat sesuai jadwal Anda", "Antar langsung ke tujuan"],
  },
  {
    title: "Wedding & Event",
    duration: "Paket Khusus",
    icon: "🎊",
    accent: "#f59e0b",
    desc: "Sewa armada untuk acara pernikahan, wisuda, atau event perusahaan. Armada bersih, sopan, dan tepat waktu.",
    highlights: ["Dekorasi interior opsional", "Koordinasi dengan panitia", "Fleet multi-armada"],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Rental Mobil Keren Travel",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Keren Travel",
    "telephone": "0851-2912-0303",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Medan",
      "addressRegion": "Sumatera Utara",
      "addressCountry": "ID"
    }
  },
  "description": "Layanan rental mobil dengan driver profesional untuk kebutuhan wisata, antar kota, pernikahan, dan event di Medan, Sumbar, dan Riau.",
  "areaServed": ["Medan", "Sumatera Barat", "Riau"]
};

export default function RentalMobilPage() {
  function handleWA(pkg) {
    const msg = `Halo Keren Travel, saya ingin informasi lebih lanjut mengenai paket *${pkg.title}* untuk rental mobil. Mohon bantuannya.`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <>
      <Seo
        title="Rental Mobil Medan dengan Driver | Keren Travel"
        description="Sewa mobil dengan driver profesional di Medan. Tersedia HiAce, Innova, Avanza untuk wisata, antar kota, pernikahan, dan event. Hubungi admin sekarang."
        canonical="https://keren-travel.vercel.app/rental-mobil"
        jsonLd={jsonLd}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "55vh" }}>
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(7,20,43,0.92) 40%, rgba(7,20,43,0.55) 100%), url('/rental-mobil-hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(199,168,76,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,168,76,.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(199,168,76,.12) 0%, transparent 70%)" }} />

        <div className="container-page relative z-10 py-20 md:py-28">
          <p className="muted-label mb-4">Sewa Kendaraan</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
            Rental Mobil<br />
            <span style={{ color: "#E7C46D" }}>dengan Driver</span><br />
            Profesional
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mb-8 leading-relaxed">
            Sewa armada pilihan dengan driver berpengalaman untuk wisata, perjalanan bisnis, pernikahan, hingga kebutuhan antar kota.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleWA({ title: "Rental Mobil" })}
              className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all"
              style={{ background: "linear-gradient(135deg, #E7C46D, #C9A84C)", color: "#07142B" }}
            >
              ⬦ Pesan Rental
            </button>
            <Link
              to="/charter"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border border-white/30 text-white hover:bg-white/10 transition-all"
            >
              Lihat Charter →
            </Link>
          </div>

          {/* Trust chips */}
          <div className="flex flex-wrap gap-2 mt-8">
            {["Driver Berpengalaman", "Armada Terawat", "AC Dingin", "Tepat Waktu", "Harga Transparan"].map((c) => (
              <span key={c} className="chip">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLEET ─────────────────────────────────────────────── */}
      <section className="container-page py-16">
        <p className="muted-label mb-2">Armada Kami</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Pilihan Kendaraan</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {fleet.map((car) => (
            <article key={car.name} className="glass-card-strong overflow-hidden group relative transition-all duration-300 hover:-translate-y-1">
              {/* Accent top bar */}
              <div className="h-1 w-full" style={{ background: car.accent }} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-4xl mb-2 block">{car.icon}</span>
                    <h3 className="text-xl font-bold text-white">{car.name}</h3>
                    <p className="text-xs mt-0.5" style={{ color: car.accent }}>{car.category}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-300">{car.capacity}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">{car.desc}</p>
                <div className="space-y-1.5">
                  {car.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: car.accent }} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── PACKAGES ─────────────────────────────────────────── */}
      <section className="container-page pb-16">
        <p className="muted-label mb-2">Pilihan Paket</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Paket Rental Kami</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div key={pkg.title} className="glass-card group relative overflow-hidden p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-white/20" style={{ borderColor: `${pkg.accent}30` }}>
              <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${pkg.accent}, transparent)` }} />
              <div className="text-4xl mb-4">{pkg.icon}</div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white">{pkg.title}</h3>
                <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-white/10 text-slate-300">{pkg.duration}</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-5 flex-1">{pkg.desc}</p>
              <div className="space-y-1.5 mb-6">
                {pkg.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="text-sm" style={{ color: pkg.accent }}>✓</span>
                    {h}
                  </div>
                ))}
              </div>
              <button
                onClick={() => handleWA(pkg)}
                className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: `${pkg.accent}20`, color: pkg.accent, border: `1px solid ${pkg.accent}40` }}
              >
                Tanya Paket Ini →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="container-page pb-16">
        <p className="muted-label mb-2">Cara Booking</p>
        <h2 className="text-3xl font-bold text-white mb-10">Cara Pesan Rental</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { step: "01", icon: "💬", title: "Hubungi Admin", desc: "Kirim pesan ke admin WhatsApp kami." },
            { step: "02", icon: "📋", title: "Pilih Armada", desc: "Admin bantu pilih kendaraan sesuai kebutuhan." },
            { step: "03", icon: "✅", title: "Konfirmasi", desc: "Setujui detail, tanggal, dan estimasi biaya." },
            { step: "04", icon: "🚗", title: "Berangkat!", desc: "Driver kami jemput di lokasi yang disepakati." },
          ].map((s) => (
            <div key={s.step} className="glass-card p-5 relative overflow-hidden">
              <div className="absolute top-3 right-4 text-5xl font-black text-white/[0.04] select-none">{s.step}</div>
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-bold text-white mb-1.5">{s.title}</h3>
              <p className="text-sm text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="container-page pb-16">
        <p className="muted-label mb-2">FAQ</p>
        <h2 className="text-3xl font-bold text-white mb-8">Pertanyaan Umum</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { q: "Apakah sudah termasuk bahan bakar?", a: "Tergantung paket yang dipilih. Ada paket termasuk BBM dan ada yang tidak. Konfirmasi dengan admin saat booking." },
            { q: "Berapa lama minimal rental?", a: "Minimal rental adalah setengah hari (6 jam) untuk keperluan dalam kota, dan satu perjalanan untuk antar kota." },
            { q: "Apakah bisa memilih jam penjemputan?", a: "Ya, jam penjemputan bisa disesuaikan. Hubungi admin sebelumnya untuk koordinasi jadwal driver." },
            { q: "Apakah tersedia untuk perjalanan malam?", a: "Tersedia, dengan catatan konfirmasi terlebih dahulu ke admin karena ada ketentuan tambahan untuk perjalanan malam jauh." },
          ].map((f) => (
            <div key={f.q} className="glass-card-strong p-5 border border-[#E7C46D]/15">
              <p className="font-semibold text-white mb-2">{f.q}</p>
              <p className="text-sm text-slate-300 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="container-page pb-14">
        <div className="glass-card-strong relative overflow-hidden px-8 py-12 text-center border border-[#E7C46D]/30">
          <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #E7C46D, transparent)" }} />
          <p className="muted-label mb-2">Booking Sekarang</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Butuh armada untuk perjalanan Anda?</h2>
          <p className="text-slate-300 text-sm max-w-md mx-auto mb-8">Hubungi admin kami dan dapatkan penawaran terbaik sesuai kebutuhan. Armada siap melayani setiap hari.</p>
          <button
            onClick={() => handleWA({ title: "Rental Mobil" })}
            className="btn-shine inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm"
            style={{ background: "linear-gradient(135deg, #E7C46D, #C9A84C)", color: "#07142B" }}
          >
            💬 Hubungi Admin WhatsApp
          </button>
        </div>
      </section>
    </>
  );
}
