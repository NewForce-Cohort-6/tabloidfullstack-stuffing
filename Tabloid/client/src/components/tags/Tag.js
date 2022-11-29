//make the tag list tags and buttons in here so that each tag knows its id and manages its own state
//this is for each item in the tag manager page that I STARTED in PostTags.js
//tag, button
//send props to this component? might be changing state.
//sending tag list info to this component
//should send post tag info as well?
//if it exists in PostTag table for the postId in question, do not render button

import React from "react";

export const TagAndButton = ({tag}) => {
    return (
        <tbody>
        <td>{tag.name}</td>
        <td>
            <button className="btn btn-primary" >
                Add Tag
            </button>
        </td>
    </tbody>
    )
}