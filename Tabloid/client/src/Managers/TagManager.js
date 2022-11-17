import React from "react";

const baseUrl = '/tags';

export const getAllTags = () => {
    return fetch(baseUrl)
        .then((res) => res.json())
}