import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addTag } from "../../Managers/TagManager";
// import { Form, Label, Button } from "reactstrap";

export default function TagForm() {
    const [newTagName, setNewTagName] = useState({
        name: ""
    });

    const navigate = useNavigate();

    const saveNewTag = (e) => {
        e.preventDefault()
        const newTagToSendToApi = {
            name: newTagName.name
        }
        addTag(newTagToSendToApi).then((t) => {
            navigate("/tags");
        });
    }


    return (
        <>
            <form>
                <div>
                    <label htmlFor="tag">Add New Tag</label>
                    <input type="text" onChange={(event) => setNewTagName(event.target.value)} className="form-control" id="tag" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={saveNewTag}>Save</button>
            </form>
        </>
    );
}

// This is example adapted from the gifter repo toni pushed up
{/* <>
<form className="row g-3" onSubmit={handleSaveNewTag}>
    <div className="col-md-6">
        <label htmlFor="tag">Add New Tag</label>
        <input type="text" onChange={saveNewTag} className="form-control" id="tag" />
    </div>
    <button type="submit" className="btn btn-primary">Save</button>
</form>
</> */}