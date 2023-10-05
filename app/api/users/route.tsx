import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    //Fetch users form data base

    return NextResponse.json([
        {id: 1, name: 'Mosh'},
        {id: 2, name: 'Faysel'}
    ])
}