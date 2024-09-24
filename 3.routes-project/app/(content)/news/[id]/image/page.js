import { getNewsItem } from '@/lib/news';
import { notFound } from 'next/navigation';

export default async function ImagePage({ params }) {
  const newItemSlug = params.id;

  const newsItem = await getNewsItem(newItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
