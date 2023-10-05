import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    //URL takes 2 arguments, the url to be go and the base url
    //we can get the base url from request.url
    return NextResponse.redirect(new URL('/new-route', request.url))
}


export const config = {
    matcher: ['/dashboard']
}