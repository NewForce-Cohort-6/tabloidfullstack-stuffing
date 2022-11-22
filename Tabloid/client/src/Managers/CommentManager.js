const baseUrl = 'https://localhost:5001/api';


export const addComment = (singleComment) => {
    return fetch(`${baseUrl}/Comment`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(singleComment),
    });
};

export const getCommentById = (id)=> {
    return fetch(`${baseUrl}/Comment/${id}`)
        .then((res) => res.json())
};

export const deleteComment = (id) => {
    return fetch(`${baseUrl}/Comment/${id}`, {
        method: "DELETE"
    })
}