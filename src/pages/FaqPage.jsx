import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/seo/Seo";
import { faqPengiriman } from "../data/siteData";

const faqGeneral = [
  { q: "Apakah bisa antar jemput?", a: "Bisa. Antar jemput tersedia di titik tertentu sesuai area layanan dalam kota Medan, Sumbar, dan Riau.", category: "Travel" },
  { q: "Bagaimana cara booking travel?", a: "Anda bisa langsung hubungi admin melalui halaman kontak atau klik link WhatsApp untuk konfirmasi kursi.", category: "Travel" },
  { q: "Berapa kapasitas penumpang per armada?", a: "Tergantung jenis armada. Avanza 5–6 penumpang, Innova 6–7 penumpang, HiAce 12–13 penumpang.", category: "Travel" },
  { q: "Apakah ada jadwal keberangkatan tetap?", a: "Jadwal menyesuaikan dengan jumlah pemesanan. Konfirmasi keberangkatan dikomunikasikan lewat admin WhatsApp.", category: "Travel" },
];

const enrichedFaq = faqPengiriman.map((f) => ({ ...f, category: "Pengiriman" }));
const allFaq = [...faqGeneral, ...enrichedFaq];

const categoryColors = {
  Travel: { bg: "bg-blue-500/15", text: "text-blue-300", border: "border-blue-500/30" },
  Pengiriman: { bg: "bg-emerald-500/15", text: "text-emerald-300", border: "border-emerald-500/30" },
};

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [openIndex, setOpenIndex] = useState(null);

  const categories = ["Semua", "Travel", "Pengiriman"];
  const filtered = activeCategory === "Semua" ? allFaq : allFaq.filter((f) => f.category === activeCategory);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  };

  return (
    <>
      <Seo
        title="FAQ Travel & Pengiriman | Keren Travel"
        description="Pertanyaan umum tentang travel antar kota, mudik, charter mobil, rental mobil, dan pengiriman barang Keren Travel Medan."
        canonical="https://keren-travel.vercel.app/faq"
        jsonLd={jsonLd}
      />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #07142B 0%, #0A2146 70%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(199,168,76,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,168,76,.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(199,168,76,.08) 0%, transparent 70%)" }} />

        <div className="container-page relative z-10">
          <p className="muted-label mb-4">Pusat Bantuan</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
            Pertanyaan yang<br />
            <span style={{ color: "#E7C46D" }}>Sering Ditanyakan</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mb-8 leading-relaxed">
            Semua jawaban seputar travel, mudik, charter mobil, rental, dan titip barang antar kota.
          </p>
          {/* Stats */}
          <div className="flex flex-wrap gap-6">
            {[{ val: allFaq.length, label: "Pertanyaan" }, { val: "2", label: "Kategori" }, { val: "24/7", label: "Admin Aktif" }].map((s) => (
              <div key={s.label}>
                <span className="text-2xl font-bold" style={{ color: "#E7C46D" }}>{s.val}</span>
                <span className="text-sm text-slate-400 ml-2">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ CONTENT ─────────────────────────────────────── */}
      <section className="container-page pb-16">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                activeCategory === cat
                  ? "border-[#E7C46D] bg-[#E7C46D]/15 text-[#E7C46D]"
                  : "border-white/15 bg-white/5 text-slate-300 hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 max-w-3xl">
          {filtered.map((item, i) => {
            const catStyle = categoryColors[item.category];
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className={`glass-card overflow-hidden transition-all duration-200 ${isOpen ? "border-[#E7C46D]/40" : "hover:border-white/20"}`}
              >
                <button
                  className="w-full flex items-start gap-4 p-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <div className={`shrink-0 px-2.5 py-0.5 rounded-full text-xs font-semibold ${catStyle?.bg} ${catStyle?.text} border ${catStyle?.border} mt-0.5`}>
                    {item.category}
                  </div>
                  <span className="flex-1 text-sm font-semibold text-white">{item.q}</span>
                  <svg
                    className={`shrink-0 w-4 h-4 text-slate-400 mt-0.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0">
                    <div className="h-px bg-white/10 mb-4" />
                    <p className="text-sm text-slate-300 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="container-page pb-14">
        <div className="glass-card-strong px-8 py-10 flex flex-col md:flex-row items-center gap-6 justify-between border border-[#E7C46D]/25">
          <div>
            <p className="muted-label mb-1">Belum terjawab?</p>
            <h2 className="text-xl font-bold text-white">Tanya langsung ke admin kami</h2>
            <p className="text-sm text-slate-400 mt-1">Admin aktif setiap hari, siap membantu dengan pertanyaan Anda.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link to="/kontak" className="btn-shine px-6 py-3 rounded-xl text-sm font-semibold" style={{ background: "linear-gradient(135deg, #E7C46D, #C9A84C)", color: "#07142B" }}>
              Hubungi Admin
            </Link>
            <Link to="/jadwal" className="px-6 py-3 rounded-xl text-sm font-semibold border border-white/30 text-white hover:bg-white/10 transition-all">
              Pesan Tiket
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
