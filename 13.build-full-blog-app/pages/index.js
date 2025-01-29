import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import FeaturedPost from '../components/home-page/featured-posts';



function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;

// 1) Hero => Present ourselves
// 1) Featured Post
