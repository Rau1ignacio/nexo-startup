import { useMemo, useState } from "react";

export default function ProviderDiagnosis() {
  const [activeStep, setActiveStep] = useState("brief");
  const steps = useMemo(
    () => [
      { id: "brief", label: "Brief" },
      { id: "analisis", label: "Analisis" },
      { id: "propuesta", label: "Propuesta" },
    ],
    []
  );

  return (
    <section className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <header>
          <p className="text-sm uppercase tracking-wider text-blue-500">Proveedor</p>
          <h1 className="text-4xl font-black">Diagnostico compartido con el emprendedor</h1>
        </header>

        <div className="flex gap-4">
          {steps.map((step) => (
            <button
              key={step.id}
              className={`flex-1 rounded-2xl border px-4 py-3 font-semibold ${
                step.id === activeStep ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-700"
              }`}
              onClick={() => setActiveStep(step.id)}
            >
              {step.label}
            </button>
          ))}
        </div>

        <article className="rounded-3xl border bg-slate-50 p-6 min-h-[320px]">
          <p className="text-sm text-gray-500">Paso activo</p>
          <h2 className="text-2xl font-bold mt-2">{activeStep.toUpperCase()}</h2>
          <p className="mt-3 text-gray-600">
            Comparte hallazgos, tareas clave y adjunta archivos para mantener transparencia con el emprendedor.
          </p>
        </article>
      </div>
    </section>
  );
}
