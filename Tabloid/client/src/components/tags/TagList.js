import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Table } from "reactstrap";
import { getAllTags } from "../../Managers/TagManager";
import { TagListItem } from "./TagListItem";

export default function TagList() {

    const navigate = useNavigate();
    const [tags, setTags] = useState([]);

    const getTags = () => {
        getAllTags().then(allTags => setTags(allTags));
    };

    useEffect(() => {
        getTags();
    }, []);


    //discuss styling for delete-- button or link? Also option to put it in the table in row aligned with associated tag, but check how to get a "blank" column header?
    return (
        <>
            <button className="btn btn-primary mt-3 ml-5" onClick={() => navigate("/tagform")}>Add New Tag</button>

            <div className="mx-5 mt-2 mb-5">
                <Table>
                    <thead>
                        <tr>
                            <th>
                                Tags:
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tags.map((tag) => (
                            <>
                                <TagListItem key={tag.id} tag={tag} />
                                <button className="btn btn-danger ml-3 mb-3" onClick={() => navigate(`/tagdelete/${tag.id}`)}>Delete</button>
                                {/* <Link to={`/tagdelete/${tag.id}`}>Delete</Link> */}
                                <button className="btn btn-primary ml-3 mb-3" onClick={() => navigate(`/tagedit/${tag.id}`)}>Edit</button>
                            </>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}