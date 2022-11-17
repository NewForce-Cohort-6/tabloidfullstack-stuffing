import React from "react";

export const UserProfileItem = ({ user }) => {
    return (
        <tr>
            <th scope="row">
                {user.fullName}
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
