import { useParams, Link } from "react-router-dom";
import PageHero from "../../components/common/PageHero";
import PrimaryButton from "../../components/common/PrimaryButton";
import Seo from "../../components/seo/Seo";
import { routesData } from "../../data/routesData";

export default function TravelRouteDetailPage() {
  const { routeSlug } = useParams();
  
  // Find route data by slug
  const route = routesData.find((r) => r.slug === routeSlug);

  // If route is not found, render a clean 404 page
  if (!route) {
    return (
      <section className="container-page page-block text-center py-24">
        <p className="text-6xl mb-4">🗺️</p>
        <h1 className="text-2xl font-bold text-white mb-2">Rute Tidak Ditemukan</h1>
        <p className="text-slate-400 mb-8">Maaf, rute travel yang Anda cari tidak tersedia saat ini atau dipindahkan.</p>
        <Link to="/rute" className="inline-flex items-center gap-2 text-[#E7C46D] hover:underline font-medium">
          ← Kembali ke Semua Rute
        </Link>
      </section>
    );
  }

  // Build JSON-LD structured data for search engines
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://keren-travel.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Rute",
        "item": "https://keren-travel.vercel.app/rute"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": route.title,
        "item": `https://keren-travel.vercel.app/rute/${route.slug}`
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": route.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Keren Travel",
      "image": "https://keren-travel.vercel.app/logo.png",
      "telephone": "0851-2912-0303",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Medan",
        "addressRegion": "Sumatera Utara",
        "addressCountry": "ID"
      }
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": route.origin
      },
      {
        "@type": "AdministrativeArea",
        "name": route.destination
      }
    ],
    "description": route.description
  };

  const mergedJsonLd = [breadcrumbSchema, serviceSchema];

  return (
    <>
      <Seo
        title={route.seoTitle}
        description={route.seoDescription}
        canonical={`https://keren-travel.vercel.app/rute/${route.slug}`}
        jsonLd={mergedJsonLd}
      />

      <PageHero
        eyebrow="Rute Detail"
        title={route.title}
        description={route.description}
        cta={
          <div className="flex flex-wrap gap-3">
            <PrimaryButton to="/jadwal">Pesan Travel</PrimaryButton>
            <PrimaryButton to="/pengiriman-barang" variant="outline">
              Kirim Barang
            </PrimaryButton>
          </div>
        }
      />

      {/* Route Visual Strip */}
      <section className="border-y border-white/10 bg-white/5 py-6">
        <div className="container-page">
          <div className="flex items-center justify-center gap-4 text-sm font-medium">
            <span className="text-base font-semibold text-white">{route.origin}</span>
            <div className="flex flex-1 items-center gap-1" style={{ maxWidth: "320px" }}>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 via-white/30 to-white/10" />
              <span 
                className="rounded-full border px-3.5 py-1 text-xs font-semibold"
                style={{ 
                  borderColor: `${route.accent}40`, 
                  backgroundColor: `${route.accent}15`,
                  color: route.accent 
                }}
              >
                ± {route.duration}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 via-white/30 to-white/10" />
            </div>
            <span className="text-base font-semibold text-white">{route.destination}</span>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container-page py-12">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#E7C46D]">
          Keunggulan Rute
        </p>
        <h2 className="mb-8 text-2xl font-bold text-white md:text-3xl">
          Kenapa pilih Keren Travel untuk rute ini?
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {route.highlights.map((h) => (
            <article
              key={h.label}
              className="glass-card group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1"
            >
              {/* top accent line */}
              <div 
                className="absolute inset-x-0 top-0 h-0.5" 
                style={{ background: `linear-gradient(90deg, transparent, ${route.accent}, transparent)` }}
              />
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
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#E7C46D]">
          Jadwal Keberangkatan
        </p>
        <h2 className="mb-8 text-2xl font-bold text-white md:text-3xl">Jadwal Harian Reguler</h2>
        <div className="glass-card overflow-hidden p-0 border border-[#E7C46D]/15">
          <div className="hidden grid-cols-4 border-b border-white/10 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-slate-400 md:grid bg-white/5">
            <span>Sesi</span>
            <span>Berangkat</span>
            <span>Estimasi Tiba</span>
            <span>Ketersediaan</span>
          </div>
          {route.schedules.map((s, i) => (
            <div
              key={s.depart}
              className={`grid grid-cols-2 gap-y-1.5 border-b border-white/5 px-6 py-4.5 last:border-0 md:grid-cols-4 md:items-center ${
                i % 2 === 0 ? "bg-white/[0.02]" : ""
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
          * Jadwal keberangkatan di atas bersifat tentatif dan menyesuaikan dengan kondisi di jalan. Hubungi admin WhatsApp untuk konfirmasi tepatnya.
        </p>
      </section>

      {/* FAQ */}
      <section className="container-page pb-14">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#E7C46D]">
          FAQ Rute
        </p>
        <h2 className="mb-8 text-2xl font-bold text-white md:text-3xl">Pertanyaan Umum</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {route.faqs.map((f) => (
            <div key={f.q} className="glass-card-strong p-6 border border-[#E7C46D]/15">
              <p className="mb-2.5 text-base font-semibold text-white">{f.q}</p>
              <p className="text-sm leading-relaxed text-slate-300">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="container-page pb-14">
        <div className="glass-card-strong relative overflow-hidden px-8 py-12 text-center border border-[#E7C46D]/30">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/[0.02] via-transparent to-white/[0.02]" />
          <div 
            className="absolute inset-x-0 top-0 h-px" 
            style={{ background: `linear-gradient(90deg, transparent, ${route.accent}, transparent)` }}
          />
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#E7C46D]">
            Hubungi Kami Sekarang
          </p>
          <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
            Siap berangkat ke {route.destination}?
          </h2>
          <p className="mx-auto mb-8 max-w-md text-sm text-slate-300">
            Segera pesan kursi Anda dan konfirmasi alamat penjemputan via WhatsApp. Layanan respons cepat setiap hari.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <PrimaryButton to="/jadwal">Pesan Travel</PrimaryButton>
            <PrimaryButton to="/kontak" variant="outline">
              Hubungi Admin
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
