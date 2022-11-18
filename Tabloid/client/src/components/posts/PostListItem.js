import React from "react";
import { Link } from "react-router-dom";

export const PostListItem = ({ post }) => {
    return (
        
            <tr>
                <td scope="row">
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </td>
                <td>
                    {post.userProfile.displayName}
                </td>
                <td>
                    {post.publishDateTime}
                </td>
            </tr>
        
    )
}
