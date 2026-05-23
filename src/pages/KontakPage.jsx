import { Link } from "react-router-dom";
import Seo from "../components/seo/Seo";

const WA_ADMIN1 = "6282374204544";
const WA_ADMIN2 = "6285129120303";

const contacts = [
  {
    icon: "📱",
    label: "WhatsApp Admin 1",
    value: "0823-7240-4544",
    accent: "#25D366",
    action: () => window.open(`https://wa.me/${WA_ADMIN1}?text=${encodeURIComponent("Halo Keren Travel, saya ingin tanya informasi jadwal dan pemesanan travel.")}`, "_blank"),
    cta: "Chat Sekarang",
  },
  {
    icon: "📱",
    label: "WhatsApp Admin 2",
    value: "0851-2912-0303",
    accent: "#25D366",
    action: () => window.open(`https://wa.me/${WA_ADMIN2}?text=${encodeURIComponent("Halo Keren Travel, saya ingin tanya informasi jadwal dan pemesanan travel.")}`, "_blank"),
    cta: "Chat Sekarang",
  },
  {
    icon: "🕐",
    label: "Jam Operasional",
    value: "07.00 – 22.00 WIB",
    accent: "#E7C46D",
    sub: "Setiap hari, termasuk hari libur",
  },
  {
    icon: "📍",
    label: "Area Layanan",
    value: "Medan, Sumbar, Riau",
    accent: "#8b5cf6",
    sub: "Antar jemput tersedia di seluruh kota",
  },
];

const quickLinks = [
  { label: "Cek Jadwal & Pesan", to: "/jadwal", icon: "🗓️" },
  { label: "Lihat Semua Rute", to: "/rute", icon: "🗺️" },
  { label: "Kirim Barang", to: "/pengiriman-barang", icon: "📦" },
  { label: "Charter Mobil", to: "/charter", icon: "🚗" },
  { label: "Rental Mobil", to: "/rental-mobil", icon: "🔑" },
  { label: "FAQ", to: "/faq", icon: "❓" },
];

export default function KontakPage() {
  return (
    <>
      <Seo
        title="Kontak Keren Travel | Hubungi Admin via WhatsApp"
        description="Hubungi admin Keren Travel untuk pemesanan travel, kirim barang, cek jadwal, charter, atau rental mobil. Admin aktif setiap hari."
        canonical="https://keren-travel.vercel.app/kontak"
      />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #07142B 0%, #0A2146 60%, #0D2C5E 100%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(199,168,76,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,168,76,.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(37,211,102,.1) 0%, transparent 70%)" }} />
        <div className="container-page relative z-10 text-center md:text-left">
          <p className="muted-label mb-4">Hubungi Kami</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
            Kami Siap Membantu<br />
            <span style={{ color: "#E7C46D" }}>Perjalanan Anda</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mb-8 leading-relaxed md:mx-0 mx-auto">
            Hubungi admin Keren Travel langsung via WhatsApp untuk pemesanan, pertanyaan, atau konfirmasi jadwal. Respons cepat setiap hari.
          </p>
        </div>
      </section>

      {/* ── CONTACTS ────────────────────────────────────────── */}
      <section className="container-page pb-16">
        <div className="grid gap-5 md:grid-cols-2">
          {contacts.map((c) => (
            <div key={c.label} className="glass-card-strong p-6 border flex flex-col gap-4" style={{ borderColor: `${c.accent}25` }}>
              <div className="flex items-center gap-3">
                <div className="text-3xl">{c.icon}</div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">{c.label}</p>
                  <p className="text-xl font-bold text-white mt-0.5">{c.value}</p>
                  {c.sub && <p className="text-xs text-slate-400 mt-0.5">{c.sub}</p>}
                </div>
              </div>
              {c.action && (
                <button
                  onClick={c.action}
                  className="w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:opacity-90"
                  style={{ background: c.accent, color: "white" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                  {c.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── QUICK LINKS ─────────────────────────────────────── */}
      <section className="container-page pb-14">
        <p className="muted-label mb-2">Navigasi Cepat</p>
        <h2 className="text-2xl font-bold text-white mb-8">Langsung ke Layanan</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {quickLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="glass-card flex items-center gap-4 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E7C46D]/40"
            >
              <span className="text-2xl">{l.icon}</span>
              <span className="text-sm font-semibold text-white">{l.label}</span>
              <svg className="ml-auto w-4 h-4 text-slate-500 group-hover:text-[#E7C46D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
