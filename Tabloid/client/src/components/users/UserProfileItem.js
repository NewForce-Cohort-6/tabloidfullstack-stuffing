import React from "react";
import { Link } from "react-router-dom";

export const UserProfileItem = ({ user }) => {
    return (
        <tr>
            <th scope="row">
            <Link to={`/userProfile/${user.id}`} className="m-5"> 
                {user.fullName}
            </Link>
            </th>
            <td>
                {user.displayName}
            </td>
            <td>
                {user.userType.name}
            </td>
        </tr>
    )
}
