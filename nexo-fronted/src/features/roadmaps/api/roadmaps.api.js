import { mockRoadmaps, mockRoadmapDetail } from "../data/roadmaps.mock.js";

export async function fetchRoadmaps() {
  return Promise.resolve(mockRoadmaps);
}

export async function fetchRoadmapById(id) {
  if (id === mockRoadmapDetail.id) return Promise.resolve(mockRoadmapDetail);
  const fallback = mockRoadmaps.find((roadmap) => roadmap.id === id);
  return Promise.resolve(fallback ?? mockRoadmapDetail);
}
