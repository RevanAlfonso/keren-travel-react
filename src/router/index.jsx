import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";

const HomePage = lazy(() => import("../pages/HomePage"));
const RutePage = lazy(() => import("../pages/RutePage"));
const TravelRouteDetailPage = lazy(() => import("../pages/routes/TravelRouteDetailPage"));
const CharterPage = lazy(() => import("../pages/CharterPage"));
const RentalMobilPage = lazy(() => import("../pages/RentalMobilPage"));
const PengirimanBarangPage = lazy(() => import("../pages/PengirimanBarangPage"));
const JadwalPage = lazy(() => import("../pages/JadwalPage"));
const FaqPage = lazy(() => import("../pages/FaqPage"));
const TentangPage = lazy(() => import("../pages/TentangPage"));
const KontakPage = lazy(() => import("../pages/KontakPage"));
const ArtikelPage = lazy(() => import("../pages/ArtikelPage"));

/* TAMBAHAN */
const ArtikelDetailPage = lazy(() =>
  import("../pages/ArtikelDetailPage")
);

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },

      { path: "rute", element: <RutePage /> },
      { path: "rute/:routeSlug", element: <TravelRouteDetailPage /> },

      { path: "charter", element: <CharterPage /> },
      { path: "rental-mobil", element: <RentalMobilPage /> },
      { path: "pengiriman-barang", element: <PengirimanBarangPage /> },
      { path: "jadwal", element: <JadwalPage /> },
      { path: "faq", element: <FaqPage /> },
      { path: "tentang", element: <TentangPage /> },
      { path: "kontak", element: <KontakPage /> },

      /* LIST ARTIKEL */
      { path: "artikel", element: <ArtikelPage /> },

      /* DETAIL ARTIKEL */
      { path: "artikel/:slug", element: <ArtikelDetailPage /> }
    ]
  }
];