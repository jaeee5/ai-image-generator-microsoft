export async function GET(request: Request){
    //Connect to our Microsoft Azure Functions endpoint
    // add a change to url so it selects the right url to use if in dev environment us localhost otherwise use production url
    const response = await fetch('https://ai-image-generator-dall-e.azurewebsites.net/api/getchatgptsuggestion',{
        cache: 'no-store'
    });
    const textData = await response.text();
    return new Response(JSON.stringify(textData.trim()),{
        status: 200,
    });
}