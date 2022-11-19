import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardLink, CardTitle, ListGroup, ListGroupItem } from "reactstrap";
import { getPostByIdWithComments } from "../../Managers/PostManager";


export const PostComments = ()=> {
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
    <section>
            
        <Card
            style={{
                width: '18rem'
            }}
        >
            <CardBody>
                <CardTitle tag="h5">
                    Comments
                </CardTitle>
            </CardBody>
            
                <ListGroup flush>
                {post?.comments?.map((c)=>(<>
                        <ListGroupItem>
                            <h6>Subject:</h6><br/> {c.subject}
                        </ListGroupItem>
                        <ListGroupItem>
                            Author:<br/> {c.userProfileId}
                        </ListGroupItem>
                        <ListGroupItem>
                            Content:<br/> {c.content}
                        </ListGroupItem>
                        <ListGroupItem>
                            User Creation Date:<br/> {c.createDateTime}
                        </ListGroupItem> 
                        </>  ))}
                </ListGroup>
           
        </Card>
    </section>
    
</div>)
}