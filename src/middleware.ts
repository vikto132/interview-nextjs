import { authMiddleware } from "@clerk/nextjs";
import { NextResponse, type NextRequest } from 'next/server';

const BLOCKED_COUNTRY = 'JP'

export default authMiddleware({
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

export function middleware(req: NextRequest) {
  const country = req.geo?.country ?? 'VN';

  if (country === BLOCKED_COUNTRY) {
    return new Response('Blocked for legal reasons', { status: 451 })
  }
  return NextResponse.next();
}