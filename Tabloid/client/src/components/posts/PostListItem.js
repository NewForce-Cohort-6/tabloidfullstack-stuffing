import React from "react";
import { Link } from "react-router-dom";

export const PostListItem = ({ post, isMy }) => {
    return (

        <tr>
            <td>
                {isMy ?
                    <Link to={`/my-posts/${post.id}`}>
                        {post.title}
                    </Link>
                    :
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                }
            </td>
            <td>
                {post.userProfile.displayName}
            </td>
            <td>
                {post.createDateTime}
            </td>
        </tr>

    )
}
