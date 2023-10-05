import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    return NextResponse.json([
        {
            id: 1,
            name: "milk",
            price: 2.5
        },
        {
             id: 1,
            name: "Bread",
            price: 3.5
        }
    ])
}