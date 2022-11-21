import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { tagPropType } from "reactstrap/lib/utils";
import { deleteTag, getById } from "../../Managers/TagManager";

const TagDelete = () => {
    const [thisTag, setThisTag] = useState({});

    const navigate = useNavigate();

    const {id} = useParams();

    //Use getById from TagManager to get the id of the tag user wishes to delete, set state.
    useEffect(
        () => {
            getById(id)
                .then((t) => {setThisTag(t)})
        },
        []
    )

    //Use deleteTag (from TagManager) by specific tag id (in state), then nav back to Tag Management list.
    const handleDelete = () => {
        deleteTag(thisTag.id)
            .then(() => {
                navigate("/tags")
            })
    }

    //Talk to team about reactstrap/other styling on this module.
    return (
        <div className="m-5">
            <p>Are you sure you want to delete <b>"{thisTag.name}?"</b></p>
            <button className="btn btn-danger mr-5" onClick={handleDelete}>Delete</button>
            <a href="/tags">No, take me back to Tag Management</a>
        </div>
    )

}

export default TagDelete;