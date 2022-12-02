const apiUrl = "https://localhost:5001";

export const getAllUserTypes = () => {
    return fetch(`${apiUrl}/api/userType`)//http GET request or  `/api/userProfile`
      .then((res) => res.json())
  };