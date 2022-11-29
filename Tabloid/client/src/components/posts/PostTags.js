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

    const navigate = useNavigate();

    const [postTag, setPostTag] = useState({
        postId: id,
        tagId: ""
    });

    //I think this is similar to what we'll need eventually. 
    //Can't wrap my head around what kind of form/button to use in the tag list table. 
    //I tried reactstrap toggle switches and couldn't get them to appear. 
    //Conditionally render an add button (think through that) but also have button both set state and save the tag?
    //radio button or toggle for activate/deactivate?
    //for now just a button
    //do not nav back to comments.
    const savePostTag = (event) => {
        event.preventDefault()
        const newPostTag = {
            postId: id,
            tagId: postTag.tagId
        }
        addPostTag(newPostTag).then((t) => {
            {
                isMy ?
                    navigate(`/my-posts/${id}/comments`)

                    : navigate(`/posts/${id}/comments`)
            };
        });
    }

    const getTags = () => {
        getAllTags().then(allTags => setTags(allTags));
    };

    useEffect(() => {
        getTags();
    }, []);


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
                        <TagAndButton tag={tag} />
                    ))}

                </Table>
            </div>
        </div>)
}