export function findRoadmapById(roadmaps, id) {
  return roadmaps.find((roadmap) => roadmap.id === id);
}

export function flattenSteps(phases) {
  return phases.flatMap((phase) => phase.steps.map((step) => ({ ...step, phaseId: phase.id })));
}
