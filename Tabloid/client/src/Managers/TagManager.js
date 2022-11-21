const baseUrl = 'https://localhost:5001/api';

export const getAllTags = () => {
    return fetch(`${baseUrl}/Tag`)
        .then((res) => res.json())
};

export const addTag = (singleTag) => {
    return fetch(`${baseUrl}/Tag`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(singleTag),
    });
};

export const getById = (id) => {
    return fetch(`${baseUrl}/Tag/${id}`)
        .then((res) => res.json())
}

export const deleteTag = (id) => {
    return fetch(`${baseUrl}/Tag/${id}`, {
        method: "DELETE"
    })
}

export const editTag = (tag) => {
    return fetch(`${baseUrl}/Tag/${tag.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    })
    .then((res) => res.json())
}