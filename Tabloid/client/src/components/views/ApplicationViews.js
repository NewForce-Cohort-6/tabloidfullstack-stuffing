import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "../Hello";
import TagList from "../tags/TagList";

export default function ApplicationViews() {

  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/api/tags" element={<TagList />} />

    </Routes>
  );

}
