import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../Managers/UserProfileManager";
import { UserProfileItem } from "./UserProfileItem";
import { Table } from "reactstrap";



export default function UserProfiles (){

  const [userProfiles, setUserProfiles] = useState([]);

  const getUserProfiles = () =>{
    getAllUsers().then(allUsers => setUserProfiles(allUsers))
  }
  
  useEffect(() => {
        getUserProfiles();
    }, []); 
    
  return (
    <div className="m-5">
    <Table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Display Name</th>
          <th>User Type</th>
          <th>Activate or Deactivate</th>
        </tr>
      </thead>
      <tbody>
          {userProfiles.map((user) => (
            <UserProfileItem key={user.id} user={user} />
          ))}
      </tbody>
    </Table>
    </div>
  );
}