import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, description, cta }) {
  return (
    <section className="container-page pb-10 pt-10 md:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.24 }}
        className="hero-canvas p-6 md:p-10"
      >
        <div className="relative grid items-end gap-8 md:grid-cols-[1fr_220px]">
          <div>
            {eyebrow ? <p className="text-xs uppercase tracking-[0.2em] text-brand-100">{eyebrow}</p> : null}
            <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h1>
            <p className="section-copy max-w-2xl">{description}</p>
            <div className="mt-7">{cta}</div>
          </div>
          <aside className="glass-card-strong p-4 md:p-5">
            <p className="muted-label">Layanan Harian</p>
            <p className="mt-2 text-sm text-slate-300">Medan ↔ Sumbar</p>
            <p className="mt-1 text-sm text-slate-300">Medan ↔ Riau</p>
            <div className="mt-4 soft-line pt-3">
              <p className="text-xs text-brand-100">Travel Nyaman</p>
              <p className="mt-1 text-xs text-brand-100">Pengiriman Aman</p>
            </div>
          </aside>
        </div>
      </motion.div>
    </section>
  );
}
