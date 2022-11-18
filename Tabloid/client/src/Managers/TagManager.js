const baseUrl = 'https://localhost:5001/api';

export const getAllTags = () => {
    return fetch(`${baseUrl}/Tag`)
        .then((res) => res.json())
};

export const addTag = () => {
    return fetch(`${baseUrl}/Tag`)
        .then((res) => res.json())
};