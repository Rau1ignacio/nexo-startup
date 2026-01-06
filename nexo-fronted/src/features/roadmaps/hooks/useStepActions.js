import { useMemo } from "react";

export function useStepActions(step) {
  return useMemo(() => step?.actions ?? [], [step]);
}
