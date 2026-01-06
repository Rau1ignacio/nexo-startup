import { useMemo, useState } from "react";

export default function RoadmapsIndexPage() {
  const [query, setQuery] = useState("");
  const [highlighted, setHighlighted] = useState(null);

  const roadmaps = useMemo(
    () => [
      { id: "ecommerce", title: "Ecommerce", desc: "De idea a ventas online." },
      { id: "restaurante", title: "Restaurante", desc: "Operacion, permisos y marketing local." },
      { id: "servicios", title: "Servicios profesionales", desc: "Oferta, pricing y captacion." },
      { id: "negocio-fisico", title: "Negocio fisico", desc: "Ubicacion, flujo y fidelizacion." },
      { id: "saas", title: "Startup SaaS", desc: "Validacion, producto y crecimiento." },
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return roadmaps;
    return roadmaps.filter((roadmap) => roadmap.title.toLowerCase().includes(q) || roadmap.desc.toLowerCase().includes(q));
  }, [query, roadmaps]);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-wider text-blue-500 font-semibold">Roadmaps tipo roadmap.sh</p>
            <h1 className="text-4xl font-black mt-2">Selecciona el camino para tu negocio</h1>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Cada ruta contiene hitos, estimaciones y recursos recomendados para avanzar sin perder foco.
            </p>
          </div>
          <div className="flex gap-3">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar: ecommerce, saas, restaurante..."
              className="w-full lg:w-80 border rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              className="px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold"
              onClick={() => setQuery("")}
            >
              Limpiar
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {filtered.map((roadmap) => (
            <button
              key={roadmap.id}
              onClick={() => setHighlighted(roadmap.id)}
              className={`rounded-3xl border px-6 py-6 text-left transition shadow-sm hover:-translate-y-1 ${
                highlighted === roadmap.id
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-slate-800 border-slate-200"
              }`}
            >
              <p className="text-sm uppercase tracking-widest">{roadmap.id}</p>
              <h3 className="text-2xl font-semibold mt-2">{roadmap.title}</h3>
              <p className="mt-3 text-base">{roadmap.desc}</p>
            </button>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-slate-900 text-white p-10 min-h-[280px]">
          {highlighted ? (
            <div>
              <p className="text-sm uppercase tracking-widest text-blue-200">Roadmap activo</p>
              <h3 className="text-3xl font-bold mt-3">{highlighted.toUpperCase()}</h3>
              <p className="mt-4 text-lg text-slate-100">
                Personaliza hitos, agrega tareas y comparte con tu equipo desde el panel NEXO.
              </p>
            </div>
          ) : (
            <div>
              <h3 className="text-2xl font-semibold">Selecciona un roadmap</h3>
              <p className="mt-3 text-slate-200">Haz clic en una tarjeta para visualizar los hitos principales.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
