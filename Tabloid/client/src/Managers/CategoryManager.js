import React from "react";

const baseURL = `https://localhost:5001/api/Category`;

export const getAllCategories = () => {
    return fetch(`${baseURL}`)
    .then((res)=> res.json())
};

export const addCategory = (singleCategory) =>{
    return fetch (`https://localhost:5001/api/Category`, {
        method: "POST",
        headersL: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(singleCategory),
    });
};

// export const getCatById = (id) => {
//     return fetch(`${baseUrl}/Category/${id}`)
//         .then((res) => res.json())
// }

// export const deleteCat = (id) => {
//     return fetch(`${baseUrl}/Category/${id}`, {
//         method: "DELETE"
//     })
// }

// export const editTag = (category) => {
//     return fetch(`${baseUrl}/Category/${category.id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(category)
//     })
//     .then(getAllCategories)
// }