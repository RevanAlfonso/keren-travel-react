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
    background: linear-gradient(135deg, #07142B 0%, #0A2146 45%, #0D2C5E 100%);
  }
  .kt-hero-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(199,168,76,.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(199,168,76,.06) 1px, transparent 1px);
    background-size: 60px 60px;
  }
  .kt-hero-glow {
    position: absolute; top: -120px; right: -80px;
    width: 560px; height: 560px; border-radius: 50%;
    background: radial-gradient(circle, rgba(199,168,76,.12) 0%, transparent 70%);
    pointer-events: none;
  }
  .kt-hero-glow2 {
    position: absolute; bottom: -80px; left: -100px;
    width: 400px; height: 400px; border-radius: 50%;
    background: radial-gradient(circle, rgba(19,48,98,.7) 0%, transparent 70%);
    pointer-events: none;
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
      />

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="kt-hero">
        <div className="kt-hero-bg" />
        <div className="kt-hero-grid" />
        <div className="kt-hero-glow" />
        <div className="kt-hero-glow2" />

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
            <Link to="/jadwal" className="kt-btn kt-btn-gold">⬦ Pesan Travel</Link>
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
              <Link to="/jadwal" className="kt-btn kt-btn-gold">Cek Jadwal</Link>
              <Link to="/kontak" className="kt-btn kt-btn-outline">Hubungi Admin</Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}