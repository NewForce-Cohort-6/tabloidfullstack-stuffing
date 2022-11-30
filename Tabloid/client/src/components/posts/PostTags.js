import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardBody, CardLink, CardTitle, Form, Input, Label, FormGroup, ListGroup, ListGroupItem, Table } from "reactstrap";
import { getPostByIdWithComments } from "../../Managers/PostManager";
import { addPostTag } from "../../Managers/PostTagManager";
import { getAllTags } from "../../Managers/TagManager";
import { TagAndButton } from "../tags/Tag";


export const PostTags = ({ isMy }) => {
    const [post, setPost] = useState({});
    const [tags, setTags] = useState([]);
    const { id } = useParams();

    // const navigate = useNavigate();

    // const [postTag, setPostTag] = useState({
    //     postId: id,
    //     tagId: tag.id
    // });

    // //Still need to conditionally render an add button 
    // //but also have buttons both set state and save the tag?
    // const savePostTag = () => {
    //     const newPostTag = {
    //         postId: id,
    //         tagId: tag.Id
    //     }
    //     addPostTag(newPostTag).then((t) => {
    //         {
    //             isMy ?
    //                 navigate(`/my-posts/${id}`)

    //                 : navigate(`/posts/${id}`)
    //         };
    //     });
    // }

    const getTags = () => {
        getAllTags().then(allTags => setTags(allTags));
    };

    useEffect(() => {
        getTags();
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
                         />
                    ))}

                </Table>
            </div>
        </div>)
}