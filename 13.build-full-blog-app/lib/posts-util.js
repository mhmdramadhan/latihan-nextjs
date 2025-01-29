import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

// ambil data dari file markdown, yang ada di folder posts
const postsDirectory = path.join(process.cwd(), 'posts');

function getPostData(fileName) {
  // posts/fileName
  const filePath = path.join(postsDirectory, fileName);
  // baca isi file
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  // ambil data dari file markdown
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, '');
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

function getAllPosts() {
  // ambil semua file yang ada di folder posts
  const postFiles = fs.readdirSync(postsDirectory);

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
