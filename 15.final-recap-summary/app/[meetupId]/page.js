import MeetupDetail from "@/components/meetups/MeetupDetail";

async function MeetupDetails({ params }) {

    const { meetupId } = await params

    // Fetch the meetup details from the API
    const res = await fetch(`http://localhost:3000/api/meetups/${meetupId}`, {
        method: "GET",
        next: { revalidate: 60 }, // This is important! This ISR function will validate the cache every 60 seconds
    });
    const data = await res.json();
    // Check if the meetup was found
    if (data.error) {
        return <p>{data.error}</p>;
    }

    console.log(data);
    

    // Render the MeetupDetail component with the fetched data
    return <MeetupDetail
        img={data.image}
        title={data.title}
        address={data.address}
        description={data.description}
        id={data.id}
    />
}

export default MeetupDetails;