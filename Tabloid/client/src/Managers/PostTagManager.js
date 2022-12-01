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

export const getAllPostTags = (id) => {
    return fetch(`${baseUrl}/PostTag/${id}`)
        .then((res) => res.json())
};

export const deletePostTag = (id) => {
    return fetch(`${baseUrl}/PostTag/${id}`, {
        method: "DELETE"
    })
}