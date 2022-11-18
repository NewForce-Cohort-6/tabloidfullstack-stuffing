import React from "react"; 
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "reactstrap";
import { getAllTags } from "../../Managers/TagManager";
import { TagListItem } from "./TagListItem";

export default function TagList() {

    const [tags, setTags] = useState([]);
    const getTags = () => {
        getAllTags().then(allTags => setTags(allTags));
    };

    useEffect(() => {
        getTags();
    }, []);

    return (
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
    )
  }