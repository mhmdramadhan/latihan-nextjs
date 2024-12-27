import { getNewsItem } from '@/lib/news';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const newsDetail = async ({ params }) => {
  const newsId = params.id;
  const newsItem = await getNewsItem(newsId);

  if (!newsItem) {
    notFound();
  }

  return (
    <articel className="news-articel">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </articel>
  );
};

export default newsDetail;
