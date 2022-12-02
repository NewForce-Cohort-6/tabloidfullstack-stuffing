import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, FormGroup, Label, Input, Form, } from "reactstrap";
import { getSingleUser, updateUserProfileType } from "../../Managers/UserProfileManager";
import { getAllUserTypes } from "../../Managers/UserTypeManager";

export const UserProfileTypeEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [userTypes, setUserTypes] = useState([]);
;    
    const [userProfile, setUserProfile] = useState({
            id: 0,
            displayName: "",
            firstName: "",
            lastName: "",
            email: "",
            imageLocation: "",
            createDateTime: 0,
            userTypeId: 0,
            isActive: undefined
    });
  
   const getUserProfile = () => {
        getSingleUser(id).then(p => {
            setUserProfile(p);
        })
    };
    useEffect(()=> {
        getUserProfile();
        
    }, []);
        
    const getUserTypes = () => {
        getAllUserTypes().then(t => {
            setUserTypes(t)});
    };
    useEffect(()=> {
        
        getUserTypes();
    }, []);
    
    
    const handleSave = (e) => {
        e.preventDefault();

        const editedUserProfile = {
            id: userProfile.id,
            displayName: userProfile.displayName,
            firstName: userProfile.firstName,
            lastName: userProfile.lastName,
            email: userProfile.email,
            imageLocation: userProfile.imageLocation,
            createDateTime: userProfile.createDateTime,
            userTypeId: parseInt(userProfile.userTypeId),
            isActive: userProfile.isActive

        };
        console.log(editedUserProfile)
        updateUserProfileType(editedUserProfile); //updateUserProfile needs to go in Manager
        navigate("/users");
    };

    //need to get state for userProfile to be able to edit the userType, use props?  
    return (<>
        
        
        <section className="mx-5 mb-5 mt-3 ">
            <h3>Edit User Type For : {userProfile.displayName}</h3>
            <div className="border mt-3 p-3">
                <Form onSubmit={handleSave} >
                    <FormGroup>

                        <Label for="userType">Current User Type is {userProfile?.userType?.name}</Label>
                            <Input type="select" name="userType" defaultValue="none" required value={userProfile.userTypeId}
                            onChange={(e) => {
                                const userProfileCopy = { ...userProfile };
                                userProfileCopy.userTypeId = e.target.value;
                                setUserProfile(userProfileCopy);
                            }}>
                                <option value="none" disabled hidden>Select a User Type</option>
                                {userTypes.map((userType) => (
                                    <option key={userType.id} value={userType.id}>{userType.name}</option>
                                ))}
                            </Input>

                        
                    </FormGroup>
                    <Button className="button mr-2">Save</Button>
                    <Button onClick={() => navigate(`/users`)} >Cancel</Button>
                </Form>
            </div>
        </section>
    
        
        </>)
}