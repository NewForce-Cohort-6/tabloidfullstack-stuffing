import React from "react";
import { useNavigate } from "react-router-dom";

const TagDelete = () => {
    const navigate = useNavigate();

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