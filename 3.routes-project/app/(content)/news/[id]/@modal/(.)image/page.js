import ModalBackdrop from '@/components/ModalBackdrop';
import { getNewsItem } from '@/lib/news';

export default async function InterceptedImagePage({ params }) {
  const newItemSlug = params.id;

  const newsItem = await getNewsItem(newItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
