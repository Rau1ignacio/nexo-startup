export const ROUTES = {
  home: "/",
  roadmaps: "/roadmaps",
  roadmapDetail: (id = ":id") => `/roadmaps/${id}`,
  marketplace: "/marketplace",
  login: "/auth/login",
  register: "/auth/register",
  entrepreneurDashboard: "/app/entrepreneur/dashboard",
  entrepreneurDiagnosis: "/app/entrepreneur/diagnosis",
  providerDashboard: "/app/provider/dashboard",
  providerMatches: "/app/provider/matches",
  adminRoadmaps: "/admin/roadmaps",
  adminSteps: "/admin/steps",
};
