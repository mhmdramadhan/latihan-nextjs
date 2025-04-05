import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Head from "next/head";

export const metadata = {
  title: "Add New Meetup",
  description: "Create and add a new meetup to our platform. Share your events with the community!",
  keywords: "meetup, add meetup, new meetup, community events",
};


function NewMeetupPage() {
  return (
    <>
      <NewMeetupForm />
    </>
  );
}

export default NewMeetupPage;