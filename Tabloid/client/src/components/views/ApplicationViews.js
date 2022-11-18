import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "../Hello";
import TagList from "../tags/TagList";
import TagNew from "../tags/TagNew";
import { PostDetails } from "../posts/PostDetails";
import { PostList } from "../posts/PostList";

export default function ApplicationViews() {

  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/tags" element={<TagList />} />
      <Route path="/tagform" element={<TagNew />} />
      <Route path="/posts" element={<PostList />} />
      <Route path ="/posts/:id" element={<PostDetails />} />
    </Routes>
  );

}
