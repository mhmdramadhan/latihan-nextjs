import { useRouter } from 'next/router';

function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  // send a request to some backend server ? for the call api data
  // to fetch the piece of data with an id of router.query.id ? for the call api data

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}

export default PortfolioProjectPage;
