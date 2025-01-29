import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import FeaturedPost from '../components/home-page/featured-posts';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze, and ships with built-in SSR.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJS2',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze, and ships with built-in SSR.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS3',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze, and ships with built-in SSR.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJS4',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze, and ships with built-in SSR.',
    date: '2022-02-10',
  },
];

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
