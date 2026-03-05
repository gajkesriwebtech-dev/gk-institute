import { apiFetch } from "@/lib/api-client";

export interface HealthResponse {
  success: boolean;
  service: string;
  timestamp: string;
}

export async function fetchBackendHealth(): Promise<HealthResponse> {
  const response = await apiFetch("/api/health", {
    method: "GET",
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Backend health check failed");
  }

  return response.json() as Promise<HealthResponse>;
}
