import React, { useEffect, useState } from "react";
import { getAllUsers, getSingleUser } from "../../Managers/UserProfileManager";
import { UserProfileItem } from "./UserProfileItem";
import { Table } from "reactstrap";
import {Link, useParams} from "react-router-dom";
import { Card, CardBody, CardLink, CardText, CardTitle, ListGroup, ListGroupItem } from "reactstrap";



export default function UserProfileDetails (){

  const [userProfile, setUserProfile] = useState({});

  const {id} = useParams();
  
  const handleBrokenImage = (image) => {
    const defaultImage = "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg";
    image.target.src = defaultImage;
}
  
  const getSingleUserProfile = () =>{
    getSingleUser(id).then(singleUser => setUserProfile(singleUser));
  }
  
  useEffect(() => {
        getSingleUserProfile();
    }, []); 
  
  return (
    
    <section className="m-5">
    <Card
        style={{
            width: '18rem'
        }}
    >
        <img
            alt="Post"
            src={userProfile.imageLocation}
            onError={handleBrokenImage}
        />
        <CardBody>
            <CardTitle tag="h5">
                {userProfile.fullName}
            </CardTitle>
        </CardBody>
        <ListGroup flush>
            <ListGroupItem>
                Display Name:<br/> {userProfile.displayName}
            </ListGroupItem>
            <ListGroupItem>
                Email:<br/> {userProfile.email}
            </ListGroupItem>
            <ListGroupItem>
                User Creation Date:<br/> {userProfile.createDateTime}
            </ListGroupItem>
            <ListGroupItem>
                User Type:<br/> {userProfile?.userType?.name}
            </ListGroupItem>
        </ListGroup>
    </Card>
</section>
  );
}