import { useEffect, useState } from "react";

function LastSalesPage() {
  const [sales, setSales] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://nextjs-course-28911-default-rtdb.firebaseio.com/sales.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const salesArray = [];
        for (const key in data) {
          salesArray.push({
            id: key,
            ...data[key],
          });
        }
        setSales(salesArray);
        setIsLoading(false);
        console.log(data);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (sales.length === 0) {
    return <p>No sales found.</p>;
  }

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

export default LastSalesPage;
