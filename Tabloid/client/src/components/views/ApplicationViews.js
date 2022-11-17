import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "../Hello";
import UserProfiles from "../users/UserProfiles";

export default function ApplicationViews() {

  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/users" element={<UserProfiles />} />
    </Routes>
  );

}
