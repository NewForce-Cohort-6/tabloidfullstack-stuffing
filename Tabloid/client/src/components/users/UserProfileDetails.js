import React, { useEffect, useState } from "react";
import { getAllUsers, getSingleUser } from "../../Managers/UserProfileManager";
import { UserProfileItem } from "./UserProfileItem";
import { Table } from "reactstrap";
import {Link, useParams} from "react-router-dom";



export default function UserProfileDetails (){

  const [userProfile, setUserProfile] = useState({});

  const {id} = useParams();
  
  const getSingleUserProfile = () =>{
    getSingleUser(id).then(singleUser => setUserProfile(singleUser));
  }
  
  useEffect(() => {
        getSingleUserProfile();
    }, []); 
  
  return (
    <>
    <Link to="/users">Back</Link>
    <Table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Image</th>
          <th>Display Name</th>
          <th>Email</th>
          <th>Profile Created</th>
          <th>User Type</th>
        </tr>
      </thead>
      <tbody>
      <tr>
            <th scope="row">
                {userProfile.fullName}
            </th>
            <td>
                {userProfile.imageLocation}
            </td>
            <td>
                {userProfile.displayName}
            </td>
            <td>
                {userProfile.email}
            </td>
            <td>
                {userProfile.createDateTime}
            </td>
            <td>
                {userProfile?.userType?.name}
            </td>
        </tr>
      </tbody>
    </Table></>
  );
}