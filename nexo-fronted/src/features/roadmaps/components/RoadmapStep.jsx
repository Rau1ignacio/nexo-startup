export default function RoadmapStep({ step, children }) {
  return (
    <article className="rounded-2xl border border-white bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-slate-500">Paso {step.order}</p>
          <h3 className="text-xl font-semibold">{step.title}</h3>
        </div>
        <span className="text-sm font-semibold text-blue-600">{step.impact}</span>
      </div>
      <p className="mt-2 text-gray-600">{step.description}</p>
      {children}
    </article>
  );
}
