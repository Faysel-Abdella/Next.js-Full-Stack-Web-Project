import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";


export function GET(request: NextRequest) {
    //Fetch users form data base

    return NextResponse.json([
        {id: 1, name: 'Mosh'},
        {id: 2, name: 'Faysel'}
    ])
}

export async function POST(request: NextRequest) {
    const body = await request.json()

     const validationResult = schema.safeParse(body) // returns an object that contains the result of validationResult
    if (!validationResult.success) 
        return NextResponse.json(validationResult.error.errors, {status: 400})
    
    return NextResponse.json({id: 20, name: body.name}, {status: 201})
}

