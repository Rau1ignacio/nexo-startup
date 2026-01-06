import { useMemo, useState } from "react";

export default function EntrepreneurMatches() {
  const [selected, setSelected] = useState(0);
  const providers = useMemo(
    () => [
      { name: "Estudio Andes", category: "Contabilidad" },
      { name: "Agencia Pixel", category: "Marketing" },
      { name: "LegalStart", category: "Legal" },
    ],
    []
  );

  return (
    <section className="min-h-screen bg-slate-900 text-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <header>
          <p className="text-sm uppercase tracking-[0.4em] text-blue-200">Matches</p>
          <h1 className="text-4xl font-black">Proveedores sugeridos para tu roadmap</h1>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {providers.map((provider, index) => (
            <button
              key={provider.name}
              className={`rounded-3xl border px-5 py-6 text-left ${
                selected === index ? "bg-white text-slate-900" : "bg-transparent border-white/40"
              }`}
              onClick={() => setSelected(index)}
            >
              <p className="text-sm uppercase tracking-widest text-blue-400">{provider.category}</p>
              <p className="text-xl font-semibold mt-1">{provider.name}</p>
            </button>
          ))}
        </div>

        <article className="rounded-3xl bg-white/10 p-8 min-h-[220px]">
          <p className="text-sm text-blue-200">Seleccionado</p>
          <h2 className="text-3xl font-bold">{providers[selected].name}</h2>
          <p className="mt-2 text-slate-200">Coordina una llamada o solicita una propuesta sin salir de la app.</p>
        </article>
      </div>
    </section>
  );
}
