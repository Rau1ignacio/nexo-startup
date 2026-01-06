import { useMemo, useState } from "react";

export default function EntrepreneurResults() {
  const [kpiIndex, setKpiIndex] = useState(0);
  const kpis = useMemo(
    () => [
      { label: "Ventas", value: "+32%" },
      { label: "Clientes", value: "+18" },
      { label: "Retencion", value: "+6 ptos" },
    ],
    []
  );

  return (
    <section className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        <header>
          <p className="text-sm uppercase tracking-widest text-blue-500">Resultados</p>
          <h1 className="text-4xl font-black">Impacto despues de ejecutar el roadmap</h1>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {kpis.map((kpi, index) => (
            <button
              key={kpi.label}
              className={`rounded-3xl border px-5 py-6 text-left ${
                kpiIndex === index ? "bg-blue-600 text-white" : "bg-slate-50"
              }`}
              onClick={() => setKpiIndex(index)}
            >
              <p className="text-sm text-gray-500">{kpi.label}</p>
              <p className="text-3xl font-bold">{kpi.value}</p>
            </button>
          ))}
        </div>

        <article className="rounded-3xl border px-6 py-8 bg-slate-50">
          <p className="text-sm text-gray-500">Historia destacada</p>
          <p className="mt-2 text-lg">
            Implementar las tareas del roadmap genero {kpis[kpiIndex].value} en {kpis[kpiIndex].label.toLowerCase()}.
          </p>
        </article>
      </div>
    </section>
  );
}
