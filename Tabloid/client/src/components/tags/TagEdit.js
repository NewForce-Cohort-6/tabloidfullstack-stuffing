import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editTag, getById } from "../../Managers/TagManager";
// import { Form, Label, Button } from "reactstrap";

const TagEdit = () => {
    const [thisTag, setThisTag] = useState({});

    const navigate = useNavigate();

    const {id} = useParams();

    //Use getById from TagManager to get the id of the tag user wishes to edit, set state.
    useEffect(
        () => {
            getById(id)
                .then((t) => {setThisTag(t)})
        },
        []
    )
    
    //edits persist after I refresh and manually navigate back to /tags. line 29 "navigate("/tags") is not working. Ask team or instructors for help tracking down what I'm missing on this.
    //Any time I'm in a form, the method I'm using in the form needs to have a prevent default.
    const saveTagEdit = (e) => {
        e.preventDefault();
        const updatedTag = {
            name: thisTag.name,
            id: thisTag.id
        }
        editTag(updatedTag)
            .then(() => {
            navigate("/tags");
        });
    }


    return (
        <>
            <form className="m-5">
                <div className="col-md-3">
                    <label htmlFor="tag">Edit Tag <b>"{thisTag.name}?"</b></label>
                    <input type="text" value={thisTag.name} onChange={(e) => {
                        const copy = { ...thisTag }
                        copy.name = e.target.value
                        setThisTag(copy)
                    }} className="form-control" id="tag" />
                <button type="submit" className="btn btn-primary mt-2 mr-5" onClick={saveTagEdit}>Save</button>
                <a href="/tags">No, take me back </a>
                </div>
            </form>
        </>
    );
}

export default TagEdit;