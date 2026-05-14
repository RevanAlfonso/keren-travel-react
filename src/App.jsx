import Lenis from "lenis";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense, useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { routes } from "./router";
import { ScrollToTop } from "./utils/ScrollToTop";

export default function App() {
  const location = useLocation();
  const element = useRoutes(routes);

  useEffect(() => {
    const lenis = new Lenis({ duration: 0.8, smoothWheel: true });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div className="container-page py-16">Memuat halaman...</div>}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
          >
            {element}
          </motion.div>
        </AnimatePresence>
      </Suspense>
    </>
  );
}
