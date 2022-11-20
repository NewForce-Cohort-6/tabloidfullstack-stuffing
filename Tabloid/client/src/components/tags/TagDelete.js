import React from "react";
import { useNavigate } from "react-router-dom";

const TagDelete = () => {
    const navigate = useNavigate();

    //need to add to the delete function here. Am I passing id information from PostList to this component? Am I getting it from here?
    const handleDelete = () => {
        navigate("/tags")
    }

    return (
        <div>
            <p>Are you sure you want to delete this?</p>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            <a>No, take me back to Tag Management</a>
        </div>
    )

}

export default TagDelete;