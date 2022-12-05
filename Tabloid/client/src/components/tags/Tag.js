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
        deletePostTag()
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
                        <button value={tag.id} className="btn btn-primary" onClick={() => { handleDeletePostTag(tag.id) }}>
                        Remove Tag
                        </button>
                        }
                    </td>
                </tbody>

    )
}