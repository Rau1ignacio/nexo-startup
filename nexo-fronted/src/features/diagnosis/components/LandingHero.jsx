import { useMemo, useState } from "react";

export default function LandingHero() {
  const [ctaHovered, setCtaHovered] = useState(false);
  const highlights = useMemo(
    () => [
      "Diagnosticos dinamicos",
      "Roadmaps listos para ejecutar",
      "Proveedores verificados",
    ],
    []
  );

  return (
    <section className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center space-y-8">
        <p className="text-sm uppercase tracking-[0.4em] text-blue-300">Nexo</p>
        <h1 className="text-4xl md:text-6xl font-black">
          Plataforma integral para emprender con foco y acompanamiento real.
        </h1>
        <p className="text-lg text-slate-200">
          Diagnostica, prioriza y conecta con expertos sin salir de un solo dashboard.
        </p>

        <button
          className={`px-10 py-4 rounded-full font-semibold transition ${
            ctaHovered ? "bg-white text-slate-900" : "bg-blue-500 text-white"
          }`}
          onMouseEnter={() => setCtaHovered(true)}
          onMouseLeave={() => setCtaHovered(false)}
        >
          Explorar producto
        </button>

        <ul className="grid gap-4 md:grid-cols-3">
          {highlights.map((feature) => (
            <li key={feature} className="rounded-3xl border border-white/20 px-4 py-6 text-sm">{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
