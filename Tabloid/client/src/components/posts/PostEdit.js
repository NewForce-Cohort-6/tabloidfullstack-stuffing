import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { getAllCategories } from "../../Managers/CategoryManager";
import { getUserPostById, updatePost } from "../../Managers/PostManager";

export const PostEdit = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState({
        title: undefined,
        content: undefined,
        categoryId: undefined,
        imageLocation: undefined
    });

    const [categories, setCategories] = useState([]);

    const getPost = () => {
        getUserPostById(id).then(p => {
            setPost(p);
        })
    };
    
    const getCategories = () => {
        getAllCategories().then(c => setCategories(c));
    };

    const handleSave = (e) => {
        e.preventDefault();

        const editedPost = {
            id: post.id,
            title: post.title,
            content: post.content,
            categoryId: parseInt(post.categoryId),
            imageLocation: post.imageLocation
        };
        updatePost(editedPost);
        navigate(`/my-posts/${post.id}`);
    };

    const handleCancel = (e) => {
        e.preventDefault()
        navigate("/my-posts")
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
                        <Input type="text" name="title" required value={post.title}
                        onChange={(e) => {
                            const postCopy = { ...post };
                            postCopy.title = e.target.value;
                            setPost(postCopy);
                        }} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="content">Content</Label>
                        <Input type="textarea" name="content" required value={post.content}
                        onChange={(e) => {
                            const postCopy = { ...post };
                            postCopy.content = e.target.value;
                            setPost(postCopy);
                        }} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="category">Category</Label>
                        <Input type="select" name="category" defaultValue="none" required value={post.categoryId}
                        onChange={(e) => {
                            const postCopy = { ...post };
                            postCopy.categoryId = e.target.value;
                            setPost(postCopy);
                        }}>
                            <option value="none" disabled hidden>Select a Category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="imageLocation">Header Image URL</Label>
                        <Input type="url" name="imageLocation" value={post.imageLocation}
                        onChange={(e) => {
                            const postCopy = { ...post };
                            postCopy.imageLocation = e.target.value;
                            setPost(postCopy);
                        }} />
                    </FormGroup>
                    <Button className="button mr-2">Save</Button>
                    <Button onClick={handleCancel} className="button">Cancel</Button>
                </Form>
            </div>
        </section>
    )
}
