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
import { addPostTag } from "../../Managers/PostTagManager";
import { getAllTags } from "../../Managers/TagManager";

export const TagAndButton = ({ isMy, tag, id}) => {

    // const [postTag, setPostTag] = useState({
    //     postId: id,
    //     tagId: tag.id
    // });

    // useEffect(() => {
    //     getAllTags
    // }, [])

    const navigate = useNavigate();

    //Conditionally render an add button 
    //but also have button both set state and save the tag?
    const savePostTag = () => {
        // event.preventDefault()
        const newPostTag = {
            postId: id,
            tagId: tag.id
        }
        addPostTag(newPostTag).then((t) => {
            {
                isMy ?
                    navigate(`/my-posts/${id}`)

                    : navigate(`/posts/${id}`)
            };
        });
    }




    return (
        <tbody>
        <td>{tag.name}</td>
        <td>
            <button className="btn btn-primary" onClick={()=>{ savePostTag() }}>
                Add Tag
            </button>
        </td>
    </tbody>
    )
}