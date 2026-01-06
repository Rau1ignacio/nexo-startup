export default function RoadmapCard({ title, description, onSelect }) {
  return (
    <button
      className="w-full rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-600"
      onClick={onSelect}
    >
      <p className="text-xs uppercase tracking-widest text-blue-500">Roadmap</p>
      <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </button>
  );
}
