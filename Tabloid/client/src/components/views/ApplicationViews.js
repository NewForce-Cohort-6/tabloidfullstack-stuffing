import React from "react";
import { Route, Routes } from "react-router-dom";
import { Category } from "../categories/Category";
import {CategoryList} from "../categories/CategoryList";
import Hello from "../Hello";
import { PostList } from "../posts/PostList";

export default function ApplicationViews() {

  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/categories" element={<CategoryList />} />
      <Route path="/posts" element={<PostList />} />
    </Routes>
  );

}
