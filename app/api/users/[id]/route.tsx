import { NextRequest, NextResponse } from "next/server";

interface Props {
    params: {id: number}
}


export function GET(request: NextRequest, props: Props) {
    const {params} = props
    // Fetch data form DB
    // If not found, return 404 error
    // Else return data
    if(params.id > 10) 
        return NextResponse.json({error: "User not found"}, {status: 404}) 

    return NextResponse.json({id: 1, name: 'One user'})
}

export async function  PUT(request: NextRequest, props: Props) {
    const {params} = props
    // Validate the request body
    // If invalid, return 400
    const body = await request.json();
    if (!body.name) 
        return NextResponse.json({error: "Name is required"}, {status: 400})
    //Fetch the user with the given id
    //If doesn't exist, return 404
    if (params.id > 10)
        return NextResponse.json({error: "User not found"}, {status: 404})
    //If exist, update the user
    //Return the updated user
    return NextResponse.json({id: 2, name: body.name})
}