import { ApiClient, AxiosResponse } from './ApiClient';

export async function getPostData() {
  return ApiClient.get('/posts');
}

export async function getPostSlugs() {
  const posts = await getPostData();
  return posts.map((post) => {
    return {
      params: { id: post.slug },
    };
  });
}

export async function getPost(slug) {
  return (await ApiClient.get(`/posts?slug=${slug}`))[0];
}
