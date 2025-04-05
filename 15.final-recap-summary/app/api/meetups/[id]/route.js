import { getDummyMeetups } from "@/utils/meetups";

export async function GET(req, { params }) {
    const { id } = await params; // Extract id from URL parameters
    const DUMMY_MEETUPS = getDummyMeetups();

    // Find the meetup by id
    const meetup = DUMMY_MEETUPS.find((meetup) => meetup.id === id);

    if (!meetup) {
        return new Response(JSON.stringify({ error: "Meetup not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }

    return new Response(JSON.stringify(meetup), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
