import React from "react";

export const TagListItem = ({ tag }) => {
    return (
        <tr>
            <th scope="row">
                {tag.name}
            </th>
        </tr>
    )
}