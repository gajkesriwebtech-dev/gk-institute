const isProduction = process.env.NODE_ENV === "production";

function getCookieDomain(): string | undefined {
  if (!isProduction) return undefined;

  const explicitDomain = process.env.AUTH_COOKIE_DOMAIN?.trim();
  if (explicitDomain) return explicitDomain;

  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (!appUrl) return undefined;

  try {
    const hostname = new URL(appUrl).hostname;
    const isLocalhost = hostname === "localhost" || hostname.endsWith(".localhost");
    const isIpv4 = /^\d{1,3}(\.\d{1,3}){3}$/.test(hostname);

    if (isLocalhost || isIpv4) return undefined;
    return hostname;
  } catch {
    return undefined;
  }
}

const cookieDomain = getCookieDomain();

export function getAuthCookieOptions(maxAge?: number): {
  httpOnly: true;
  secure: boolean;
  sameSite: "lax";
  path: "/";
  domain?: string;
  maxAge?: number;
} {
  return {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
    path: "/",
    ...(cookieDomain ? { domain: cookieDomain } : {}),
    ...(typeof maxAge === "number" ? { maxAge } : {})
  };
}
