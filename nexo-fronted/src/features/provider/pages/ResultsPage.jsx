import { useMemo, useState } from "react";

export default function ProviderResults() {
  const [selected, setSelected] = useState("conversion");
  const metrics = useMemo(
    () => ({ conversion: "64%", satisfaccion: "4.8/5", referidos: "12" }),
    []
  );

  return (
    <section className="min-h-screen bg-slate-900 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <header>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Resultados</p>
          <h1 className="text-4xl font-black">Impacto generado con los clientes NEXO</h1>
        </header>

        <div className="flex gap-4">
          {Object.keys(metrics).map((key) => (
            <button
              key={key}
              className={`flex-1 rounded-full border px-4 py-3 font-semibold ${
                key === selected ? "bg-white text-slate-900" : "bg-transparent border-white/40"
              }`}
              onClick={() => setSelected(key)}
            >
              {key}
            </button>
          ))}
        </div>

        <article className="rounded-3xl bg-white/10 p-8 min-h-[220px] flex flex-col justify-center gap-4">
          <p className="text-sm uppercase tracking-[0.4em]">{selected}</p>
          <p className="text-5xl font-black">{metrics[selected]}</p>
          <p className="text-slate-200">Actualiza tus resultados para destacarte frente a nuevos matches.</p>
        </article>
      </div>
    </section>
  );
}
