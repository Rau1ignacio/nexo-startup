import { useMemo, useState } from "react";

export default function ProviderDashboard() {
  const [range, setRange] = useState("week");
  const metrics = useMemo(
    () => ({
      week: { matches: 6, proposals: 4, revenue: 12 },
      month: { matches: 18, proposals: 12, revenue: 40 },
    }),
    []
  );

  const data = metrics[range];

  return (
    <section className="min-h-screen bg-slate-100 px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase text-blue-500">Proveedor</p>
            <h1 className="text-4xl font-black">Panel de actividades</h1>
          </div>
          <div className="flex gap-3">
            <button
              className={`px-4 py-2 rounded-xl ${range === "week" ? "bg-blue-600 text-white" : "bg-white"}`}
              onClick={() => setRange("week")}
            >
              Semana
            </button>
            <button
              className={`px-4 py-2 rounded-xl ${range === "month" ? "bg-blue-600 text-white" : "bg-white"}`}
              onClick={() => setRange("month")}
            >
              Mes
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Metric title="Matches" value={data.matches} suffix="activos" />
          <Metric title="Propuestas" value={data.proposals} suffix="enviadas" />
          <Metric title="Revenue" value={`$${data.revenue}k`} suffix="estimado" />
        </div>
      </div>
    </section>
  );
}

function Metric({ title, value, suffix }) {
  return (
    <article className="p-6 rounded-3xl bg-white shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
      <p className="text-gray-500">{suffix}</p>
    </article>
  );
}
