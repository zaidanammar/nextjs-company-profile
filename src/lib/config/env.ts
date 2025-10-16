function getEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`Missing environment variable: ${key}`);
  // biome-ignore lint/style/useTemplate: any
  return value.endsWith("/") ? value : value + "/";
}

export const ENV = {
  API_URL: getEnvVar("NEXT_PUBLIC_API_URL"),
};
