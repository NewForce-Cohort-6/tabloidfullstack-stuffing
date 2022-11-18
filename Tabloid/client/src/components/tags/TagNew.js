import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTag } from "../../Managers/TagManager";
// import { Form, Label, Button } from "reactstrap";

const TagForm = () => {
    const [newTagName, setNewTagName] = useState("");

    const navigate = useNavigate();

    const saveNewTag = (event) => {
        event.preventDefault()
        const newTagToSendToApi = {
            name: newTagName
        }
        addTag(newTagToSendToApi).then((t) => {
            navigate("/tags");
        });
    }


    return (
        <>
            <form className="m-5">
                <div className="col-md-3">
                    <label htmlFor="tag">Add New Tag</label>
                    <input type="text" onChange={(event) => setNewTagName(event.target.value)} className="form-control" id="tag" />
                <button type="submit" className="btn btn-primary mt-2" onClick={saveNewTag}>Save</button>
                </div>
            </form>
        </>
    );
}

export default TagForm;