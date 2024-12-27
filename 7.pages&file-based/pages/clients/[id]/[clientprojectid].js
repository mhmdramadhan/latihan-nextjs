import { useRouter } from 'next/router';

function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Project Page but a Specific for a selected client</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
