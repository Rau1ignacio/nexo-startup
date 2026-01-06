import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="border-b border-slate-800 px-6 py-4 text-lg font-semibold">Panel Admin</header>
      <main className="px-6 py-10">
        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-800 p-6 shadow-xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
