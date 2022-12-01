import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardBody, CardLink, CardTitle, Form, Input, Label, FormGroup, ListGroup, ListGroupItem, Table } from "reactstrap";
import { getPostByIdWithComments } from "../../Managers/PostManager";
import { addPostTag, getAllPostTags } from "../../Managers/PostTagManager";
import { getAllTags } from "../../Managers/TagManager";
import { TagAndButton } from "../tags/Tag";


export const PostTags = ({ isMy }) => {
    const [post, setPost] = useState({});
    const [tags, setTags] = useState([]);
    const [postTags, setPostTags] = useState([])

    const { id } = useParams();

    const getTags = () => {
        getAllTags().then(allTags => setTags(allTags));
    };

    useEffect(() => {
        getTags();
    }, []);

    const getTagsForThisPost = () => {
        getAllPostTags(id).then(allPostTags => {
            setPostTags(allPostTags);
        } )
    };

    useEffect(() => {
        getTagsForThisPost();
    }, []);

    //this is confusing, BUT: I added tags to the getPostWithComments method, so think of this as getPostWithCommentsAndTags
    const getPostWithComments = () => {
        getPostByIdWithComments(id).then(post => setPost(post));
    };


    useEffect(() => {

        getPostWithComments();
    }, []);



    return (
        <div className="m-5">
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    {/* post?.tags?.length
                    ?post?.tags?.map((pt) => ) */}
                    {tags.map((tag) => (
                        <TagAndButton 
                        tag={tag}
                        //send other things I need to Tag.js
                        id={id}
                        postTags={postTags}
                         />
                    ))}

                </Table>
            </div>
        </div>)
}