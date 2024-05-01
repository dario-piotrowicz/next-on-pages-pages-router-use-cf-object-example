import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "experimental-edge";

export function middleware(request: NextRequest) {
  const { cf } = getRequestContext();
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-cf", JSON.stringify(cf ?? null));

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
