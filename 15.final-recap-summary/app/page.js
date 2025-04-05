import MeetupList from "@/components/meetups/MeetupList";

export const metadata = {
  title: "Meetups | Home",
  description: "Browse a list of exciting meetups happening near you!",
  keywords: "meetups, events, community",
};

async function HomePage() {
  // mengambil data dari API menggunakan metode SSR dengan ISR
  const res = await fetch("http://localhost:3000/api/meetups", {
    method: "GET",
    next: { revalidate: 60 }, // Ini penting! Fungsi ISR ini akan memvalidasi cache setiap 60 detik
  });
  const data = await res.json();

  return (
    <>
      <MeetupList meetups={data} />
    </>
  );
}

export default HomePage;