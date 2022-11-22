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
}

export const getCurrentUserId = () => JSON.parse(localStorage.getItem('userProfile')).id;

export const getAllPosts = () => {
    return fetch(`${apiUrl}/Post`)
      .then((res) => res.json())
  };

export const getUsersPosts = () => {
  return fetch(`${apiUrl}/Post/User/${getCurrentUserId()}`)
    .then((res) => res.json())
};

export const getPostById = (id) => {
    return fetch(`${apiUrl}/Post/${id}`)
        .then((res) => res.json())
};

export const getUserPostById = (id) => {
  return fetch(`${apiUrl}/Post/${id}/User/${getCurrentUserId()}`)
    .then((res) => res.json())
};

//currently this also pulls tags associated with post by id
export const getPostByIdWithComments = (id) => {
  return fetch(`${apiUrl}/Post/GetWithComments/${id}`)
      .then((res) => res.json())
};

export const createPost = (postBody) => {
  return fetch(`${apiUrl}/Post`, postOption(postBody))
        .then((res) => res.json())
};
