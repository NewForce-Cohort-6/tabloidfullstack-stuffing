const apiUrl = "https://localhost:5001/api";

export const getAllPosts = () => {
    return fetch(`${apiUrl}/Post`)
      .then((res) => res.json())
  };
