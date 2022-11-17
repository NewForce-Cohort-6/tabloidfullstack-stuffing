import React from "react";

export const PostListItem = ({ post }) => {
    return (
        <tr>
            <th scope="row">
                {post.title}
            </th>
            <td>
                {post.userProfile.displayName}
            </td>
            <td>
                {post.publishDateTime}
            </td>
        </tr>
    )
}
