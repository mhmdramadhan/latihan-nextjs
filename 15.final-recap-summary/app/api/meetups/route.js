import { getDummyMeetups, addDummyMeetup } from "@/utils/meetups";

export async function POST(req) {
    try {
        const body = await req.json();

        const { title, image, address, description } = body;
        if (!title || !image || !address || !description) {
            return new Response(JSON.stringify({ error: "All fields are required" }), { status: 422 });
        }
        // Simulate saving to a database
        // In a real-world scenario, you would save the data to a database here
        // For example:
        // await saveToDatabase(body);
        // But for this example, we'll just log it to the console
        console.log("Meetup added:", body);
        // Simulate a successful response

        // save data to getDummyMeetups
        const meetup = addDummyMeetup(body);
        

        return new Response(JSON.stringify({ message: "Meetup added successfully!", data: meetup }), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Invalid request" }), { status: 400 });
    }
}

export async function GET() {
    const DUMMY_MEETUPS = getDummyMeetups();    

    return new Response(JSON.stringify(DUMMY_MEETUPS), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
