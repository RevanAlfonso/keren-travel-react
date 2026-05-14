import { useParams, Link } from "react-router-dom"; // Sesuaikan router
import Seo from "../components/seo/Seo";
import { articlesData } from "../data/ArticlesData";

// ============================================================
// DATA ARTIKEL — Pindahkan ke siteData.js kalau sudah banyak
// ============================================================


// Komponen render konten artikel
function ArticleBody({ content }) {
  return (
    <div className="prose-custom space-y-5">
      {content.map((block, i) => {
        if (block.type === "intro") {
          return (
            <p key={i} className="text-lg text-slate-300 leading-relaxed font-medium border-l-2 border-brand-400 pl-4">
              {block.text}
            </p>
          );
        }
        if (block.type === "heading") {
          return (
            <h2 key={i} className="text-xl font-bold text-white mt-8 mb-2">
              {block.text}
            </h2>
          );
        }
        if (block.type === "paragraph") {
          return (
            <p key={i} className="text-slate-400 leading-relaxed">
              {block.text}
            </p>
          );
        }
        if (block.type === "tip") {
          return (
            <div key={i} className="flex gap-3 rounded-xl bg-brand-500/10 border border-brand-500/20 p-4">
              <span className="text-brand-400 mt-0.5 shrink-0">💡</span>
              <p className="text-sm text-brand-100 leading-relaxed">{block.text}</p>
            </div>
          );
        }
        if (block.type === "closing") {
          return (
            <p key={i} className="text-slate-300 italic border-t border-white/10 pt-6 mt-8">
              {block.text}
            </p>
          );
        }
        return null;
      })}
    </div>
  );
}

const categoryColors = {
  Mudik: { bg: "bg-amber-500/15", text: "text-amber-300", dot: "bg-amber-400" },
  Travel: { bg: "bg-sky-500/15", text: "text-sky-300", dot: "bg-sky-400" },
  Pengiriman: { bg: "bg-emerald-500/15", text: "text-emerald-300", dot: "bg-emerald-400" },
  Tips: { bg: "bg-violet-500/15", text: "text-violet-300", dot: "bg-violet-400" },
};

function getCategoryStyle(category) {
  return categoryColors[category] || { bg: "bg-slate-500/15", text: "text-slate-300", dot: "bg-slate-400" };
}

export default function ArtikelDetailPage() {
  const { slug } = useParams();
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    return (
      <section className="container-page page-block text-center py-24">
        <p className="text-6xl mb-4">🗺️</p>
        <h1 className="text-2xl font-bold text-white mb-2">Artikel tidak ditemukan</h1>
        <p className="text-slate-400 mb-8">Mungkin artikelnya sudah dipindah atau URL-nya salah.</p>
        <Link to="/artikel" className="inline-flex items-center gap-2 text-brand-300 hover:text-brand-200 font-medium">
          ← Kembali ke Artikel
        </Link>
      </section>
    );
  }

  const catStyle = getCategoryStyle(article.category);
  const related = articlesData.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 2);

  return (
    <>
      <Seo title={`${article.title} | Keren Travel`} description={article.excerpt} />

      <article className="container-page page-block max-w-3xl mx-auto">
        {/* Back */}
        <Link
          to="/artikel"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Semua Artikel
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            {article.category && (
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${catStyle.bg} ${catStyle.text}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${catStyle.dot}`} />
                {article.category}
              </span>
            )}
            <span className="text-xs text-slate-500">{article.readTime} baca · {article.date}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">{article.title}</h1>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">{article.excerpt}</p>

          <div className="mt-8 h-px w-full bg-gradient-to-r from-brand-500/40 via-slate-700/30 to-transparent" />
        </header>

        {/* Konten */}
        <ArticleBody content={article.content} />

        {/* CTA */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-white font-semibold text-lg mb-2">Butuh Layanan Travel atau Pengiriman?</p>
          <p className="text-slate-400 text-sm mb-6">Keren Travel siap membantu perjalanan dan pengiriman barangmu dengan aman dan nyaman.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/pesan"
              className="px-6 py-2.5 rounded-full bg-brand-500 text-white font-semibold text-sm hover:bg-brand-400 transition-colors"
            >
              Pesan Sekarang
            </Link>
            <Link
              to="/hubungi"
              className="px-6 py-2.5 rounded-full border border-white/15 text-slate-300 font-semibold text-sm hover:bg-white/8 transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="mt-14">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-5">Artikel Terkait</p>
            <div className="grid gap-4 md:grid-cols-2">
              {related.map((item) => {
                const relStyle = getCategoryStyle(item.category);
                return (
                  <Link
                    key={item.slug}
                    to={`/artikel/${item.slug}`}
                    className="group block rounded-xl border border-white/8 bg-white/4 p-5 hover:bg-white/8 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3 ${relStyle.bg} ${relStyle.text}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${relStyle.dot}`} />
                      {item.category}
                    </span>
                    <h3 className="text-sm font-semibold text-white group-hover:text-brand-200 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-500">{item.readTime} baca</p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </article>
    </>
  );
}