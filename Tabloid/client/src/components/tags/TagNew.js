import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addTag } from "../../Managers/TagManager";
import { Form, Label, Button } from "reactstrap";

export default function TagForm() {
    const [name, setName] = useState("");

    const navigate = useNavigate();

    const saveNewTag = () => {
        const newTag = {
            name: name
        }
        addTag(newTag).then((t) => {
            navigate("/tags");
        });
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