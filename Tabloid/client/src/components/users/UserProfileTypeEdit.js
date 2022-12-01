import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, FormGroup, Label, Input, Form, Dropdown, DropdownToggle, DropdownMenu,DropdownItem,  } from "reactstrap";
import { getSingleUser, updateUserProfileType } from "../../Managers/UserProfileManager";

export const UserProfileTypeEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    
    const [dropdownOpen, setDropdownOpen] = useState(false);  //for toggling dropdown option
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    
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
    useEffect(() => {
        getUserProfile();
    }, []);
    
    const handleSaveAdmin = (e) => {
        e.preventDefault();

        const editedUserProfile = {
            id: userProfile.id,
            displayName: userProfile.displayName,
            firstName: userProfile.firstName,
            lastName: userProfile.lastName,
            email: userProfile.email,
            imageLocation: userProfile.imageLocation,
            createDateTime: userProfile.createDateTime,
            userTypeId: 1,
            isActive: userProfile.isActive

        };
        updateUserProfileType(editedUserProfile); //updateUserProfile needs to go in Manager
        navigate("/users");
    };

    //need to get state for userProfile to be able to edit the userType, use props?  
    return (<>
        
        
        <section className="mx-5 mb-5 mt-3 ">
            <h3>Edit User Type For : {userProfile.displayName}</h3>
            <div className="border mt-3 p-3">
                <Form >
                    <FormGroup>
                        
                        <Label for="userType.name">Current User Type is {userProfile?.userType?.name}</Label>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                        <DropdownToggle caret>Chose Type</DropdownToggle>
                        <DropdownMenu >
                            
                            <DropdownItem onClick={handleSaveAdmin}>Admin</DropdownItem>
                            {/* <DropdownItem onClick={handleSave}>Author</DropdownItem> */}
                            
                        </DropdownMenu>
                        </Dropdown>
                        
                        
                        {/* <Input type="text" name="userprofile.userType.name" required value={userProfile?.userType?.name}
                        onChange={(e) => {
                            const userProfileCopy = { ...userProfile };
                            userProfileCopy.userType.name= e.target.value;
                            setUserProfile(userProfileCopy);
                        }} /> */}
                    </FormGroup>
                    <Button onClick={() => navigate(`/users`)} >Cancel</Button>
                </Form>
            </div>
        </section>
    
        
        </>)
}