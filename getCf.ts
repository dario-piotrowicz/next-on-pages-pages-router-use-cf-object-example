import type { IncomingHttpHeaders } from "http";

export function getCf(headers: IncomingHttpHeaders): IncomingRequestCfProperties | null {
  const cfHeader = headers['x-cf'];

  if (!cfHeader) return null;

  if (Array.isArray(cfHeader)) return JSON.parse(cfHeader[0]);

  return JSON.parse(cfHeader);
}
