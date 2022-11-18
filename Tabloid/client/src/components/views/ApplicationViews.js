import React from "react";
import { Route, Routes } from "react-router-dom";
import { Category } from "../categories/Category";
import {CategoryList} from "../categories/CategoryList";
import Hello from "../Hello";
import UserProfiles from "../users/UserProfiles";
import TagList from "../tags/TagList";
import TagNew from "../tags/TagNew";
import { PostDetails } from "../posts/PostDetails";
import { PostList } from "../posts/PostList";
import UserProfileDetails from "../users/UserProfileDetails";



export default function ApplicationViews() {

  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/categories" element={<CategoryList />} />
      <Route path="/users" element={<UserProfiles />} />
      <Route path="/userProfile/:id" element={<UserProfileDetails />} />
      <Route path="/tags" element={<TagList />} />
      <Route path="/tagform" element={<TagNew />} />
      <Route path="/posts" element={<PostList isMy={false} />} />
      <Route path="/my-posts" element={<PostList isMy={true} />} />
      <Route path ="/posts/:id" element={<PostDetails isMy={false} />} />
      <Route path ="/my-posts/:id" element={<PostDetails isMy={true} />} />
      <Route path ="/new-post" element={<NewPost />} />
    </Routes>
  );

}
