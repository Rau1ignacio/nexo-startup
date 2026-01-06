import { useEffect, useState } from "react";
import { fetchRoadmaps } from "../api/roadmaps.api.js";

export function useRoadmaps() {
  const [roadmaps, setRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRoadmaps().then((data) => {
      setRoadmaps(data);
      setLoading(false);
    });
  }, []);

  return { roadmaps, loading };
}
