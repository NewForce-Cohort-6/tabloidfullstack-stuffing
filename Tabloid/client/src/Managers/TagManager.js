import React from "react";

const baseUrl = '/api/tags';

export const getAllTags = () => {
    return fetch(baseUrl)
        .then((res) => res.json())
}