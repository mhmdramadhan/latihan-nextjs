import NewsList from '@/components/NewsList';

export default async function newsPage() {
  const response = await fetch('http://localhost:8080/news');

  if (!response.ok) {
    throw new Error('Failed to fetch news.');
  }

  const news = await response.json();

  return (
    <div>
      <h1>News Page</h1>
      <NewsList news={news} />
    </div>
  );
}
