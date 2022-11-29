const baseURL = `https://localhost:5001/api/Category`;

export const getAllCategories = () => {
    return fetch(`${baseURL}`)
    .then((res)=> res.json())
};

export const addCategory = (singleCategory) =>{
    return fetch (`${baseURL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(singleCategory),
    });
};

export const getCatById = (id) => {
    return fetch(`${baseURL}/${id}`)
        .then((res) => res.json())
}

export const deleteCat = (id) => {
    return fetch(`${baseURL}/${id}`, {
        method: "DELETE"
    })
}

export const editCat = (category) => {
    return fetch(`${baseURL}/${category.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(category)
    })
    .then(getAllCategories)
}

export const canIDelete = (id) => {
    return fetch(`https://localhost:5001/api/Post/CanIDelete/${id}`)
    .then(r => r.json())
}
// https://localhost:5001/api/Category