import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "reactstrap";
import { getAllPosts } from "../../Managers/PostManager";
import { PostListItem } from "./PostListItem";

export const PostList = () => {

    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        getAllPosts().then(allPosts => setPosts(allPosts));
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="m-5">
            <Table>
                <thead>
                    <tr>
                        <th>
                            Title
                        </th>
                        <th>
                            Author
                        </th>
                        <th>
                            Category
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <PostListItem key={post.id} post={post} />
                    ))}
                </tbody>
            </Table>
        </div>
    )
}