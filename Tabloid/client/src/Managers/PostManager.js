const apiUrl = "https://localhost:5001/api";

export const getAllPosts = () => {
    return fetch(`${apiUrl}/Post`)
      .then((res) => res.json())
  };

export const getPostById = (id) => {
    return fetch(`${apiUrl}/Post/${id}`)
        .then((res) => res.json())
};
