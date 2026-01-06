import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/layout/Navbar.jsx";
import Footer from "../../components/layout/Footer.jsx";

export default function PublicLayout() {
  const [contentReady] = useState(true);
  const layoutClass = useMemo(
    () => "min-h-screen flex flex-col bg-white",
    []
  );

  return (
    <div className={layoutClass}>
      <Navbar />
      <main className="flex-grow w-full">
        {contentReady ? <Outlet /> : <div className="min-h-[50vh] flex items-center justify-center">Cargando pagina...</div>}
      </main>
      <Footer />
    </div>
  );
}
