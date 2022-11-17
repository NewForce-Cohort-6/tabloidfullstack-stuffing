import React from "react";

export const Category =({category}) => {
    return (
        <thead>
        <tr>
            <th scope="row">
                {category.title}
            </th>
        </tr>
        </thead>
    )
}
