import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addComment } from "../../Managers/CommentManager";
import { getCurrentUser } from "../../Managers/UserProfileManager";
import { CardLink } from "reactstrap";

export const CommentNew = ({isMy}) => {
    const navigate = useNavigate();
    const currentUser = getCurrentUser();
    const { id } = useParams();
    
    //initial state
    const [newComment, setNewComment] = useState({
        subject: "",
        content:"",
        userProfileId: currentUser.id,
        postId: id,
    })

    
    const handleSaveNewComment = (event) => { //need to complete
        event.preventDefault()
        const newCommentToSendToApi = {
            subject:newComment.subject,
            content:newComment.content,
            userProfileId: currentUser.id,
            postId: id
        }
        addComment(newCommentToSendToApi).then((t) => {
            
            {isMy ? 
                navigate(`/my-posts/${id}`)
                
                :navigate(`/posts/${id}`)
            };
        });
    }

    const saveNewComment = (evt) => {
        const copy = {...newComment}
        copy[evt.target.id] = evt.target.value
        setNewComment(copy)
    }

    return (
        <>
            <form className="m-5" onSubmit={handleSaveNewComment}>
                <div className="col-md-3">
                    <label htmlFor="tag">Add New Comment</label>
                    <input type="text" placeholder="add subject" onChange={(event) => saveNewComment(event.target.value)} className="form-control" id="subject" />
                    <input type="text" placeholder="add content"  onChange={(event) => saveNewComment(event.target.value)} className="form-control" id="content" />
                <button type="submit" className="btn btn-primary mt-2" >Save</button>
                {isMy ?
                        <CardLink href={`/my-posts/${id}`}>
                            Back To Post
                        </CardLink>
                        :
                        <CardLink href={`/posts/${id}`}>
                            Back To Post
                        </CardLink>
                    }
                </div>
            </form>
        </>
    );
}

