import { useMemo, useState } from "react";

export default function ProviderMatches() {
  const [status, setStatus] = useState("pendiente");
  const matches = useMemo(
    () => ({
      pendiente: ["Emprendedor A", "Emprendedor B"],
      activos: ["Emprendedor C"],
    }),
    []
  );

  return (
    <section className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <header>
          <p className="text-sm uppercase tracking-widest text-blue-500">Matches</p>
          <h1 className="text-4xl font-black">Oportunidades recientes</h1>
        </header>

        <div className="flex gap-4">
          {Object.keys(matches).map((key) => (
            <button
              key={key}
              className={`flex-1 rounded-2xl border px-4 py-3 font-semibold ${
                status === key ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-700"
              }`}
              onClick={() => setStatus(key)}
            >
              {key}
            </button>
          ))}
        </div>

        <ul className="space-y-3">
          {matches[status].map((name) => (
            <li key={name} className="rounded-2xl border px-4 py-4 bg-slate-50">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
