import { useMemo, useState } from "react";
import PageHero from "../components/common/PageHero";
import PrimaryButton from "../components/common/PrimaryButton";
import Seo from "../components/seo/Seo";

// ============================================================
// Ganti nomor WA admin di sini (format internasional, tanpa +)
// ============================================================
const WA_NUMBER = "6285129120303";

const schedules = [
  { route: "Medan – Padang", departure: "Disesuaikan", duration: "±12 jam" },
  { route: "Medan – Bukittinggi", departure: "Disesuaikan", duration: "±13 jam" },
  { route: "Medan – Pariaman", departure: "Disesuaikan", duration: "±8 jam" },
  { route: "Medan – Payakumbuh", departure: "Disesuaikan", duration: "±8 jam" },
  { route: "Medan – Duri", departure: "Disesuaikan", duration: "±8 jam" },
  { route: "Medan – Dumai", departure: "Disesuaikan", duration: "±8 jam" },
  { route: "Medan – Pekanbaru", departure: "Disesuaikan", duration: "±8 jam" },
];

const today = new Date().toISOString().split("T")[0];

export default function JadwalPage() {
  const [query, setQuery] = useState("");
  const [selectedRoute, setSelectedRoute] = useState(null);

  const [form, setForm] = useState({
    nama: "",
    noHp: "",
    jumlah: "1",
    tanggal: today,
    alamat: "",
  });

  const filteredSchedules = useMemo(
    () =>
      schedules.filter((s) =>
        s.route.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  function handleFormChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSelectRoute(schedule) {
    setSelectedRoute(schedule);
    // scroll halus ke form booking
    document.getElementById("booking-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function handleBooking(e) {
    e.preventDefault();

    if (!selectedRoute) {
      alert("Silakan pilih rute terlebih dahulu.");
      return;
    }

    const tgl = new Date(form.tanggal).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const msg =
      `Halo Keren Travel, saya ingin memesan tiket travel.\n\n` +
      `🚌 *Rute:* ${selectedRoute.route}\n` +
      `🕐 *Keberangkatan:* ${selectedRoute.departure}\n` +
      `📅 *Tanggal:* ${tgl}\n` +
      `👤 *Nama:* ${form.nama}\n` +
      `📱 *No. WA:* ${form.noHp}\n` +
      `🪑 *Jumlah penumpang:* ${form.jumlah} orang\n` +
      `📍 *Penjemputan:* ${form.alamat}\n\n` +
      `Mohon konfirmasi ketersediaan kursi. Terima kasih!`;

    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  }

  return (
    <>
      <Seo
        title="Jadwal Travel Medan ke Sumbar/Riau | Keren Travel"
        description="Cek jadwal keberangkatan harian travel Keren Travel untuk rute Medan ke Sumbar dan Riau."
      />

      <PageHero
        eyebrow="Jadwal Keberangkatan"
        title="Travel Medan · Sumbar · Riau"
        description="Jadwal tersedia setiap hari. Pesan kursi & konfirmasi titik penjemputan langsung via WhatsApp admin kami."
        cta={
          <div className="flex flex-wrap gap-3">
            <PrimaryButton to="#booking-form">Pesan Sekarang</PrimaryButton>
            <PrimaryButton to="/kontak" variant="outline">
              Hubungi Admin
            </PrimaryButton>
          </div>
        }
      />

      <section className="container-page pb-14 space-y-8">
        {/* ── Info chips ─────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2">
          <span className="chip">🗓 Berangkat Setiap Hari</span>
          <span className="chip">🪑 Konfirmasi Seat via Admin</span>
          <span className="chip">📦 Layanan Titip Paket</span>
        </div>

        {/* ── Jadwal ─────────────────────────────────────────── */}
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Pilih Rute
          </p>

          {/* Search */}
          <div className="relative mb-3">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
            </span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari rute, misal: Pekanbaru"
              className="w-full rounded-xl border border-white/20 bg-white/10 py-3 pl-9 pr-4 text-sm text-white outline-none placeholder:text-slate-400 focus:border-brand-100"
            />
          </div>

          {/* Cards */}
          <div className="grid gap-3">
            {filteredSchedules.length === 0 && (
              <p className="py-6 text-center text-sm text-slate-400">
                Rute tidak ditemukan.
              </p>
            )}
            {filteredSchedules.map((item) => {
              const isSelected = selectedRoute?.route === item.route;
              return (
                <button
                  key={item.route}
                  type="button"
                  onClick={() => handleSelectRoute(item)}
                  className={[
                    "glass-card flex items-center gap-4 p-4 text-left transition-all",
                    isSelected
                      ? "ring-2 ring-brand-100"
                      : "hover:bg-white/5",
                  ].join(" ")}
                >
                  {/* Icon */}
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100/20 text-brand-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                    </svg>
                  </span>

                  <div className="flex-1">
                    <h2 className="font-semibold text-white">{item.route}</h2>
                    <p className="mt-0.5 text-sm text-slate-300">
                      Berangkat {item.departure} · {item.duration}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-300">
                      Setiap hari
                    </span>
                    {isSelected && (
                      <span className="text-xs font-semibold text-brand-100">
                        ✓ Dipilih
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Booking Form ───────────────────────────────────── */}
        <div id="booking-form" className="scroll-mt-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Form Pemesanan
          </p>

          <div className="glass-card p-5">
            {/* Header */}
            <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414A1 1 0 0 1 19 9.414V19a2 2 0 0 1-2 2z" />
                </svg>
              </span>
              <div>
                <p className="font-semibold text-white">Pesan Tiket Travel</p>
                <p className="text-xs text-slate-400">
                  Isi form · kirim ke WhatsApp · admin konfirmasi
                </p>
              </div>
            </div>

            <form onSubmit={handleBooking} className="space-y-4">
              {/* Rute terpilih (read-only display) */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Rute Terpilih
                </label>
                <div
                  className={[
                    "flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm",
                    selectedRoute
                      ? "border-brand-100/40 bg-brand-100/10 text-brand-100"
                      : "border-white/10 bg-white/5 text-slate-400",
                  ].join(" ")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-1.447-.894L15 9m0 8V9" />
                  </svg>
                  {selectedRoute
                    ? `${selectedRoute.route} · ${selectedRoute.departure}`
                    : "Pilih rute di atas terlebih dahulu"}
                </div>
              </div>

              {/* Nama */}
              <div>
                <label htmlFor="nama" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Nama Lengkap
                </label>
                <input
                  id="nama"
                  name="nama"
                  type="text"
                  required
                  value={form.nama}
                  onChange={handleFormChange}
                  placeholder="Nama sesuai KTP"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-400 focus:border-brand-100"
                />
              </div>

              {/* No HP + Jumlah */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="noHp" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    No. WhatsApp
                  </label>
                  <input
                    id="noHp"
                    name="noHp"
                    type="tel"
                    required
                    value={form.noHp}
                    onChange={handleFormChange}
                    placeholder="08xxxxxxxxxx"
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-400 focus:border-brand-100"
                  />
                </div>
                <div>
                  <label htmlFor="jumlah" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Penumpang
                  </label>
                  <select
                    id="jumlah"
                    name="jumlah"
                    value={form.jumlah}
                    onChange={handleFormChange}
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white outline-none focus:border-brand-100"
                  >
                    {["1", "2", "3", "4"].map((n) => (
                      <option key={n} value={n} className="bg-slate-800">
                        {n} orang
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Tanggal */}
              <div>
                <label htmlFor="tanggal" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Tanggal Keberangkatan
                </label>
                <input
                  id="tanggal"
                  name="tanggal"
                  type="date"
                  required
                  min={today}
                  value={form.tanggal}
                  onChange={handleFormChange}
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white outline-none focus:border-brand-100"
                />
              </div>

              {/* Alamat penjemputan */}
              <div>
                <label htmlFor="alamat" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Alamat Penjemputan
                </label>
                <input
                  id="alamat"
                  name="alamat"
                  type="text"
                  required
                  value={form.alamat}
                  onChange={handleFormChange}
                  placeholder="Nama jalan / patokan lokasi"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-400 focus:border-brand-100"
                />
              </div>

              {/* Tombol WA */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-semibold text-white transition-all hover:bg-[#20ba5a] active:scale-[0.98]"
              >
                {/* WhatsApp icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                Pesan via WhatsApp
              </button>

              <p className="text-center text-xs text-slate-500">
                Pemesanan dikonfirmasi langsung oleh admin · Seat tersedia selama belum penuh
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}