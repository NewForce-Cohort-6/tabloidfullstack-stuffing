import React from "react";

const baseURL = `https://localhost:5001/api/Category`;

export const getAllCategories = () => {
    return fetch(`${baseURL}`)
    .then((res)=> res.json())
};

export const addCategory = () =>{
    return fetch (`${baseURL}`, {
        method: "Post",
        headersL: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(singleCategory),
    });
};