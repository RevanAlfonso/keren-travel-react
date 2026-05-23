import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const navLinks = [
  ["Rute", "/rute"],
  ["Charter", "/charter"],
  ["Rental Mobil", "/rental-mobil"],
  ["Pengiriman", "/pengiriman-barang"],
  ["Jadwal", "/jadwal"],
  ["FAQ", "/faq"],
  ["Kontak", "/kontak"],
  ["Artikel", "/artikel"],
];

export default function MainLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="kt-nav">
        <Link to="/" className="kt-logo">
          Keren <span>Travel</span>
        </Link>
        <button className="kt-mobile-toggle" onClick={() => setOpen((v) => !v)} aria-label="menu">
          <span className="sr-only">menu</span>
          <Menu size={18} />
        </button>
        <nav className="kt-nav-links-wrap">
          <ul className="kt-nav-links">
            {navLinks.map(([label, path]) => (
              <li key={path}>
                <NavLink to={path} className="kt-nav-link">
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/jadwal" className="kt-nav-cta">
                Pesan Sekarang
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {open ? (
        <nav className="kt-mobile-nav">
          {navLinks.map(([label, path]) => (
            <NavLink key={path} to={path} onClick={() => setOpen(false)} className="kt-mobile-link">
              {label}
            </NavLink>
          ))}
          <NavLink to="/jadwal" onClick={() => setOpen(false)} className="kt-mobile-cta">
            Pesan Sekarang
          </NavLink>
        </nav>
      ) : null}
      <main>
        <Outlet />
      </main>
      <footer className="kt-footer">
        <span className="kt-footer-logo">Keren Travel</span>
        <span className="kt-footer-copy">© 2025 Keren Travel · Medan, Sumatera Utara</span>
      </footer>
    </div>
  );
}
