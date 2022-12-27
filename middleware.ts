import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    console.log('global middle ware')
    if (request.nextUrl.pathname.startsWith('/chats')) {
        // This logic is only applied to /about
        console.log('chats middle ware')
    }
}