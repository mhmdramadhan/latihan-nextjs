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

export async function GET() {
    const DUMMY_MEETUPS = [
        {
            id: "m1",
            title: "A First Meetup",
            image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/IndonesiaGelap_protests_1.jpg/250px-IndonesiaGelap_protests_1.jpg",
            address: "Some address 5, 12345 Some City",
            description: "This is a first meetup!",
        },
        {
            id: "m2",
            title: "A Second Meetup",
            image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/IndonesiaGelap_protests_1.jpg/250px-IndonesiaGelap_protests_1.jpg",
            address: "Some address 10, 12345 Some City",
            description: "This is a second meetup!",
        },
    ];

    return new Response(JSON.stringify(DUMMY_MEETUPS), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
