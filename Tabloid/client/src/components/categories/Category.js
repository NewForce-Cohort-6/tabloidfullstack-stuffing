import React from "react";

export const Category =({category}) => {
    return (
        <tr>
            <td scope="row">
            {category.name}
            </td>
        </tr>
    )
}
