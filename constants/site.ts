/**
 * Single source of truth for the production site URL.
 * Used wherever absolute URLs are required (metadata, canonical links, etc.)
 */
export const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const SITE_NAME = "GK WebTech AI Institute";

export const SITE_DESCRIPTION =
    "Industry-focused training programs with real-world projects and internship opportunities.";
