import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import Seo from "../components/seo/Seo";
import { routeCards } from "../data/siteData";

const CHIPS = [
  { label: "Semua", value: "" },
  { label: "Travel Harian", value: "harian" },
  { label: "Mudik Keluarga", value: "mudik" },
  { label: "Titip Paket", value: "paket" },
];

// Warna aksen per rute — sesuaikan dengan routeCards jika perlu
const ACCENT_MAP = {
  "medan-padang": "#10b981",
  "medan-bukittinggi": "#8b5cf6",
  "medan-pekanbaru": "#10b981",
  "medan-dumai": "#f59e0b",
  "medan-duri": "#f97316",
  "medan-payakumbuh": "#8b5cf6",
};

function getAccent(to = "") {
  const key = to.replace(/^\//, "").split("/").pop();
  return ACCENT_MAP[key] ?? "#10b981";
}

export default function RutePage() {
  const [query, setQuery] = useState("");
  const [activeChip, setActiveChip] = useState("");

  const filteredRoutes = useMemo(() => {
    return routeCards.filter((item) => {
      const matchQuery = item.title.toLowerCase().includes(query.toLowerCase());
      const matchChip = activeChip ? item.tags?.includes(activeChip) : true;
      return matchQuery && matchChip;
    });
  }, [query, activeChip]);

  return (
    <>
      <Seo
        title="Rute Travel Medan ke Sumbar & Riau | Keren Travel"
        description="Daftar rute travel harian Keren Travel dari Medan ke berbagai kota di Sumbar dan Riau."
      />

      <PageHero
        eyebrow="Rute Perjalanan"
        title="Rute Travel Antar Kota"
        description="Pilih rute yang sesuai kebutuhan perjalanan keluarga, mudik, atau perjalanan kerja."
      />

      {/* Stats strip */}
      <div className="border-y border-white/10 bg-white/5">
        <div className="container-page grid grid-cols-3 divide-x divide-white/10 py-4">
          {[
            { value: "6+", label: "Kota Tujuan" },
            { value: "3×", label: "Jadwal Harian" },
            { value: "1,5", label: "Tahun Pengalaman" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-0.5 px-4 py-1">
              <span className="text-xl font-bold text-white">{s.value}</span>
              <span className="text-xs text-slate-400">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="container-page py-10 pb-14">
        {/* Search */}
        <div className="relative mb-4">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari rute, misal: Padang, Pekanbaru, Dumai…"
            className="w-full rounded-xl border border-white/20 bg-white/10 py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-400 focus:border-brand-100 transition"
          />
        </div>

        {/* Chips */}
        <div className="mb-7 flex flex-wrap gap-2">
          {CHIPS.map((c) => (
            <button
              key={c.value}
              onClick={() => setActiveChip(c.value)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium transition ${
                activeChip === c.value
                  ? "border-brand-100 bg-brand-100/15 text-brand-100"
                  : "border-white/15 bg-white/5 text-slate-300 hover:border-white/30"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filteredRoutes.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-3">
            {filteredRoutes.map((item) => {
              const accent = getAccent(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="glass-card group relative flex flex-col overflow-hidden p-0 transition hover:-translate-y-1 hover:border-white/20"
                >
                  {/* top accent */}
                  <div
                    className="h-[3px] w-full shrink-0"
                    style={{ background: accent }}
                  />

                  <div className="flex flex-1 flex-col p-5">
                    {/* route cities */}
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                      <span>Medan</span>
                      <div className="relative flex flex-1 items-center">
                        <div className="h-px flex-1 bg-white/20" />
                        <svg
                          className="absolute right-0 -mr-0.5"
                          width="6"
                          height="10"
                          viewBox="0 0 6 10"
                          fill="none"
                        >
                          <path
                            d="M1 1l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white/40"
                          />
                        </svg>
                      </div>
                      <span>{item.title.replace("Medan - ", "").replace("Medan – ", "")}</span>
                    </div>

                    <h2 className="text-base font-bold text-white">{item.title}</h2>
                    <p className="mt-1 text-sm text-slate-400">Estimasi {item.duration}</p>

                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/10">
                      <div className="flex gap-2">
                        {item.tags?.includes("harian") && (
                          <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-medium text-slate-300">
                            Harian
                          </span>
                        )}
                        {item.tags?.includes("mudik") && (
                          <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-medium text-slate-300">
                            Mudik
                          </span>
                        )}
                      </div>
                      <span
                        className="flex items-center gap-1 text-xs font-semibold transition group-hover:gap-2"
                        style={{ color: accent }}
                      >
                        Lihat detail
                        <svg
                          width="12"
                          height="12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="glass-card flex flex-col items-center gap-3 py-16 text-center">
            <svg
              className="text-slate-500"
              width="40"
              height="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-sm font-semibold text-white">Rute tidak ditemukan</p>
            <p className="text-xs text-slate-400">Coba cari dengan nama kota lain</p>
            <button
              onClick={() => { setQuery(""); setActiveChip(""); }}
              className="mt-1 rounded-full border border-white/20 px-4 py-1.5 text-xs text-slate-300 transition hover:border-white/40"
            >
              Reset pencarian
            </button>
          </div>
        )}

        <p className="mt-6 text-center text-xs text-slate-500">
          Tidak menemukan rute yang kamu cari?{" "}
          <Link to="/kontak" className="text-brand-100 hover:underline">
            Hubungi kami
          </Link>
        </p>
      </section>
    </>
  );
}