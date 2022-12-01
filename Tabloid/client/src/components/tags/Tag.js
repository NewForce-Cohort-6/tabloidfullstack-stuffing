//make the tag list tags and buttons in here so that each tag knows its id and manages its own state
//this is for each item in the tag manager page that I STARTED in PostTags.js
//tag, button
//send props to this component? might be changing state.
//sending tag list info to this component
//should send post tag info as well?
//if it exists in PostTag table for the postId in question, do not render button

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addPostTag, deletePostTag, getAllPostTags } from "../../Managers/PostTagManager";
import { getAllTags } from "../../Managers/TagManager";

export const TagAndButton = ({ tag, id, postTags }) => {

    const navigate = useNavigate();

    //this was previously not working because of event.preventDefault, so I commented it out.
    //this saves the new tag and POSTs it to the PostTag table in database.
    const savePostTag = () => {
        // event.preventDefault()
        const newPostTag = {
            postId: id,
            tagId: tag.id
        }
        addPostTag(newPostTag).then((t) => {
            navigate(`/my-posts/${id}`)
        });
    }

    const handleDeletePostTag = () => {
        deletePostTag(id)
            .then(() => {
                navigate(`/my-posts/${id}`)
            })
    }

//having trouble getting the postTag id associated with the Remove Tag button so Delete knows what to delete from PostTag table.

    return (

                <tbody>
                    <td>{tag.name}</td>
                    <td>
                        {
                        !postTags.some(x => x.tagId === tag.id)
                        ?
                        <button className="btn btn-primary" onClick={() => { savePostTag() }}>
                            Add Tag
                        </button>
                        :
                        <button className="btn btn-primary" onClick={() => { handleDeletePostTag() }}>
                        Remove Tag
                        </button>
                        }
                    </td>
                </tbody>

    )
}