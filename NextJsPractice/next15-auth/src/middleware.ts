import { auth } from "@/auth"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export default async function middleware(req: NextRequest) {
  const session = await auth();

  console.log("Session:", session?.user?.name);
  console.log("Request URL:", req.url);

  const excludePages = [
    '/login',
    '/logout',
    '/api/auth/signin',
    '/api/auth/callback/github'
];

  if (!session?.user && !excludePages.some(page => req.nextUrl.pathname.startsWith(page))) {
    console.log("User not authenticated, redirecting to sign-in page.");
    const signInUrl = new URL("/login", req.url)
    signInUrl.searchParams.set("callbackUrl", req.url) // return after login
    return NextResponse.redirect(signInUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
