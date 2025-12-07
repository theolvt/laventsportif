import { stackServerApp } from "@/lib/stack";
import { NextResponse } from "next/server";

export async function middleware(request: Request) {
    const user = await stackServerApp.getUser();
    const url = new URL(request.url);

    if (!user && (url.pathname.startsWith('/dashboard') || url.pathname.startsWith('/advent'))) {
        return NextResponse.redirect(new URL(await stackServerApp.urls.signIn, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/advent/:path*'],
};
