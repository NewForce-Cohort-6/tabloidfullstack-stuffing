const apiUrl = "https://localhost:5001/api";

export const postOption = (body) => {
  const post = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }
  return post
};

export const getCurrentUserId = () => JSON.parse(localStorage.getItem('userProfile')).id;

export const getAllPosts = () => {
  return fetch(`${apiUrl}/Post`)
    .then((res) => res.json())
};

export const getUsersPosts = () => {
  return fetch(`${apiUrl}/Post/User/${getCurrentUserId()}`)
    .then((res) => res.json())
};

// Get all posts from authors in which the current user is subscribed to
export const getSubscribedPosts = () => {
  return fetch(`${apiUrl}/Post/Subscribed/${getCurrentUserId()}`)
    .then((res) => res.json())
};

// Get published (Publish Date < Now) post by Id 
export const getPostById = (id) => {
  return fetch(`${apiUrl}/Post/${id}`)
    .then((res) => res.json())
};

// Get all user's post by Id (any, published or un-published)
export const getUserPostById = (id) => {
  return fetch(`${apiUrl}/Post/${id}/User/${getCurrentUserId()}`)
    .then((res) => res.json())
};

export const getPostByIdWithComments = (id) => {
  return fetch(`${apiUrl}/Post/GetWithComments/${id}`)
    .then((res) => res.json())
};

export const createPost = (postBody) => {
  return fetch(`${apiUrl}/Post`, postOption(postBody))
    .then((res) => res.json())
};

export const updatePost = (post) => {
  return fetch(`${apiUrl}/Post/${post.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post)
  })
};

export const deletePost = (postId) => {
  return fetch(`${apiUrl}/Post/${postId}`, {
    method: "DELETE"
  })
}
