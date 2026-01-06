import { useMemo, useState } from "react";

export default function EntrepreneurDashboard() {
  const [view, setView] = useState("general");
  const panels = useMemo(
    () => ({ general: 72, marketing: 40, finanzas: 55 }),
    []
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <header>
          <p className="text-sm uppercase tracking-widest text-blue-500">Emprendedor</p>
          <h1 className="text-4xl font-black">Dashboard con el progreso del roadmap</h1>
        </header>

        <div className="flex gap-3">
          {Object.keys(panels).map((key) => (
            <button
              key={key}
              className={`flex-1 rounded-2xl border px-4 py-3 font-semibold ${
                view === key ? "bg-blue-600 text-white" : "bg-white"
              }`}
              onClick={() => setView(key)}
            >
              {key}
            </button>
          ))}
        </div>

        <article className="rounded-3xl bg-white p-8 shadow-md">
          <p className="text-sm text-gray-500">Progreso</p>
          <div className="mt-4 h-3 w-full bg-gray-200 rounded-full">
            <div className="h-full bg-blue-600 rounded-full" style={{ width: `${panels[view]}%` }}></div>
          </div>
          <p className="mt-4 text-3xl font-bold">{panels[view]}% completado</p>
        </article>
      </div>
    </section>
  );
}
