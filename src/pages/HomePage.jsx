import { Link } from "react-router-dom";
import { ArrowUpRight, Clock3, MapPin, ShieldCheck, Timer, Zap } from "lucide-react";
import Seo from "../components/seo/Seo";
import { routeCards, serviceCards, trustStats } from "../data/siteData";

// ─── Inline styles (no extra CSS file needed) ───────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

  :root {
    --navy:  #07142B;
    --navy2: #0A2146;
    --navy3: #133062;
    --gold:  #C9A84C;
    --gold2: #E7C46D;
    --gold3: #F4D98A;
    --slate1:#E2E8F0;
    --slate2:#94A3B8;
    --slate3:#64748B;
    --border-gold: rgba(231,196,109,0.28);
    --card-bg: rgba(10,33,70,0.65);
  }

  body { font-family: 'DM Sans', sans-serif; background: var(--navy); color: #fff; }

  /* ── NAV ── */
  .kt-nav {
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.25rem 2.5rem;
    border-bottom: 1px solid var(--border-gold);
    position: sticky; top: 0; z-index: 100;
    backdrop-filter: blur(16px);
    background: rgba(7,20,43,0.88);
  }
  .kt-logo { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; letter-spacing: .02em; color: var(--gold2); text-decoration: none; }
  .kt-logo span { color: #fff; }
  .kt-nav-links { display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0; align-items: center; }
  .kt-nav-links a { color: var(--slate1); font-size: .875rem; text-decoration: none; letter-spacing: .03em; transition: color .2s; }
  .kt-nav-links a:hover { color: var(--gold2); }
  .kt-nav-cta {
    background: linear-gradient(135deg, var(--gold), var(--gold2));
    color: var(--navy) !important; font-weight: 500 !important;
    padding: .45rem 1.1rem; border-radius: 6px; font-size: .85rem;
  }

  /* ── HERO ── */
  .kt-hero {
    position: relative; min-height: 92vh;
    display: flex; flex-direction: column; justify-content: center;
    overflow: hidden; padding: 5rem 2.5rem 4rem;
  }
  .kt-hero-bg {
    position: absolute; inset: 0;
    background-image: linear-gradient(to right, rgba(7, 20, 43, 0.95) 45%, rgba(7, 20, 43, 0.65) 100%), url('/hero-bg.png');
    background-size: cover;
    background-position: center;
  }
  @media (max-width: 768px) {
    .kt-hero-bg {
      background-image: linear-gradient(to bottom, rgba(7, 20, 43, 0.96) 60%, rgba(7, 20, 43, 0.8) 100%), url('/hero-bg.png');
    }
  }
  .kt-hero-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(199,168,76,.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(199,168,76,.04) 1px, transparent 1px);
    background-size: 60px 60px;
  }
  .kt-hero-glow {
    position: absolute; top: -120px; right: -80px;
    width: 560px; height: 560px; border-radius: 50%;
    background: radial-gradient(circle, rgba(199,168,76,.1) 0%, transparent 70%);
    pointer-events: none;
  }
  .kt-hero-glow2 {
    position: absolute; bottom: -80px; left: -100px;
    width: 400px; height: 400px; border-radius: 50%;
    background: radial-gradient(circle, rgba(19,48,98,.5) 0%, transparent 70%);
    pointer-events: none;
  }
  .kt-hero-container {
    position: relative; z-index: 2;
    display: grid; grid-template-columns: 1.2fr 0.8fr;
    gap: 3rem; align-items: center;
    width: 100%; max-width: 1200px; margin: 0 auto;
  }
  @media (max-width: 1024px) {
    .kt-hero-container {
      grid-template-columns: 1fr;
    }
  }
  .kt-hero-content { position: relative; z-index: 2; max-width: 760px; }

  .kt-hero-tag {
    display: inline-flex; align-items: center; gap: .5rem;
    font-size: .72rem; font-weight: 500; letter-spacing: .14em; text-transform: uppercase;
    color: var(--gold2); border: 1px solid var(--border-gold);
    padding: .35rem .9rem; border-radius: 2rem; margin-bottom: 1.75rem;
    background: rgba(231,196,109,.07);
  }
  .kt-hero-tag::before {
    content: ''; width: 6px; height: 6px; border-radius: 50%;
    background: var(--gold2); display: inline-block; flex-shrink: 0;
  }

  .kt-h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.6rem, 5vw, 4.25rem);
    font-weight: 700; line-height: 1.12; color: #fff; margin-bottom: 1.5rem;
  }
  .kt-h1-accent { color: var(--gold2); }

  .kt-hero-sub {
    font-size: 1.05rem; font-weight: 300; color: var(--slate1);
    max-width: 560px; margin-bottom: 2.5rem; line-height: 1.75;
  }

  /* ── BUTTONS ── */
  .kt-btn-row { display: flex; flex-wrap: wrap; gap: .9rem; margin-bottom: 3rem; }
  .kt-btn {
    display: inline-flex; align-items: center; gap: .4rem;
    padding: .75rem 1.75rem; border-radius: 8px;
    font-size: .9rem; font-weight: 500; cursor: pointer;
    text-decoration: none; transition: all .22s; letter-spacing: .01em;
    font-family: 'DM Sans', sans-serif;
  }
  .kt-btn-gold {
    background: linear-gradient(135deg, var(--gold), var(--gold2));
    color: var(--navy); box-shadow: 0 0 24px rgba(199,168,76,.25);
    border: none;
  }
  .kt-btn-gold:hover { box-shadow: 0 0 36px rgba(199,168,76,.4); transform: translateY(-1px); }
  .kt-btn-outline {
    border: 1px solid var(--border-gold); color: var(--slate1);
    background: transparent;
  }
  .kt-btn-outline:hover { background: rgba(231,196,109,.08); border-color: var(--gold2); color: #fff; }
  .kt-btn-ghost {
    border: 1px solid rgba(255,255,255,.15); color: var(--slate2);
    background: transparent; font-size: .85rem;
  }
  .kt-btn-ghost:hover { border-color: rgba(255,255,255,.3); color: #fff; }

  /* ── CHIPS ── */
  .kt-chips { display: flex; flex-wrap: wrap; gap: .6rem; }
  .kt-chip {
    font-size: .72rem; font-weight: 400; color: var(--slate2);
    border: 1px solid rgba(255,255,255,.1);
    padding: .3rem .75rem; border-radius: 2rem; letter-spacing: .02em;
  }

  /* ── TRUST STRIP ── */
  .kt-trust {
    display: grid; grid-template-columns: repeat(3,1fr); gap: 1rem;
    margin-top: 4rem; border-top: 1px solid var(--border-gold); padding-top: 2.5rem;
  }
  .kt-trust-label {
    font-size: .68rem; font-weight: 500; text-transform: uppercase;
    letter-spacing: .12em; color: var(--gold2); margin-bottom: .3rem;
  }
  .kt-trust-value { font-size: .95rem; font-weight: 400; color: #fff; }

  /* ── DIVIDER ── */
  .kt-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border-gold), transparent);
    margin: 0 2.5rem;
  }

  /* ── SECTIONS ── */
  .kt-section { padding: 5rem 2.5rem; }
  .kt-section-eyebrow {
    font-size: .7rem; font-weight: 500; text-transform: uppercase;
    letter-spacing: .15em; color: var(--gold2); margin-bottom: .75rem;
  }
  .kt-section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.7rem, 3vw, 2.4rem);
    font-weight: 600; color: #fff; line-height: 1.2;
  }
  .kt-section-title-accent { color: var(--gold2); }

  /* ── SERVICES ── */
  .kt-services { background: rgba(10,33,70,.35); }
  .kt-services-grid {
    display: grid; grid-template-columns: 1.2fr 1fr;
    gap: 1.5rem; margin-top: 3rem;
  }
  .kt-card {
    border: 1px solid var(--border-gold); border-radius: 16px;
    padding: 2rem; background: rgba(10,33,70,.6);
    backdrop-filter: blur(10px); transition: all .25s;
  }
  .kt-card:hover { border-color: rgba(231,196,109,.5); background: rgba(10,33,70,.8); }
  .kt-card-eyebrow {
    font-size: .68rem; text-transform: uppercase; letter-spacing: .14em;
    color: var(--gold2); margin-bottom: 1.25rem;
  }
  .kt-card-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.45rem; font-weight: 600; color: #fff;
    margin-bottom: 1.5rem; line-height: 1.3;
  }
  .kt-service-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: .85rem; }
  .kt-service-item { display: flex; align-items: flex-start; gap: .75rem; font-size: .9rem; color: var(--slate1); }
  .kt-service-dot {
    width: 5px; height: 5px; border-radius: 50%; background: var(--gold2);
    flex-shrink: 0; margin-top: .6rem;
  }
  .kt-card-link {
    display: inline-flex; align-items: center; gap: .4rem;
    margin-top: 1.5rem; font-size: .82rem; font-weight: 500;
    color: var(--gold2); text-decoration: none; letter-spacing: .02em;
  }
  .kt-card-link:hover { opacity: .8; }

  .kt-why-list { display: flex; flex-direction: column; gap: 1.25rem; }
  .kt-why-item { display: flex; align-items: flex-start; gap: .9rem; }
  .kt-why-icon {
    width: 36px; height: 36px; border-radius: 8px;
    border: 1px solid var(--border-gold);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; color: var(--gold2);
  }
  .kt-why-label {
    font-size: .78rem; font-weight: 500; color: var(--gold2);
    text-transform: uppercase; letter-spacing: .1em; margin-bottom: .25rem;
  }
  .kt-why-text { font-size: .875rem; color: var(--slate1); line-height: 1.65; }

  /* ── ROUTES ── */
  .kt-routes-header {
    display: flex; align-items: baseline; justify-content: space-between;
    margin-bottom: 2rem;
  }
  .kt-see-all {
    font-size: .8rem; font-weight: 500; color: var(--gold2);
    text-decoration: none; letter-spacing: .03em;
  }
  .kt-see-all:hover { opacity: .8; }
  .kt-route-list { display: flex; flex-direction: column; gap: .9rem; }
  .kt-route-card {
    display: flex; align-items: center; justify-content: space-between;
    border: 1px solid var(--border-gold); border-radius: 12px;
    padding: 1.25rem 1.75rem; background: rgba(10,33,70,.45);
    backdrop-filter: blur(6px); cursor: pointer;
    transition: all .22s; text-decoration: none; color: inherit;
  }
  .kt-route-card:hover {
    border-color: rgba(231,196,109,.55);
    background: rgba(10,33,70,.75);
    transform: translateX(4px);
  }
  .kt-route-left { display: flex; align-items: center; gap: 1rem; }
  .kt-route-icon {
    width: 40px; height: 40px; border-radius: 8px;
    background: rgba(231,196,109,.08); border: 1px solid var(--border-gold);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; color: var(--gold2);
  }
  .kt-route-name { font-size: 1rem; font-weight: 500; color: #fff; margin-bottom: .2rem; }
  .kt-route-dur { font-size: .8rem; color: var(--slate2); }
  .kt-route-cta { font-size: .75rem; font-weight: 500; color: var(--gold2); letter-spacing: .04em; white-space: nowrap; }

  /* ── TESTIMONIALS ── */
  .kt-testi-bg { background: linear-gradient(180deg, rgba(10,33,70,.2) 0%, rgba(19,48,98,.4) 100%); }
  .kt-testi-grid {
    display: grid; grid-template-columns: 1.1fr 1fr;
    gap: 2rem; align-items: start; margin-top: 3rem;
  }
  .kt-testi-sub { font-size: .9rem; color: var(--slate2); line-height: 1.75; margin-top: 1rem; }
  .kt-testi-cards { display: flex; flex-direction: column; gap: 1rem; }
  .kt-testi-card {
    border: 1px solid var(--border-gold); border-radius: 12px;
    padding: 1.4rem; background: rgba(10,33,70,.55);
  }
  .kt-testi-stars { color: var(--gold2); font-size: .9rem; margin-bottom: .5rem; letter-spacing: 1px; }
  .kt-testi-quote { font-size: .875rem; color: var(--slate1); line-height: 1.7; font-style: italic; }
  .kt-testi-by {
    margin-top: .8rem; font-size: .73rem; font-weight: 500;
    color: var(--gold2); text-transform: uppercase; letter-spacing: .1em; font-style: normal;
  }

  /* ── CTA ── */
  .kt-cta-section { padding: 3.5rem 2.5rem 5rem; }
  .kt-cta-box {
    position: relative; overflow: hidden; border-radius: 24px;
    border: 1px solid var(--border-gold); padding: 3.5rem;
    background: linear-gradient(135deg, #0F2550 0%, #163370 50%, #1A3E7A 100%);
  }
  .kt-cta-glow {
    position: absolute; top: -60px; right: -60px;
    width: 280px; height: 280px; border-radius: 50%;
    background: radial-gradient(circle, rgba(199,168,76,.15) 0%, transparent 70%);
    pointer-events: none;
  }
  .kt-cta-content {
    position: relative; z-index: 2;
    display: grid; grid-template-columns: 1fr auto;
    align-items: center; gap: 2rem;
  }
  .kt-cta-eyebrow { color: rgba(249,233,182,.9) !important; }
  .kt-cta-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-weight: 600; line-height: 1.25; margin-top: .5rem;
    max-width: 520px; color: #fff;
  }
  .kt-cta-buttons { display: flex; flex-direction: column; gap: .75rem; flex-shrink: 0; }

  /* ── FOOTER ── */
  .kt-footer {
    padding: 1.5rem 2.5rem; border-top: 1px solid var(--border-gold);
    display: flex; align-items: center; justify-content: space-between;
  }
  .kt-footer-logo { font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 600; color: var(--gold2); }
  .kt-footer-copy { font-size: .75rem; color: var(--slate3); }

  /* ── FADE UP ANIMATION ── */
  @keyframes ktFadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .kt-anim-1 { animation: ktFadeUp .6s ease .05s both; }
  .kt-anim-2 { animation: ktFadeUp .6s ease .15s both; }
  .kt-anim-3 { animation: ktFadeUp .6s ease .25s both; }
  .kt-anim-4 { animation: ktFadeUp .6s ease .35s both; }
  .kt-anim-5 { animation: ktFadeUp .6s ease .42s both; }
  .kt-anim-6 { animation: ktFadeUp .6s ease .50s both; }

  /* ───────────────── RESPONSIVE ───────────────── */

@media (max-width: 1024px) {

  .kt-services-grid,
  .kt-testi-grid,
  .kt-cta-content {
    grid-template-columns: 1fr;
  }

  .kt-cta-buttons {
    flex-direction: row;
    flex-wrap: wrap;
  }

}

@media (max-width: 768px) {

  /* NAV */
  .kt-nav {
    padding: 1rem 1.2rem;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .kt-nav-links {
    flex-wrap: wrap;
    gap: 1rem;
  }

  /* HERO */
  .kt-hero {
    padding: 4rem 1.2rem 3rem;
    min-height: auto;
  }

  .kt-h1 {
    font-size: clamp(2.1rem, 10vw, 3rem);
    line-height: 1.15;
  }

  .kt-hero-sub {
    font-size: .95rem;
    line-height: 1.7;
  }

  .kt-btn-row {
    flex-direction: column;
    align-items: stretch;
  }

  .kt-btn {
    width: 100%;
    justify-content: center;
  }

  .kt-chips {
    gap: .5rem;
  }

  .kt-chip {
    font-size: .68rem;
  }

  /* TRUST */
  .kt-trust {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  /* SECTION */
  .kt-section,
  .kt-cta-section {
    padding: 4rem 1.2rem;
  }

  .kt-divider {
    margin: 0 1.2rem;
  }

  /* CARD */
  .kt-card {
    padding: 1.5rem;
  }

  /* ROUTES */
  .kt-route-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.2rem;
  }

  .kt-route-left {
    width: 100%;
  }

  /* TESTI */
  .kt-testi-grid {
    gap: 1.5rem;
  }

  /* CTA */
  .kt-cta-box {
    padding: 2rem 1.5rem;
  }

  .kt-cta-buttons {
    width: 100%;
    flex-direction: column;
  }

  .kt-cta-buttons .kt-btn {
    width: 100%;
  }

  /* FOOTER */
  .kt-footer {
    flex-direction: column;
    gap: .7rem;
    text-align: center;
    padding: 1.5rem 1rem;
  }

}

@media (max-width: 480px) {

  .kt-h1 {
    font-size: 2rem;
  }

  .kt-section-title,
  .kt-cta-title {
    font-size: 1.6rem;
  }

  .kt-card-title {
    font-size: 1.2rem;
  }

  .kt-route-name {
    font-size: .92rem;
  }

  .kt-route-dur,
  .kt-testi-quote,
  .kt-why-text {
    font-size: .82rem;
  }

}
`;

// ─── Static data fallback (jika siteData belum tersedia) ────────────────────
const defaultTrustStats = [
  { label: "Keberangkatan Harian", value: "Jadwal tetap setiap hari" },
  { label: "Pelanggan Aktif", value: "Ribuan perjalanan aman" },
  { label: "Titik Jemput Fleksibel", value: "Medan, Sumbar, Riau" },
];

const defaultServiceCards = [
  { title: "Travel Reguler", desc: "Keberangkatan harian terjadwal antar kota lintas provinsi." },
  { title: "Charter Keluarga", desc: "Sewa unit pribadi untuk kenyamanan maksimal." },
  { title: "Titip Barang", desc: "Kirim paket, dokumen, dan oleh-oleh via armada travel harian." },
  { title: "Antar Jemput", desc: "Penjemputan di titik yang sesuai rute keberangkatan." },
  { title: "Admin Responsif", desc: "Konfirmasi booking dan tracking pengiriman mudah." },
];

const defaultRouteCards = [
  { title: "Medan → Padang", duration: "12–14 jam", to: "/rute/medan-padang" },
  { title: "Medan → Pekanbaru", duration: "8–10 jam", to: "/rute/medan-pekanbaru" },
  { title: "Medan → Bukittinggi", duration: "13–15 jam", to: "/rute/medan-bukittinggi" },
  { title: "Medan → Dumai", duration: "7–9 jam", to: "/rute/medan-dumai" },
];

const testimonials = [
  { quote: "Travel-nya nyaman, admin cepat balas, barang titipan juga aman sampai. Sudah langganan sejak lama.", by: "Pelanggan Medan · Padang" },
  { quote: "Paling enak karena bisa sekalian kirim oleh-oleh ke keluarga. Praktis banget, nggak perlu jasa ekstra.", by: "Pelanggan Medan · Pekanbaru" },
  { quote: "Charter untuk lebaran kemarin sangat memuaskan. Sopir tepat waktu, mobil bersih dan nyaman.", by: "Pelanggan Charter Keluarga" },
];

// ─── Component ───────────────────────────────────────────────────────────────
const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": "https://keren-travel.vercel.app/#organization",
      "name": "Keren Travel",
      "url": "https://keren-travel.vercel.app",
      "logo": "https://keren-travel.vercel.app/logo.png",
      "image": "https://keren-travel.vercel.app/hero-bg.png",
      "description": "Layanan travel harian Medan ke Sumbar dan Riau, titip paket, pengiriman barang, antar dokumen, dan layanan travel nyaman terpercaya.",
      "telephone": "0851-2912-0303",
      "priceRange": "Rp 250.000 - Rp 450.000",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Medan",
        "addressRegion": "Sumatera Utara",
        "addressCountry": "ID"
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Medan" },
        { "@type": "AdministrativeArea", "name": "Sumatera Barat" },
        { "@type": "AdministrativeArea", "name": "Riau" }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://keren-travel.vercel.app/#website",
      "url": "https://keren-travel.vercel.app",
      "name": "Keren Travel",
      "description": "Travel Medan ke Sumatera Barat & Riau PP"
    }
  ]
};

export default function HomePage() {
  const stats    = trustStats    ?? defaultTrustStats;
  const services = serviceCards  ?? defaultServiceCards;
  const routes   = routeCards    ?? defaultRouteCards;

  return (
    <>
      {/* Inject scoped CSS */}
      <style>{css}</style>

      <Seo
        title="Keren Travel | Travel & Titip Barang Medan ke Sumbar/Riau"
        description="Travel harian Medan ke Sumbar dan Riau. Layanan travel nyaman sekaligus titip barang, paket, dokumen, dan oleh-oleh."
        canonical="https://keren-travel.vercel.app/"
        jsonLd={homeJsonLd}
      />

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="kt-hero">
        <div className="kt-hero-bg" />
        <div className="kt-hero-grid" />
        <div className="kt-hero-glow" />
        <div className="kt-hero-glow2" />

        <div className="kt-hero-container">
          <div className="kt-hero-content">
            <div className="kt-hero-tag kt-anim-1">
              Travel Harian Antar Kota · Titip Barang Terpercaya
            </div>

            <h1 className="kt-h1 kt-anim-2">
              Perjalanan Nyaman<br />
              dari <span className="kt-h1-accent">Medan</span> ke<br />
              Sumbar &amp; Riau
            </h1>

            <p className="kt-hero-sub kt-anim-3">
              Solusi harian untuk mudik, perjalanan keluarga, charter mobil, dan pengiriman paket — dalam satu layanan yang rapi dan terpercaya.
            </p>

            <div className="kt-btn-row kt-anim-4">
              <Link to="/jadwal" className="kt-btn kt-btn-gold btn-shine">⬦ Pesan Travel</Link>
              <Link to="/pengiriman-barang" className="kt-btn kt-btn-outline">Kirim Barang</Link>
              <Link to="/kontak" className="kt-btn kt-btn-ghost">Hubungi Admin →</Link>
            </div>

            <div className="kt-chips kt-anim-5">
              <span className="kt-chip">Medan ↔ Padang</span>
              <span className="kt-chip">Medan ↔ Pekanbaru</span>
              <span className="kt-chip">Antar Jemput</span>
              <span className="kt-chip">Titip Barang Harian</span>
            </div>

            {/* Trust strip */}
            <div className="kt-trust kt-anim-6">
              {stats.map((item) => (
                <div key={item.label}>
                  <p className="kt-trust-label">{item.label}</p>
                  <p className="kt-trust-value">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Teaser Card */}
          <div className="hidden lg:block kt-hero-teaser kt-anim-6 animate-float" style={{ minWidth: "320px" }}>
            <div className="glass-card-strong p-6 border border-[#E7C46D]/30 pulse-glow bg-gradient-to-b from-[#18366E]/90 to-[#0B1E3F]/95">
              <p className="muted-label text-xs tracking-wider">Cek Rute</p>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">Rute Terpopuler</h3>
              <div className="space-y-3">
                <Link to="/rute/travel-medan-padang" className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#E7C46D]/60 hover:bg-white/[0.08] transition-all text-decoration-none">
                  <div className="text-sm font-semibold text-white">Medan ↔ Padang</div>
                  <span className="text-xs text-[#E7C46D]">11-13 jam →</span>
                </Link>
                <Link to="/rute/travel-medan-pekanbaru" className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#E7C46D]/60 hover:bg-white/[0.08] transition-all text-decoration-none">
                  <div className="text-sm font-semibold text-white">Medan ↔ Pekanbaru</div>
                  <span className="text-xs text-[#E7C46D]">8-10 jam →</span>
                </Link>
                <Link to="/rute/travel-medan-bukittinggi" className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#E7C46D]/60 hover:bg-white/[0.08] transition-all text-decoration-none">
                  <div className="text-sm font-semibold text-white">Medan ↔ Bukittinggi</div>
                  <span className="text-xs text-[#E7C46D]">10-12 jam →</span>
                </Link>
              </div>
              <div className="mt-5 text-center">
                <Link to="/rute" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E7C46D] hover:underline">
                  Lihat Semua Rute
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="kt-divider" />

      {/* ── SERVICES ───────────────────────────────────────────── */}
      <section className="kt-section kt-services">
        <p className="kt-section-eyebrow">Layanan Inti</p>
        <h2 className="kt-section-title" style={{ maxWidth: 640 }}>
          Bukan sekadar travel —&nbsp;
          <span className="kt-section-title-accent">layanan mobilitas</span>
          &nbsp;antar kota yang lengkap
        </h2>

        <div className="kt-services-grid">
          {/* Service list card */}
          <article className="kt-card">
            <p className="kt-card-eyebrow">Apa yang kami tawarkan</p>
            <h3 className="kt-card-title">Semua kebutuhan perjalanan &amp; pengiriman barang Anda</h3>
            <ul className="kt-service-list">
              {services.map((item) => (
                <li key={item.title} className="kt-service-item">
                  <span className="kt-service-dot" />
                  <span>
                    <strong style={{ color: "#fff", fontWeight: 500 }}>{item.title}</strong>
                    {" "}— {item.desc}
                  </span>
                </li>
              ))}
            </ul>
            <Link to="/pengiriman-barang" className="kt-card-link">
              Lihat semua layanan pengiriman <ArrowUpRight size={14} />
            </Link>
          </article>

          {/* Why us card */}
          <article className="kt-card">
            <p className="kt-card-eyebrow">Kenapa pilih kami</p>
            <h3 className="kt-card-title">Keren Travel</h3>
            <div className="kt-why-list">
              <div className="kt-why-item">
                <div className="kt-why-icon"><ShieldCheck size={18} /></div>
                <div>
                  <p className="kt-why-label">Aman &amp; Terpercaya</p>
                  <p className="kt-why-text">Travel nyaman untuk keluarga dengan admin yang responsif dan armada terawat.</p>
                </div>
              </div>
              <div className="kt-why-item">
                <div className="kt-why-icon"><Zap size={18} /></div>
                <div>
                  <p className="kt-why-label">Cepat &amp; Terjadwal</p>
                  <p className="kt-why-text">Pengiriman paket cepat lewat jadwal keberangkatan harian tanpa delay.</p>
                </div>
              </div>
              <div className="kt-why-item">
                <div className="kt-why-icon"><Clock3 size={18} /></div>
                <div>
                  <p className="kt-why-label">Booking Simpel</p>
                  <p className="kt-why-text">Proses pesan tiket dan titip barang mudah — cocok untuk pemakaian harian.</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <div className="kt-divider" />

      {/* ── ROUTES ─────────────────────────────────────────────── */}
      <section className="kt-section">
        <div className="kt-routes-header">
          <div>
            <p className="kt-section-eyebrow">Destinasi</p>
            <h2 className="kt-section-title">
              Rute <span className="kt-section-title-accent">Populer</span>
            </h2>
          </div>
          <Link to="/rute" className="kt-see-all">Lihat semua rute →</Link>
        </div>

        <div className="kt-route-list">
          {routes.map((item) => (
            <Link key={item.to} to={item.to} className="kt-route-card">
              <div className="kt-route-left">
                <div className="kt-route-icon"><MapPin size={18} /></div>
                <div>
                  <p className="kt-route-name">{item.title}</p>
                  <p className="kt-route-dur">Estimasi perjalanan {item.duration}</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: ".6rem" }}>
                <span className="kt-route-cta">Cek jadwal &amp; titik jemput</span>
                <ArrowUpRight size={14} style={{ color: "var(--gold2)", opacity: .7 }} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="kt-divider" />

      {/* ── TESTIMONIALS ───────────────────────────────────────── */}
      <section className="kt-section kt-testi-bg">
        <div className="kt-testi-grid">
          <div>
            <p className="kt-section-eyebrow">Pengalaman Pelanggan</p>
            <h2 className="kt-section-title">
              Terlihat modern,<br />terasa <span className="kt-section-title-accent">dekat</span>
            </h2>
            <p className="kt-testi-sub">
              Keren Travel hadir dengan standar layanan yang rapi: dari booking travel, charter keluarga, hingga titip paket antar kota — dalam satu alur yang gampang dan bisa diandalkan setiap hari.
            </p>
          </div>
          <div className="kt-testi-cards">
            {testimonials.map((t, i) => (
              <article key={i} className="kt-testi-card">
                <div className="kt-testi-stars">★★★★★</div>
                <p className="kt-testi-quote">"{t.quote}"</p>
                <p className="kt-testi-by">— {t.by}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="kt-cta-section">
        <div className="kt-cta-box">
          <div className="kt-cta-glow" />
          <div className="kt-cta-content">
            <div>
              <p className="kt-section-eyebrow kt-cta-eyebrow">Siap Berangkat Hari Ini?</p>
              <h2 className="kt-cta-title">
                Pesan travel atau kirim barang sekarang —{" "}
                <span className="kt-section-title-accent">admin siap bantu cepat.</span>
              </h2>
            </div>
            <div className="kt-cta-buttons">
              <Link to="/jadwal" className="kt-btn kt-btn-gold btn-shine">Cek Jadwal</Link>
              <Link to="/kontak" className="kt-btn kt-btn-outline">Hubungi Admin</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Widget */}
      <a
        href="https://wa.me/6285129120303?text=Halo%20Keren%20Travel%2C%20saya%20ingin%20tanya%20jadwal%20dan%20pemesanan%20travel."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa pulse-glow animate-float"
        aria-label="Hubungi WhatsApp Admin"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      </a>

    </>
  );
}