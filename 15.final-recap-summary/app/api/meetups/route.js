export async function POST(req) {
    try {
        const body = await req.json();
        console.log("Received Meetup Data:", body);

        return new Response(JSON.stringify({ message: "Meetup added successfully!", data: body }), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Invalid request" }), { status: 400 });
    }
}
