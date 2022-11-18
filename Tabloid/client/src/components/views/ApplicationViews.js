import React from "react";
import { Route, Routes } from "react-router-dom";
import { Category } from "../categories/Category";
import {CategoryList} from "../categories/CategoryList";
import Hello from "../Hello";
import UserProfiles from "../users/UserProfiles";
import TagList from "../tags/TagList";
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
      <Route path="/posts" element={<PostList />} />
      <Route path ="/posts/:id" element={<PostDetails />} />
    </Routes>
  );

}
