import { useState, useEffect } from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

function LastSalesPage(props) {
  const { data, error } = useSWR(
    'https://nextjs-course-28911-default-rtdb.firebaseio.com/sales.json',
    fetcher
  );

  const [sales, setSales] = useState(props.sales);

  useEffect(() => {
    if (data) {
      const salesArray = [];
      for (const key in data) {
        salesArray.push({
          id: key,
          ...data[key],
        });
      }
      setSales(salesArray);
    }
  }, [data]);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    'https://nextjs-course-28911-default-rtdb.firebaseio.com/sales.json'
  );

  const data = await response.json();

  // transfrorm data
  const transformedSales = [];

  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return {
    props: {
      sales: transformedSales,
    },
    // revalidate: 10,
  };
}

export default LastSalesPage;
