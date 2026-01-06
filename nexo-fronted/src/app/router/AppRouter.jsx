import { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout.jsx";
import HomePage from "../../features/public/pages/HomePage.jsx";
import RoadmapsPage from "../../features/public/pages/RoadmapsPage.jsx";
import MarketplacePage from "../../features/public/pages/MarketplacePage.jsx";
import LoginPage from "../../features/auth/pages/LoginPage.jsx";
import RegisterPage from "../../features/auth/pages/RegisterPage.jsx";

export default function AppRouter() {
  const [isRouterReady] = useState(true);

  const routeConfig = useMemo(
    () => [
      { path: "/", element: <HomePage /> },
      { path: "/roadmaps", element: <RoadmapsPage /> },
      { path: "/marketplace", element: <MarketplacePage /> },
      { path: "/auth/login", element: <LoginPage /> },
      { path: "/auth/register", element: <RegisterPage /> },
    ],
    []
  );

  const notFoundMessage = useMemo(
    () => "Pagina no encontrada. Vuelve al inicio para seguir explorando NEXO.",
    []
  );

  if (!isRouterReady) {
    return <div className="min-h-screen flex items-center justify-center">Preparando rutas...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          {routeConfig.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>

        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
              <h1 className="text-5xl font-bold">404</h1>
              <p className="mt-4 text-gray-600 text-lg max-w-xl">{notFoundMessage}</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
