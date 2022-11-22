import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardLink, CardTitle, ListGroup, ListGroupItem, Table } from "reactstrap";
import { getPostByIdWithComments } from "../../Managers/PostManager";
import { getAllTags } from "../../Managers/TagManager";


export const PostTags = ({isMy})=> {
    const [post, setPost] = useState({});
    const [tags, setTags] = useState([]);

    const getTags = () => {
        getAllTags().then(allTags => setTags(allTags));
    };

    useEffect(() => {
        getTags();
    }, []);

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

            <div className="mx-5 mt-2 mb-5">
                <Table>
                    <thead>
                        <tr>
                            <th>
                                Tags
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tags.map((tag) => (
                            <>
                                <p>{tag.name}</p>
                                {/* <button className="btn btn-danger ml-3 mb-3" onClick={() => navigate(`/tagdelete/${tag.id}`)}>Delete</button> */}
                                {/* <Link to={`/tagdelete/${tag.id}`}>Delete</Link> */}
                                {/* <button className="btn btn-primary ml-3 mb-3" onClick={() => navigate(`/tagedit/${tag.id}`)}>Edit</button> */}
                            </>
                        ))}
                    </tbody>
                </Table>
            </div>

        {/* <section>
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
                            <h6>{t.name}</h6><br/>
                        </ListGroupItem>
                    </ListGroup>
            </Card></>  
        ))
        : <h4>"No Tags"</h4>
        } 
        </section> */}
    </div>)
}