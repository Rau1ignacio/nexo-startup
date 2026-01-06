import { Outlet } from "react-router-dom";
import Navbar from "../../components/layout/Navbar.jsx";
import Footer from "../../components/layout/Footer.jsx";

export default function ProviderLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
