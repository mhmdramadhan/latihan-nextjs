import MeetupDetail from "@/components/meetups/MeetupDetail";
import { getDummyMeetups } from "@/utils/meetups";


export async function generateStaticParams() {
    try {
        // jika di build error kalau pakai api localhost
        // const res = await fetch("http://localhost:3000/api/meetups", {
        //     method: "GET",
        // });

        // if (!res.ok) {
        //     throw new Error("Failed to fetch meetups");
        // }

        // const meetups = await res.json();

        // jadi dirubah dulu ke file
        const meetups = getDummyMeetups();


        // Pastikan meetups adalah array
        if (!Array.isArray(meetups)) {
            throw new Error("Invalid meetups data");
        }

        // Return an array of params for each meetup
        return meetups.map((meetup) => ({
            meetupId: meetup.id,
        }));
    } catch (error) {
        console.error("Error in generateStaticParams:", error);
        return [];
    }
}

// untuk jika ada penambahan ID baru maka akan di generate lagi
export const dynamicParams = true;
//  untuk membuild ulang halaman html setiap 60 detik sehingga data htmlnya terbaru walaupun menggunkan SSG
export const revalidate = 60; // This is important! This ISR function will validate the cache every 60 seconds

async function Page({ params }) {

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

export default Page;