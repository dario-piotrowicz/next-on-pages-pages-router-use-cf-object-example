export function getCf(cookies: string): IncomingRequestCfProperties | null {
  const xCf =
    // Note: it might be worth to do this using a proper cookies parsing utility/package
    cookies
      .split(";")
      .map((c) => c.trim().split("="))
      .map(([key, value]) => (key === "x-cf" ? value : null))
      .filter(Boolean)
      .find(Boolean) ?? null;

  if (!xCf) return null;

  const decodedXCf = decodeURIComponent(xCf);
  return JSON.parse(decodedXCf);
}
