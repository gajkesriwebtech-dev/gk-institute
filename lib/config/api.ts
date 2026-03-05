export const API_BASE_URL = "";

export const buildApiUrl = (path: string): string =>
  path.startsWith("/") ? path : `/${path}`;
