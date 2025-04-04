import MeetupDetail from "@/components/meetups/MeetupDetail";
import { Fragment } from "react";

function MeetupDetails(props) {
    return <MeetupDetail
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/IndonesiaGelap_protests_1.jpg/250px-IndonesiaGelap_protests_1.jpg"
        title="A First Meetup"
        address="Some address 5, 12345 Some City"
        description="This is a first meetup!"
    />
}

export default MeetupDetails;