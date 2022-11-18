const baseUrl = 'https://localhost:5001/api';

export const getAllTags = () => {
    return fetch(`${baseUrl}/Tag`)
        .then((res) => res.json())
};

export const addTag = (singleTag) => {
    return fetch(`${baseUrl}/Tag`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(singleTag),
    });
};