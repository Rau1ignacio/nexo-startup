import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./public.routes.jsx";
import { entrepreneurRoutes, providerRoutes } from "./app.routes.jsx";
import { adminRoutes } from "./admin.routes.jsx";
import PublicLayout from "../layouts/PublicLayout.jsx";
import AppLayout from "../layouts/AppLayout.jsx";
import ProviderLayout from "../layouts/ProviderLayout.jsx";
import AdminLayout from "../layouts/AdminLayout.jsx";
import RoleGuard from "../providers/RoleGuard.jsx";

function renderRoutes(routes) {
  return routes.map(({ path, element, roles }) => (
    <Route
      key={path}
      path={path}
      element={roles ? <RoleGuard allow={roles}>{element}</RoleGuard> : element}
    />
  ));
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>{renderRoutes(publicRoutes)}</Route>
        <Route element={<AppLayout />}>{renderRoutes(entrepreneurRoutes)}</Route>
        <Route element={<ProviderLayout />}>{renderRoutes(providerRoutes)}</Route>
        <Route element={<AdminLayout />}>{renderRoutes(adminRoutes)}</Route>
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
              <h1 className="text-5xl font-bold">404</h1>
              <p className="mt-4 text-gray-600 text-lg max-w-xl">
                Pagina no encontrada. Vuelve al inicio para seguir explorando NEXO.
              </p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
