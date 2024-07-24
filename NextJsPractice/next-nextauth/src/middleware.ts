import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { auth } from "@/services/AuthService";

const protectedRoutes = [
  '/dashboard',
  '/profile',
];
const publicRoutes = ['/', '/login'];

export default async function middleware(request: NextRequest) {
  const session = await auth();

  const isProtectedRoute = protectedRoutes.some((prefix) =>
    request.nextUrl.pathname.startsWith(prefix)
  );

  if (!session && isProtectedRoute) {
    const absoluteURL = new URL('/', request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  if (session && publicRoutes.includes(request.nextUrl.pathname)) {
    const absoluteURL = new URL('/backends', request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}