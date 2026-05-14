import { useState } from "react";
import Seo from "../components/seo/Seo";
import { articlesData } from "../data/ArticlesData"; // Pastikan data artikel sudah tersedia di sini
import { Link } from "react-router-dom"; // Sesuaikan dengan router yang dipakai

// Jika belum punya data articles, ini contoh strukturnya:
// const articles = [
//   { slug: "tips-mudik-nyaman", category: "Mudik", readTime: "5 min", title: "...", excerpt: "...", date: "2024-12-01" },
// ];

const categoryColors = {
  Mudik: { bg: "bg-amber-500/15", text: "text-amber-300", dot: "bg-amber-400" },
  Travel: { bg: "bg-sky-500/15", text: "text-sky-300", dot: "bg-sky-400" },
  Pengiriman: { bg: "bg-emerald-500/15", text: "text-emerald-300", dot: "bg-emerald-400" },
  Tips: { bg: "bg-violet-500/15", text: "text-violet-300", dot: "bg-violet-400" },
};

function getCategoryStyle(category) {
  return categoryColors[category] || { bg: "bg-slate-500/15", text: "text-slate-300", dot: "bg-slate-400" };
}

export default function ArtikelPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const categories = ["Semua", ...new Set(articlesData.map((a) => a.category).filter(Boolean))];

  const filtered =
    activeCategory === "Semua"
      ? articlesData
      : articlesData.filter((a) => a.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <>
      <Seo
        title="Artikel Travel & Pengiriman | Keren Travel"
        description="Artikel ringan seputar mudik, travel antar kota, dan tips pengiriman barang antar kota."
      />

      <section className="container-page page-block">
        {/* Header */}
        <div className="relative mb-12">
          <p className="muted-label tracking-widest uppercase text-xs mb-2">Insight & Panduan</p>
          <h1 className="section-title text-4xl md:text-5xl font-bold text-white leading-tight">
            Artikel Keren Travel
          </h1>
          <p className="section-copy max-w-2xl mt-4 text-slate-400 leading-relaxed">
            Tips mudik, perjalanan antar kota, dan pengiriman barang agar lebih nyaman dan efisien.
          </p>

          {/* Decorative line */}
          <div className="mt-8 h-px w-full bg-gradient-to-r from-brand-500/50 via-slate-600/30 to-transparent" />
        </div>

        {/* Category Filter */}
        {categories.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => {
              const style = cat === "Semua" ? null : getCategoryStyle(cat);
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                    isActive
                      ? "bg-brand-500 text-white border-brand-500 shadow-lg shadow-brand-500/20"
                      : "bg-white/5 text-slate-400 border-slate-700/50 hover:bg-white/10 hover:text-slate-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        {filtered.length === 0 ? (
          <p className="text-slate-500 text-sm">Belum ada artikel di kategori ini.</p>
        ) : (
          <div className="space-y-10">
            {/* Featured Card (artikel pertama) */}
            {featured && (
              <Link
                to={`/artikel/${featured.slug || "#"}`}
                className="group block relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/40"
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    {featured.category && (
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryStyle(featured.category).bg} ${getCategoryStyle(featured.category).text}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${getCategoryStyle(featured.category).dot}`} />
                        {featured.category}
                      </span>
                    )}
                    <span className="text-xs text-slate-500">
                      {featured.readTime || "4 min baca"} · {featured.date || ""}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug group-hover:text-brand-200 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-slate-400 leading-relaxed max-w-3xl">{featured.excerpt}</p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 group-hover:gap-3 transition-all">
                    Baca selengkapnya
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Accent corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-500/10 to-transparent rounded-bl-full pointer-events-none" />
              </Link>
            )}

            {/* Grid artikel lainnya */}
            {rest.length > 0 && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((item) => {
                  const catStyle = item.category ? getCategoryStyle(item.category) : null;
                  return (
                    <Link
                      key={item.title}
                      to={`/artikel/${item.slug || "#"}`}
                      className="group block rounded-xl border border-white/8 bg-white/4 p-6 hover:bg-white/8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
                    >
                      {/* Category + readtime */}
                      <div className="flex items-center gap-2 mb-4">
                        {catStyle && item.category && (
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${catStyle.bg} ${catStyle.text}`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${catStyle.dot}`} />
                            {item.category}
                          </span>
                        )}
                        <span className="text-xs text-slate-600">{item.readTime || "3 min"}</span>
                      </div>

                      <h2 className="text-base font-semibold text-white leading-snug group-hover:text-brand-200 transition-colors">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-sm text-slate-400 leading-relaxed line-clamp-3">{item.excerpt}</p>

                      <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 group-hover:gap-2.5 transition-all">
                        Baca
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </section>
    </>
  );
}