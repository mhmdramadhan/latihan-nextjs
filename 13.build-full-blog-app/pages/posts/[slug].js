import { Fragment } from 'react';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';
import Head from 'next/head';

/**
 * Halaman untuk menampilkan konten post berdasarkan slug.
 */
function SinglePostPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

/**
 * Mengambil data post berdasarkan slug untuk build time.
 */
export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600, // Revalidasi setiap 10 menit
  };
}

/**
 * Menentukan jalur statis yang akan dibuat.
 */
export function getStaticPaths() {
  const slugs = getPostsFiles().map((postFile) => {
    return {
      params: {
        slug: postFile.replace(/\.md$/, ''),
      },
    };
  });

  return {
    paths: slugs, // Halaman yang akan dibuat
    fallback: false, // Halaman 404 jika slug tidak ditemukan
  };
}

export default SinglePostPage;
