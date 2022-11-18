import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useState } from "react";
import { useEffect } from "react";
import { getAllCategories } from "../../Managers/CategoryManager";

export const NewPost = () => {

    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        getAllCategories().then(c => setCategories(c));
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <section className="mx-5 mb-5 mt-3 ">
            <h3>New Post</h3>
            <div className="border mt-3 p-3">
                <Form>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="content">Content</Label>
                        <Input type="textarea" name="content" required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="category">Category</Label>
                        <Input type="select" name="category" defaultValue="none" required>
                            <option value="none" disabled hidden>Select a Category</option>
                            {categories.map((category) => (
                                <option key={category.id}>{category.name}</option>
                            ))}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="imageLocation">Header Image URL</Label>
                        <Input type="url" name="imageLocation" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="publishedDate">Published Date</Label>
                        <Input type="date" name="date" />
                    </FormGroup>
                    <Button>Save</Button>
                </Form>
            </div>
        </section>
    )
}