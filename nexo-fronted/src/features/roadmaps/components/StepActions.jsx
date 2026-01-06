export default function StepActions({ actions = [] }) {
  if (actions.length === 0) return null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-semibold text-slate-800">Acciones</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
        {actions.map((action) => (
          <li key={action}>{action}</li>
        ))}
      </ul>
    </div>
  );
}
