import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "reactstrap";
import { getAllPosts, getSubscribedPosts, getUsersPosts } from "../../Managers/PostManager";
import { PostListItem } from "./PostListItem";

export const PostList = ({ isMy, subscriptions }) => {

    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        getAllPosts().then(allPosts => setPosts(allPosts));
    };

    const getPostsForUser = () => {
        getUsersPosts().then(usersPosts => setPosts(usersPosts))
    };

    const getSubscribedForUser = () => {
        getSubscribedPosts().then(subbedPosts => setPosts(subbedPosts))
    }

    // Conditionally populate posts state with all posts, subscribed posts, or only the user's posts
    // The booleans isMy and subscribed are passed in as a prop from the route
    // isMy is true if the route is "/my-posts" and false if it is "/posts"
    // isMy is also listed in the dependency array so if the user changes routes without navigating away from the component it will update the list
    useEffect(() => {
        if (isMy) {
            getPostsForUser();
        }
        else if (subscriptions) {
            getSubscribedForUser();
        }
        else {
            getPosts();
        }
    }, [isMy]);

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
                        <PostListItem key={post.id} post={post} isMy={isMy}/>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}