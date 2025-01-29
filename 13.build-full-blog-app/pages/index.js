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

// 1) Hero => Present ourselves
// 1) Featured Post
