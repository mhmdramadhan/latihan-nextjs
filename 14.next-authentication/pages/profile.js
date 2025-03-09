import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]'; // Adjust the path as necessary

import UserProfile from '../components/profile/user-profile'; // Mengimpor komponen UserProfile dari path yang ditentukan.

function ProfilePage() {
  // Fungsi ProfilePage adalah komponen fungsional React yang akan merender komponen UserProfile.
  return <UserProfile />; // Mengembalikan komponen UserProfile untuk dirender.
}

export async function getServerSideProps(context) {
  // Fungsi getServerSideProps digunakan untuk mendapatkan sesi pengguna dari server sebelum halaman dirender.
  const session = await getServerSession(context.req, context.res, authOptions); // Mendapatkan sesi pengguna dari request menggunakan getServerSession.

  if (!session) {
    // Jika tidak ada sesi (pengguna belum login), arahkan pengguna ke halaman /auth.
    return {
      redirect: {
        destination: '/auth', // Halaman tujuan redirect.
        permanent: false // Redirect tidak permanen.
      }
    };
  }

  // Ensure only serializable data is returned
  const serializedSession = {
    user: {
      name: session.user.name || null,
      email: session.user.email || null,
    },
    expires: session.expires || null,
  };

  // Jika sesi ada, kembalikan properti session ke komponen.
  return {
    props: { session: serializedSession } // Properti session yang diteruskan ke komponen.
  };
}

export default ProfilePage; // Mengekspor fungsi ProfilePage sebagai default export dari modul ini.
