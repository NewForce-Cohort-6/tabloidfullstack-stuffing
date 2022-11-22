import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardLink, CardTitle, ListGroup, ListGroupItem } from "reactstrap";
import { getPostByIdWithComments } from "../../Managers/PostManager";


export const PostTags = ({isMy})=> {
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
        post?.tags?.length
            ?post?.tags?.map((t)=>(<>    
            <Card key={t.id}
                style={{
                    width: '18rem'
                }}
            >
                <CardBody>
                    <CardTitle tag="h5">
                        Tag
                    </CardTitle>
                </CardBody>
                    <ListGroup flush>
                        <ListGroupItem>
                            <h6>t.name</h6><br/>
                        </ListGroupItem>
                    </ListGroup>
            </Card></>  
        ))
        : <h4>"No Tags"</h4>
        } 
        </section>
    </div>)
}