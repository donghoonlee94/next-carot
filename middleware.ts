import { NextRequest, NextResponse, userAgent } from 'next/server'

export function middleware(req: NextRequest) {
    const { isBot } = userAgent(req);
    const { origin } = req.nextUrl;
    if (isBot) {
        return new Response("Plz don't be a bot. Be human.", { status: 403 });
    }

    if (!req.url.includes("/api")) {
        if (!req.url.includes("/enter") && !req?.cookies?.carrotsession) {
            const url = req.nextUrl.clone()
            url.pathname = '/enter'
            return NextResponse.redirect(`${url}`)
        }
    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|favicon.ico).*)',
    ],
}