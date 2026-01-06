import { StrictMode, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./app/router/AppRouter.jsx";
import "./index.css";

function RootApp() {
  const [isReady] = useState(true);
  const shellClass = useMemo(
    () => "min-h-screen w-full bg-white text-slate-900 antialiased",
    []
  );

  if (!isReady) {
    return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  }

  return (
    <div className={shellClass}>
      <AppRouter />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootApp />
  </StrictMode>
);
