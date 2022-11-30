import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export const UserProfileTypeEdit = () => {
    const navigate = useNavigate();

//need to get state for userProfile to be able to edit the userType, use props?  
    return (<>
        <h1>stuff</h1>
        <Button onClick={() => navigate(`/users`)} >Cancel</Button>
        </>)
}