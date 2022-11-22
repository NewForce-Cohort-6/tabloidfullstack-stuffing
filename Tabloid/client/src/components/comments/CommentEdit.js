import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { editComment, getCommentById } from "../../Managers/CommentManager";


export const CommentEdit = ()=> {
    const {id} = useParams();
    const [commentToEdit, setCommentToEdit] = useState({});
    const navigate =useNavigate();
    
    useEffect(
        () => {
            getCommentById(id)
                .then((c) => {setCommentToEdit(c)})
        },
        []
    )
    
    const handleSaveEdit = (event)=>{
        event.preventDefault();
        const updatedComment = {
            subject: commentToEdit.subject,
            content: commentToEdit.content,
            id: commentToEdit.id
        }
        editComment(updatedComment)
            .then(() => {
            navigate(`/posts/${commentToEdit.postId}/Comments`);
        });

    }
    
    const saveEditComment = (evt) => {
        const copy = {...commentToEdit}
        copy[evt.target.id] = evt.target.value
        setCommentToEdit(copy)
    }


return (<>

Lets Get Editing
<section className="mx-5 mb-5 mt-3 ">
            <h3>Edit Comment</h3>
            <div onSubmit={handleSaveEdit} className="border mt-3 p-3">
                <Form >
                    <FormGroup>
                        <Label for="subject">Subject</Label>
                        <Input type="text" value={commentToEdit.subject} onChange={saveEditComment} id="subject" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="content">Content</Label>
                        <Input type="text" value={commentToEdit.content} onChange={saveEditComment} id="content"  />
                    </FormGroup>
                    
                    <Button type="submit" className="button mr-2" >Save</Button>
                    
                </Form>
            </div>
        </section>

</>)
}