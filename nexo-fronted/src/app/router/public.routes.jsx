import DiagnosisLandingPage from "../../features/diagnosis/pages/DiagnosisLandingPage.jsx";
import RoadmapsIndexPage from "../../features/roadmaps/pages/RoadmapsIndexPage.jsx";
import RoadmapDetailPage from "../../features/roadmaps/pages/RoadmapDetailPage.jsx";
import MarketplacePage from "../../features/marketplace/pages/MarketplacePage.jsx";
import LoginPage from "../../features/auth/pages/LoginPage.jsx";
import RegisterPage from "../../features/auth/pages/RegisterPage.jsx";
import { ROUTES } from "../config/routes.js";

export const publicRoutes = [
  { path: ROUTES.home, element: <DiagnosisLandingPage /> },
  { path: ROUTES.roadmaps, element: <RoadmapsIndexPage /> },
  { path: ROUTES.roadmapDetail(), element: <RoadmapDetailPage /> },
  { path: ROUTES.marketplace, element: <MarketplacePage /> },
  { path: ROUTES.login, element: <LoginPage /> },
  { path: ROUTES.register, element: <RegisterPage /> },
];
