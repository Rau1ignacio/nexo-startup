import EntrepreneurDashboardPage from "../../features/entrepreneur/pages/DashboardPage.jsx";
import EntrepreneurDiagnosisPage from "../../features/entrepreneur/pages/DiagnosisPage.jsx";
import EntrepreneurMatchesPage from "../../features/entrepreneur/pages/MatchesPage.jsx";
import EntrepreneurResultsPage from "../../features/entrepreneur/pages/ResultsPage.jsx";
import ProviderDashboardPage from "../../features/provider/pages/DashboardPage.jsx";
import ProviderDiagnosisPage from "../../features/provider/pages/DiagnosisPage.jsx";
import ProviderMatchesPage from "../../features/provider/pages/MatchesPage.jsx";
import ProviderResultsPage from "../../features/provider/pages/ResultsPage.jsx";
import { ROUTES } from "../config/routes.js";
import { ROLES } from "../config/roles.js";

export const entrepreneurRoutes = [
  { path: ROUTES.entrepreneurDashboard, element: <EntrepreneurDashboardPage />, roles: [ROLES.ENTREPRENEUR] },
  { path: ROUTES.entrepreneurDiagnosis, element: <EntrepreneurDiagnosisPage />, roles: [ROLES.ENTREPRENEUR] },
  { path: `${ROUTES.entrepreneurDiagnosis}/matches`, element: <EntrepreneurMatchesPage />, roles: [ROLES.ENTREPRENEUR] },
  { path: `${ROUTES.entrepreneurDiagnosis}/results`, element: <EntrepreneurResultsPage />, roles: [ROLES.ENTREPRENEUR] },
];

export const providerRoutes = [
  { path: ROUTES.providerDashboard, element: <ProviderDashboardPage />, roles: [ROLES.PROVIDER] },
  { path: `${ROUTES.providerDashboard}/diagnosis`, element: <ProviderDiagnosisPage />, roles: [ROLES.PROVIDER] },
  { path: ROUTES.providerMatches, element: <ProviderMatchesPage />, roles: [ROLES.PROVIDER] },
  { path: `${ROUTES.providerMatches}/results`, element: <ProviderResultsPage />, roles: [ROLES.PROVIDER] },
];
