import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import FeaturedPost from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
}

/**
 * Fetches the static props for the index page.
 *
 * This function retrieves the featured posts and returns them as props.
 * The page will be revalidated every 600 seconds.
 *
 * @returns {Promise<{props: {posts: Array}, revalidate: number}>} The static props for the page.
 */
export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 600,
  };
}

export default HomePage;
