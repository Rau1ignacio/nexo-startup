import { useMemo, useState } from "react";
import AppRouter from "./app/router/AppRouter.jsx";
import { AuthProvider } from "./app/providers/AuthProvider.jsx";
import { ThemeProvider } from "./app/providers/ThemeProvider.jsx";
import { QueryProvider } from "./app/providers/QueryProvider.jsx";

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
    <ThemeProvider>
      <AuthProvider>
        <QueryProvider>
          <div className={wrapperClass}>
            <AppRouter />
          </div>
        </QueryProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
