import { getSession } from 'next-auth/react'; // Mengimpor fungsi getSession dari next-auth/react untuk mendapatkan sesi pengguna.

import UserProfile from '../components/profile/user-profile'; // Mengimpor komponen UserProfile dari path yang ditentukan.

function ProfilePage() {
  // Fungsi ProfilePage adalah komponen fungsional React yang akan merender komponen UserProfile.
  return <UserProfile />; // Mengembalikan komponen UserProfile untuk dirender.
}

export async function getServerSideProps(context) {
  // Fungsi getServerSideProps digunakan untuk mendapatkan sesi pengguna dari server sebelum halaman dirender.
  const session = await getSession({ req: context.req }); // Mendapatkan sesi pengguna dari request menggunakan getSession.

  if (!session) {
    // Jika tidak ada sesi (pengguna belum login), arahkan pengguna ke halaman /auth.
    return {
      redirect: {
        destination: '/auth', // Halaman tujuan redirect.
        permanent: false // Redirect tidak permanen.
      }
    };
  }

  // Jika sesi ada, kembalikan properti session ke komponen.
  return {
    props: { session } // Properti session yang diteruskan ke komponen.
  };
}

export default ProfilePage; // Mengekspor fungsi ProfilePage sebagai default export dari modul ini.
