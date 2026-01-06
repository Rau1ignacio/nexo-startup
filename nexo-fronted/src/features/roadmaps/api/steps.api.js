import { mockRoadmapDetail } from "../data/roadmaps.mock.js";

export async function fetchStepsByRoadmap(id) {
  if (id !== mockRoadmapDetail.id) return Promise.resolve([]);
  return Promise.resolve(mockRoadmapDetail.phases.flatMap((phase) => phase.steps));
}
