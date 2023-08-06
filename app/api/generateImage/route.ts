import { NextResponse } from "next/server";

export async function POST(request: Request){
    // when we generate an image we are going to send a prompt along side that request
    const res = await request.json(); // res now contains body
    const prompt = res.prompt;

    //we are sending a REST POST request to out api end point which i going to be an azure function and we are sending the body which is going to be in the form of a JSON object
    const response = await fetch('http://localhost:7071/api/generateImage', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({prompt})
    });

    const textData = await response.text();

    return NextResponse.json(textData);
}