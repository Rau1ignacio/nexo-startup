export default function Section({ id, title, description, children }) {
  return (
    <section id={id} className="py-12">
      {title && <h2 className="text-3xl font-bold text-slate-900">{title}</h2>}
      {description && <p className="mt-2 text-gray-600">{description}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}
