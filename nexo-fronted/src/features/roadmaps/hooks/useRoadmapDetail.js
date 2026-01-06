import { useEffect, useState } from "react";
import { fetchRoadmapById } from "../api/roadmaps.api.js";

export function useRoadmapDetail(roadmapId) {
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!roadmapId) return;
    setLoading(true);
    fetchRoadmapById(roadmapId).then((data) => {
      setRoadmap(data);
      setLoading(false);
    });
  }, [roadmapId]);

  return { roadmap, loading };
}
