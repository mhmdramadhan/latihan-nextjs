import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

// ambil data dari file markdown, yang ada di folder posts
const postsDirectory = path.join(process.cwd(), 'posts');

// ambil semua file yang ada di folder posts
export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}


export function getPostData(postIdentifier) {
  //  ambil nama file dari postIdentifier dan hilangkan .md
  const postSlug = postIdentifier.replace(/\.md$/, '');
  // posts/fileName
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  // baca isi file
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  // ambil data dari file markdown
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  // ambil semua file yang ada di folder posts
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  // sort berdasarkan tanggal
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  //   filter post yang isFeatured true
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
