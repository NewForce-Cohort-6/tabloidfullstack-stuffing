import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addTag } from "../../Managers/TagManager";
// import { Form, Label, Button } from "reactstrap";

export default function TagForm() {
    const [newTagName, setNewTagName] = useState({
        name: ""
    });

    const navigate = useNavigate();

    const handleSaveNewTag = (e) => {
        e.preventDefault()
        const newTagToSendToApi = {
            name: newTagName.name
        }
        return (
            addTag(newTagToSendToApi).then((t) => {
                navigate("/tags");
            })
        )
    }

    const saveNewTag = (event) => {
        const copy = {... newTagName}
        copy[event.target.id] = event.target.value
        setNewTagName(copy)
    }

    return (
        <>
        <form className="row g-3" onSubmit={handleSaveNewTag}>
            <div className="col-md-6">
                <label htmlFor="tag">Add New Tag</label>
                <input type="text" onChange={saveNewTag} className="form-control" id="tag" />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
        </>
    );
}