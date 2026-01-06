const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  outline: "border border-slate-300 text-slate-800 hover:bg-slate-50",
  ghost: "text-slate-700 hover:bg-slate-100",
};

export default function Button({ children, as: Component = "button", variant = "primary", className = "", ...props }) {
  return (
    <Component
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
