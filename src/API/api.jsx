import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchPosts = async (pageNumber = 1) => {
  try {
    const limit = 3;
    const start = (pageNumber - 1) * limit;

    const response = await api.get(
      `/posts?_start=${start}&_limit=${limit}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchPostById = async (id) => {
  const response = await api.get(`/posts/${id}`);

  return response.data;
};

export const deletePost = (id) => {
 return api.delete(`/posts/${id}`);
}

export const updatePost = (id) => {
 return api.patch(`/posts/${id}`, {title:'I have updated'});
}

