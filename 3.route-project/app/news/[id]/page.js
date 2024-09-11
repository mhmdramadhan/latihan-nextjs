import { DUMMY_NEWS } from '@/dummy-news';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const newsDetail = ({ params }) => {
  const newsId = params.id;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsId);

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
