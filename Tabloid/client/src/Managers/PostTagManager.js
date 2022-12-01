const baseUrl = 'https://localhost:5001/api';


export const addPostTag = (singlePostTag) => {
    return fetch(`${baseUrl}/PostTag`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(singlePostTag),
    });
};

export const getAllPostTags = () => {
    return fetch(`${baseUrl}/PostTag`)
        .then((res) => res.json())
};