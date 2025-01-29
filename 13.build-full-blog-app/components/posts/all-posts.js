import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';

function AllPost(props) {
  const { posts } = props;

  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default AllPost;
