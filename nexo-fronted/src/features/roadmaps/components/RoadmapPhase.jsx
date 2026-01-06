export default function RoadmapPhase({ title, description, children }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
      <p className="text-sm uppercase tracking-widest text-blue-500">Fase</p>
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
      <div className="mt-6 space-y-4">{children}</div>
    </section>
  );
}
