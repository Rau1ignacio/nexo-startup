import { useMemo, useState } from "react";
import AppRouter from "./app/router/AppRouter.jsx";

export default function App() {
  const [theme] = useState("light");
  const wrapperClass = useMemo(
    () =>
      theme === "light"
        ? "min-h-screen bg-white text-slate-900"
        : "min-h-screen bg-slate-900 text-slate-50",
    [theme]
  );

  return (
    <div className={wrapperClass}>
      <AppRouter />
    </div>
  );
}
