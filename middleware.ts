import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'experimental-edge';

export function middleware(request: NextRequest) {
  const { cf } = getRequestContext();
  const response = NextResponse.next()
  response.cookies.set('x-cf-country', cf.country ?? '');
  return response;
}
