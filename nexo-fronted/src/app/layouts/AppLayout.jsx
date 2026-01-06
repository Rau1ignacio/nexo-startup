import { Outlet } from "react-router-dom";
import Navbar from "../../components/layout/Navbar.jsx";
import Footer from "../../components/layout/Footer.jsx";
import Sidebar from "../../components/layout/Sidebar.jsx";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="mx-auto flex max-w-6xl gap-8 px-4 py-10">
        <Sidebar title="Panel">
          <p>Resumen</p>
          <p>Notificaciones</p>
        </Sidebar>
        <main className="flex-1 rounded-3xl bg-white p-6 shadow">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
