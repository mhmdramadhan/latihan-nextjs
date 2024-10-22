import { useRouter } from 'next/router';

function BlogPostsPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Blogs Page With Many SLug</h1>
    </div>
  );
}

export default BlogPostsPage;
