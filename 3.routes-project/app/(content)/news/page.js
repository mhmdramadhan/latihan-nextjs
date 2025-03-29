import NewsList from '@/components/NewsList';
import { getAllNews } from '@/lib/news';

export default async function newsPage() {
  const response = await getAllNews();
  const news = response;

  return (
    <div>
      <h1>Halaman Page</h1>
      <NewsList news={news} />
    </div>
  );
}
