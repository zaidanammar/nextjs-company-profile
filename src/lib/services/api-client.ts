import { ENV } from "@/lib/config/env";

export type ApiClientOptions = RequestInit & {
  useBaseUrl?: boolean;
  revalidate?: number;
  cacheMode?: RequestCache;
};

/**
 * A powerful, type-safe API client for Next.js
 * - Works on both server & client
 * - Auto-prefixes base URL
 * - Handles ISR caching
 */
export async function apiClient<T>(
  endpoint: string,
  options: ApiClientOptions = {},
): Promise<T> {
  const {
    useBaseUrl = true,
    revalidate,
    cacheMode,
    headers,
    ...fetchOptions
  } = options;

  const baseUrl = useBaseUrl ? ENV.API_URL : "";
  const url = `${baseUrl}${endpoint}`;

  const nextConfig = revalidate
    ? { next: { revalidate } }
    : { cache: cacheMode ?? "no-store" };

  const res = await fetch(url, {
    ...fetchOptions,
    ...nextConfig,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });

  if (!res.ok) {
    const errorText = await res.text().catch(() => "");
    console.error(`[API ERROR] ${url}`, res.status, errorText);
    throw new Error(`API request failed (${res.status}): ${url}`);
  }

  let json: unknown = null;
  try {
    json = await res.json();
  } catch (err) {
    console.error(`[API PARSE ERROR] ${url}`, err);
    throw new Error(`Invalid JSON response from ${url}`);
  }

  if (
    json &&
    typeof json === "object" &&
    "data" in json &&
    // biome-ignore lint/suspicious/noExplicitAny: true
    (json as any).data !== undefined
  ) {
    return (json as { data: T }).data;
  }

  return json as T;
}
