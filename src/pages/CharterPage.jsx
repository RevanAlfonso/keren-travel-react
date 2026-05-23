import { Link } from "react-router-dom";
import Seo from "../components/seo/Seo";

const WA_NUMBER = "6285129120303";

const benefits = [
  { icon: "🕐", title: "Jadwal Bebas", desc: "Pilih jam berangkat sesuai kebutuhan, tidak terikat jadwal umum.", accent: "#8b5cf6" },
  { icon: "🚗", title: "Privat & Eksklusif", desc: "Kendaraan hanya untuk rombongan Anda, tanpa berbagi dengan penumpang lain.", accent: "#10b981" },
  { icon: "🗺️", title: "Rute Fleksibel", desc: "Tujuan bisa disesuaikan selama perjalanan, berhenti sesuai kebutuhan.", accent: "#f59e0b" },
  { icon: "👨‍✈️", title: "Driver Handal", desc: "Driver berpengalaman dan hafal jalur lintas Sumatera dengan baik.", accent: "#3b82f6" },
];

const useCases = [
  { title: "Charter Keluarga", icon: "👨‍👩‍👧", desc: "Perjalanan mudik, liburan, atau wisata keluarga dengan privasi dan kenyamanan penuh." },
  { title: "Perjalanan Bisnis", icon: "💼", desc: "Rapat luar kota, site visit, atau perjalanan dinas dengan jadwal yang fleksibel dan tepat waktu." },
  { title: "Wisata Rombongan", icon: "🎒", desc: "Tur bersama teman atau komunitas ke destinasi di Sumbar atau Riau dengan armada yang memadai." },
  { title: "Penjemputan Khusus", icon: "✈️", desc: "Antar jemput bandara atau stasiun dengan jadwal yang pas dan tidak perlu menunggu." },
];

export default function CharterPage() {
  function handleWA() {
    const msg = "Halo Keren Travel, saya ingin informasi layanan *Charter Mobil*. Bisa bantu saya untuk informasi lebih lanjut?";
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <>
      <Seo
        title="Charter Mobil Medan Antar Kota Privat | Keren Travel"
        description="Layanan charter mobil privat dari Medan ke Sumbar & Riau. Jadwal bebas, armada eksklusif, driver handal. Cocok untuk keluarga, bisnis, dan wisata."
        canonical="https://keren-travel.vercel.app/charter"
      />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "52vh" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(7,20,43,0.92) 38%, rgba(7,20,43,0.5) 100%), url('/charter-hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(199,168,76,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,168,76,.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(139,92,246,.15) 0%, transparent 70%)" }} />

        <div className="container-page relative z-10 py-20 md:py-28">
          <p className="muted-label mb-4">Layanan Charter</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
            Charter Mobil<br />
            <span style={{ color: "#E7C46D" }}>Privat & Eksklusif</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mb-8 leading-relaxed">
            Sewa armada eksklusif untuk perjalanan keluarga, bisnis, atau wisata dengan jadwal yang sepenuhnya sesuai kebutuhan Anda.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleWA}
              className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm"
              style={{ background: "linear-gradient(135deg, #E7C46D, #C9A84C)", color: "#07142B" }}
            >
              ⬦ Charter Sekarang
            </button>
            <Link to="/kontak" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border border-white/30 text-white hover:bg-white/10 transition-all">
              Hubungi Admin →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2 mt-8">
            {["Privat Eksklusif", "Jadwal Fleksibel", "Driver Handal", "Antar Jemput"].map((c) => (
              <span key={c} className="chip">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ────────────────────────────────────────── */}
      <section className="container-page py-16">
        <p className="muted-label mb-2">Keunggulan</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Kenapa Charter di Keren Travel?</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <article key={b.title} className="glass-card group p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${b.accent}, transparent)` }} />
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{b.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── USE CASES ───────────────────────────────────────── */}
      <section className="container-page pb-16">
        <p className="muted-label mb-2">Untuk Siapa</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Cocok untuk Berbagai Kebutuhan</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {useCases.map((u) => (
            <div key={u.title} className="glass-card-strong p-6 flex items-start gap-5 border border-[#E7C46D]/15 transition-all duration-300 hover:border-[#E7C46D]/40">
              <div className="text-4xl shrink-0">{u.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{u.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{u.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING NOTE ─────────────────────────────────────── */}
      <section className="container-page pb-16">
        <div className="glass-card p-8 border border-[#E7C46D]/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="muted-label mb-2">Estimasi Biaya</p>
              <h2 className="text-2xl font-bold text-white mb-3">Harga Transparan, Sesuai Kebutuhan</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Biaya charter dihitung berdasarkan jarak, durasi, jenis armada, dan kondisi perjalanan. Kami selalu menjelaskan estimasi di awal agar tidak ada biaya yang mengejutkan.
              </p>
              <div className="mt-5 space-y-2">
                {["Estimasi diberikan sebelum konfirmasi", "Tidak ada biaya tersembunyi", "Negosiasi langsung dengan admin"].map((p) => (
                  <div key={p} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-[#E7C46D]">✓</span> {p}
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card-strong p-6 text-center border border-[#E7C46D]/25">
              <p className="text-4xl mb-3">💬</p>
              <p className="text-white font-semibold mb-2">Tanya Langsung Admin</p>
              <p className="text-sm text-slate-400 mb-5">Untuk mendapatkan estimasi harga charter yang akurat sesuai rute dan kebutuhan Anda.</p>
              <button
                onClick={handleWA}
                className="w-full py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
                style={{ background: "#25D366", color: "white" }}
              >
                Chat via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="container-page pb-14">
        <div className="glass-card-strong px-8 py-12 text-center relative overflow-hidden border border-[#E7C46D]/30">
          <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #8b5cf6, transparent)" }} />
          <p className="muted-label mb-2">Pesan Sekarang</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Rencanakan perjalanan charter Anda</h2>
          <p className="text-slate-300 text-sm max-w-md mx-auto mb-8">Hubungi admin kami, diskusikan kebutuhan, dan kami siap menyediakan armada terbaik untuk perjalanan Anda.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={handleWA} className="btn-shine inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm" style={{ background: "linear-gradient(135deg, #E7C46D, #C9A84C)", color: "#07142B" }}>
              Charter Sekarang
            </button>
            <Link to="/rental-mobil" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm border border-white/30 text-white hover:bg-white/10 transition-all">
              Lihat Rental Mobil
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
