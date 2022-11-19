import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { getAllCategories } from "../../Managers/CategoryManager";
import { createPost, getCurrentUserId } from "../../Managers/PostManager";

export const NewPost = () => {

    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();

    const titleRef = useRef();
    const contentRef = useRef();
    const categoryRef = useRef();
    const imageLocationRef = useRef();
    const publishDateRef = useRef();

    const preApproval = true;

    const getCategories = () => {
        getAllCategories().then(c => setCategories(c));
    };

    const handleSave = (e) => {
        e.preventDefault()

        const newPost = {
            title: titleRef.current.value,
            content: contentRef.current.value,
            categoryId: parseInt(categoryRef.current.value),
            imageLocation: imageLocationRef.current.value,
            publishDateTime: publishDateRef.current.value,
            userProfileId: getCurrentUserId(),
            isApproved: preApproval
        };
        
        createPost(newPost).then(post => navigate(`my-posts/:${post.id}`));
    }

    const handleCancel = (e) => {
        e.preventDefault()
        navigate("/")
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <section className="mx-5 mb-5 mt-3 ">
            <h3>New Post</h3>
            <div className="border mt-3 p-3">
                <Form onSubmit={handleSave}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" required innerRef={titleRef} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="content">Content</Label>
                        <Input type="textarea" name="content" required innerRef={contentRef} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="category">Category</Label>
                        <Input type="select" name="category" defaultValue="none" required innerRef={categoryRef} >
                            <option value="none" disabled hidden>Select a Category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="imageLocation">Header Image URL</Label>
                        <Input type="url" name="imageLocation" innerRef={imageLocationRef} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="publishedDate">Published Date</Label>
                        <Input type="date" name="date" innerRef={publishDateRef} />
                    </FormGroup>
                    <Button className="button mr-2">Save</Button>
                    <Button onClick={handleCancel} className="button">Cancel</Button>
                </Form>
            </div>
        </section>
    )
}
