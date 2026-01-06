import AdminRoadmapsPage from "../../features/admin/pages/AdminRoadmapsPage.jsx";
import AdminStepReviewPage from "../../features/admin/pages/AdminStepReviewPage.jsx";
import { ROUTES } from "../config/routes.js";
import { ROLES } from "../config/roles.js";

export const adminRoutes = [
  { path: ROUTES.adminRoadmaps, element: <AdminRoadmapsPage />, roles: [ROLES.ADMIN] },
  { path: ROUTES.adminSteps, element: <AdminStepReviewPage />, roles: [ROLES.ADMIN] },
];
