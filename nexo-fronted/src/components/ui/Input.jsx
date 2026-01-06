export default function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 ${className}`}
      {...props}
    />
  );
}
