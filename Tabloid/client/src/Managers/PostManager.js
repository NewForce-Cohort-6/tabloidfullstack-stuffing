const apiUrl = "https://localhost:5001/api";

export const getAllPosts = () => {
    return fetch(`${apiUrl}/Post`)
      .then((res) => res.json())
  };

export const getUsersPosts = () => {
  const currentUser = JSON.parse(localStorage.getItem('userProfile'));
  return fetch(`${apiUrl}/Post/User/${currentUser.id}`)
    .then((res) => res.json())
};

export const getPostById = (id) => {
    return fetch(`${apiUrl}/Post/${id}`)
        .then((res) => res.json())
};

export const getUserPostById = (id) => {
  const currentUser = JSON.parse(localStorage.getItem('userProfile'));
  return fetch(`${apiUrl}/Post/${id}/User/${currentUser.id}`)
    .then((res) => res.json())
};
