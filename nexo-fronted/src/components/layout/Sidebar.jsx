export default function Sidebar({ title, children }) {
  return (
    <aside className="w-full max-w-xs rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {title && <h3 className="text-lg font-semibold text-slate-900">{title}</h3>}
      <div className="mt-4 space-y-3 text-sm text-gray-600">{children}</div>
    </aside>
  );
}
