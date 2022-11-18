import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addTag } from "../../Managers/TagManager";
import { Form, Label, Button } from "reactstrap";

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

    const saveNewPost = (event) => {
        const copy = {... newTagName}
        copy[event.target.id] = event.target.value
        setNewTagName(copy)
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="tag">
                <Label>Tag</Label>
                <Form.Control type="tag" placeholder="Add new tag" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}