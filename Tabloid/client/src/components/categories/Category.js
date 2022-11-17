import React from "react";

export const Category =({category}) => {
    return (
        <tr>
            <th scope="row">
                {category.title}
            </th>
            <td>
                {category.title}
            </td>
        </tr>
    )
}
