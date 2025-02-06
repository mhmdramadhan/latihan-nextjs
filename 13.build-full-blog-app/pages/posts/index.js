import { Fragment } from 'react';
import AllPost from '../../components/posts/all-posts';
import { getFeaturedPosts } from '../../lib/posts-util';
import Head from 'next/head';

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related posts!"
        />
      </Head>
      <AllPost posts={props.posts} />
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

export default AllPostsPage;
