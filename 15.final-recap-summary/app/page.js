import MeetupList from "@/components/meetups/MeetupList";

async function HomePage() {
  // mengambil data dari API menggunakan metode SSR dengan ISR
  const res = await fetch("http://localhost:3000/api/meetups", {
    method: "GET",
    next: { revalidate: 60 }, // Ini penting! Fungsi ISR ini akan memvalidasi cache setiap 60 detik
  });
  const data = await res.json();

  return <MeetupList meetups={data} />;
}

export default HomePage;