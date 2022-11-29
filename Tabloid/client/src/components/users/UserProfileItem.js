import React from "react";
import { useState } from "react";
import { Link, } from "react-router-dom";
import { getAllUsers, updateToDeactivateUser } from "../../Managers/UserProfileManager";
import { updateToActivateUser } from "../../Managers/UserProfileManager";
import { CardLink } from "reactstrap";



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
                {user.userType.name}
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
            {
                confirmDeactivate ?
                <div>
                <h5>Are you sure you want to Deactivate this User?</h5>
                <button onClick={handleDeactivate} className="btn btn-primary mt-2 mr-5">Deactivate</button>
                </div>
                :""
            }
            {
                confirmActivate ?
                <div>
                <h5>Are you sure you want to Activate this User?</h5>
                <button onClick={handleActivate} className="btn btn-primary mt-2 mr-5">Activate</button>
                </div>
                :""
            }
            
            {/* {confirmDelete ?
                    <ListGroup flush>
                        <ListGroupItem className="text-danger">
                            Are you sure you want to delete this post?
                        </ListGroupItem>
                        <ListGroup flush>
                            <ListGroupItem>
                                <Button className="mr-3 btn-danger" onClick={handleDelete}>
                                    Delete
                                </Button>
                                <Button onClick={toggleDeleteConfirm}>
                                    Cancel
                                </Button>
                            </ListGroupItem>
                        </ListGroup>
                    </ListGroup>
                    : <></>} */}
            
            
            
            {/* <td>{
                user.isActive
                ?<button onClick={handleDeactivate} className="btn btn-primary mt-2 mr-5">Deactivate</button>
                              
                :<button onClick={handleActivate} className="btn btn-primary mt-2 mr-5">Activate</button>
            }
            </td> */}
        </tr>
    )
}
