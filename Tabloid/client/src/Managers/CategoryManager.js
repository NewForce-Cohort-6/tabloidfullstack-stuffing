import React from "react";

const baseURL = `https://localhost:5001/api/Category`;

export const getAllCategories = () => {
    return fetch(`${baseURL}`)
    .then((res)=> res.json())
};
