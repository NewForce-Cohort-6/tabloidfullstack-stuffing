import React from "react"; 
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

    return (
        <>
        <button className="btn btn-primary ml-5" onClick={() => navigate("/tagform")}>Add new tag</button>
        
        <div className="m-5">
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
                        <TagListItem key={tag.id} tag={tag} />
                    ))}
                </tbody>
            </Table>
        </div>
        </>
    )
  }