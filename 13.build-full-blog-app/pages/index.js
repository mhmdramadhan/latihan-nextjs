import { Fragment } from 'react';
import Head from 'next/head';

import Hero from '../components/home-page/hero';
import FeaturedPost from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Rama Blog`s</title>
        <meta name="description" content="Welcome to Rama Blog's - A place to share knowledge and insights on various topics." />
        <meta name="keywords" content="blog, Rama Blog, knowledge, insights, featured posts" />
        <meta name="author" content="Rama" />
      </Head>
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
