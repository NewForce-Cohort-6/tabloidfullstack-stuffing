import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardLink, CardTitle, ListGroup, ListGroupItem } from "reactstrap";
import { getPostByIdWithComments } from "../../Managers/PostManager";


export const PostComments = ({isMy})=> {
    const [post, setPost] = useState({});
    const { id } = useParams();
    
    const getPostWithComments = () => {
        getPostByIdWithComments(id).then(post => setPost(post));
    };
   
    
    useEffect( ()=> {
        
            getPostWithComments(); 
    },[]);
    
    
    
    return (
    <div className= "m-5">
        <h1>{post.title}</h1> 
        {isMy ?
            <CardLink href={`/my-posts/${id}`}>
                Go back to post
            </CardLink>
            :
            <CardLink href={`/posts/${id}`}>
                Go back to post
            </CardLink>
        }   
        <section>
        {
        post?.comments?.length
            ?post?.comments?.map((c)=>(<>    
            <Card key={c.id}
                style={{
                    width: '18rem'
                }}
            >
                <CardBody>
                    <CardTitle tag="h5">
                        Comment
                    </CardTitle>
                </CardBody>
                    <ListGroup flush>
                        <ListGroupItem>
                            <h6>Subject:</h6> {c.subject}<br/>
                            <h6>Author:</h6> {c.userProfile?.displayName}
                            <h6>User Creation Date:</h6> {c.createDateTimeString}<br/>
                            <h6>Content:</h6> {c.content}
                        </ListGroupItem>
                    </ListGroup>
            </Card></>  
        ))
        : <h4>"No Comments"</h4>
        } 
        </section>
    </div>)
}