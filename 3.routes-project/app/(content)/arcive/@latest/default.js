import NewsList from '@/components/NewsList';
import { getLatestNews } from '@/lib/news';

export default async function LatestNewsPage() {
  const latestNews = await getLatestNews();

  return (
    <>
      <h1>Latest News Page</h1>
      <NewsList news={latestNews} />
    </>
  );
}