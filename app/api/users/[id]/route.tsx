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