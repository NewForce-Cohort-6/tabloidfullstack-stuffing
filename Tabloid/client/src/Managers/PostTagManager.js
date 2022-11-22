const baseUrl = 'https://localhost:5001/api';


export const addComment = (singlePostTag) => {
    return fetch(`${baseUrl}/PostTag`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(singlePostTag),
    });
};