import React from "react";
import { Link } from "react-router-dom";
import { updateToDeactivateUser } from "../../Managers/UserProfileManager";
import { updateToActivateUser } from "../../Managers/UserProfileManager";


export const UserProfileItem = ({ user }) => {
    
    
    const handleDeactivate = () => { // or update IsActive to false
        updateToDeactivateUser(user);
    }
    
    const handleActivate = () => { //or update IsActive to true
        updateToActivateUser(user);
    }
    
    
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
            <td>{
                user.isActive
                ?<button onClick={handleDeactivate} className="btn btn-primary mt-2 mr-5">Deactivate</button>
                :<button onClick={handleActivate} className="btn btn-primary mt-2 mr-5">Activate</button>
            }
            </td>
        </tr>
    )
}
