import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "../Hello";
import { PostDetails } from "../posts/PostDetails";
import { PostList } from "../posts/PostList";

export default function ApplicationViews() {

  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/posts" element={<PostList isMy={false} />} />
      <Route path="/my-posts" element={<PostList isMy={true} />} />
      <Route path ="/posts/:id" element={<PostDetails isMy={false} />} />
      <Route path ="/my-posts/:id" element={<PostDetails isMy={true} />} />
    </Routes>
  );

}
