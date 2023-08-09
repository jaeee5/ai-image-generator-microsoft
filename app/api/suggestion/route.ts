import { NextResponse } from "next/server";

export async function GET(request: Request){
    //Connect to our Microsoft Azure Functions endpoint
    // add a change to url so it selects the right url to use if in dev environment us localhost otherwise use production url
    const response = await fetch(`${process.env.GET_SUGGESTION}`,{
        cache: 'no-store'
    });
    const textData = await response.text();
    return new Response(JSON.stringify(textData.trim()),{
        status: 200,
    });
}

export async function POST(request: Request) {
    return NextResponse.json({})
}
