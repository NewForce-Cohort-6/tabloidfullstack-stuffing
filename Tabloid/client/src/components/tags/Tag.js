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
import { addPostTag, getAllPostTags } from "../../Managers/PostTagManager";
import { getAllTags } from "../../Managers/TagManager";

export const TagAndButton = ({ tag, id, postTags }) => {

    const navigate = useNavigate();

    // var thisPost = id;

    // const [postTags, setPostTags] = useState([])

    //Conditionally render an add button 
    //but also have button both set state and save the tag?
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

    //I think I need to filter this? so it's only a list of post tags for this post
    // const getTagsForThisPost = () => {
    //     getAllPostTags(id).then(allPostTags => {

    //         debugger
    //         setPostTags(allPostTags);
    //     } )
    // };

    // useEffect(() => {
    //     getTagsForThisPost();
    // }, []);




    return (

            //if the tag is not a postTag, render the add button
            // ? <>
            // <tbody>
            //     <td>{tag.name}</td>
            // </tbody>
            // </>
            // : <>
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
                        <></>
                        }
                    </td>
                </tbody>
            // </>
    )
}