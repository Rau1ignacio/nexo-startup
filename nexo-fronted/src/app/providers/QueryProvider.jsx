import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useMemo } from "react";

export function QueryProvider({ children }) {
  const client = useMemo(() => new QueryClient(), []);
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
