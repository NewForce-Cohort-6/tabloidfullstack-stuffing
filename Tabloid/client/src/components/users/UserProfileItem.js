import React from "react";
import { useState } from "react";
import { Link, } from "react-router-dom";
import { getAllUsers, updateToDeactivateUser } from "../../Managers/UserProfileManager";
import { updateToActivateUser } from "../../Managers/UserProfileManager";
import { CardLink, Button } from "reactstrap";



export const UserProfileItem = ({ user, setUserProfile }) => {
    
    const [confirmDeactivate, setConfirmDeactivate] = useState(false);
    const [confirmActivate, setConfirmActivate] = useState(false);
    


    
    const toggleConfirmDeactivate = (e) => {
        e.preventDefault();
        setConfirmDeactivate(!confirmDeactivate);
    };
    const toggleConfirmActivate = (e) => {
        e.preventDefault();
        setConfirmActivate(!confirmActivate);
    };
    
   
    
    const handleDeactivate = () => { // or update IsActive to false
        updateToDeactivateUser(user)
        .then(()=> {
            getAllUsers()
        .then(allUsers => setUserProfile(allUsers))
        .then(allUsers => setConfirmDeactivate(!confirmDeactivate));
        
        })}
    
    const handleActivate = () => { //or update IsActive to true
        updateToActivateUser(user)
        .then(()=> {
            getAllUsers()
            .then(allUsers => setUserProfile(allUsers))
            .then(allUsers => setConfirmActivate(!confirmActivate));
    })}
    
    
    
    
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
                {user.userType.name}  <Link to={`/editUserProfileType/${user.id}`}>Edit</Link>
            </td>
            <td>{
                user.isActive
                    ?<CardLink href={"javascript:void(0)"} onClick={toggleConfirmDeactivate}>
                    Deactivate User
                    </CardLink>
                    :<CardLink href={"javascript:void(0)"} onClick={toggleConfirmActivate}>
                    Activate User
                    </CardLink>
                }
            </td>
            <td>
                
            </td>
            {
                confirmDeactivate ?
                <div>
                <h5>Are you sure you want to Deactivate this User?</h5>
                <button onClick={handleDeactivate} className="btn btn-primary mt-2 mr-5">Deactivate</button>
                <Button  onClick={toggleConfirmDeactivate}>Cancel</Button>

                </div>
                :""
            }
            {
                confirmActivate ?
                <div>
                <h5>Are you sure you want to Activate this User?</h5>
                <button onClick={handleActivate} className="btn btn-primary mt-2 mr-5">Activate</button>
                <Button  onClick={toggleConfirmActivate}>Cancel</Button>

                </div>
                :""
            }
        </tr>
    )
}
