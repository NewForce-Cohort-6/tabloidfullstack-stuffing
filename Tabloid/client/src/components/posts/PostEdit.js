import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { getAllCategories } from "../../Managers/CategoryManager";
import { createPost, getCurrentUserId, getPostById } from "../../Managers/PostManager";

export const PostEdit = () => {

    const { id } = useParams();

    const [post, setPost] = useState({});

    const [categories, setCategories] = useState([]);
    const [categoryRequiredNotice, setCategoryRequiredNotice] = useState(false);

    const navigate = useNavigate();

    const titleRef = useRef();
    const contentRef = useRef();
    const categoryRef = useRef();
    const imageLocationRef = useRef();
    const publishDateRef = useRef();

    const preApproval = true;

    const getPost = () => {
        //setPost({ id: id })
        getPostById(id).then(p => setPost(p));
    };

    const getCategories = () => {
        getAllCategories().then(c => setCategories(c));
    };

    const handleCategoryRequired = () => {
        setCategoryRequiredNotice(true);
    };

    const handleSave = (e) => {
        e.preventDefault();

        const editedPost = {
            title: titleRef.current.value,
            content: contentRef.current.value,
            categoryId: parseInt(categoryRef.current.value),
            imageLocation: imageLocationRef.current.value,
            incomingPublishDateTimeString: publishDateRef.current.value,
            userProfileId: getCurrentUserId(),
            isApproved: preApproval

            //putPost(editedPost).then(post => navigate(`/my-posts/${post.id}`));
        }
    };

    const handleCancel = (e) => {
        e.preventDefault()
        navigate("/")
    };

    useEffect(() => {
        getPost();
        getCategories();
    }, []);

    return (
        <section className="mx-5 mb-5 mt-3 ">
            <h3>Edit Post</h3>
            <div className="border mt-3 p-3">
                <Form onSubmit={handleSave}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" required innerRef={titleRef} value={post.id} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="content">Content</Label>
                        <Input type="textarea" name="content" required innerRef={contentRef} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="category">Category</Label>
                        <Input type="select" name="category" defaultValue="none" required innerRef={categoryRef}>
                            <option value="none" disabled hidden>Select a Category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </Input>
                    </FormGroup>
                    {categoryRequiredNotice ?
                        <p className="text-danger">Category is required</p>
                        : <></>}
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
