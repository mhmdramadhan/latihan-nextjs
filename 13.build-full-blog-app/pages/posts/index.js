import AllPost from '../../components/posts/all-posts';
import { getFeaturedPosts } from '../../lib/posts-util';

function AllPostsPage(props) {
  return <AllPost posts={props.posts} />;
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 600,
  };
}

export default AllPostsPage;
