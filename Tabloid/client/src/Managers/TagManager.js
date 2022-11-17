import React from "react";

const baseUrl = 'https://localhost:5001/api';

export const getAllTags = () => {
    return fetch(`${baseUrl}/tags`)
        .then((res) => res.json())
};