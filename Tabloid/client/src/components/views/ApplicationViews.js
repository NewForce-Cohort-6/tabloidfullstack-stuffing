import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "../Hello";
import UserProfiles from "../users/UserProfiles";
import { PostList } from "../posts/PostList";

export default function ApplicationViews() {

  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/users" element={<UserProfiles />} />
      <Route path="/posts" element={<PostList />} />
    </Routes>
  );

}
