import { NextRequest, NextResponse } from "next/server";

import schema from "./schema";

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

export async function POST(request: NextRequest) {
    const body = await request.json();

    const validationResult = schema.safeParse(body)

    if(!validationResult.success)
        return NextResponse.json(validationResult.error.errors, {status: 400})

    return NextResponse.json({
        id: 10,
        name: body.name,
        price: body.price
    })
}