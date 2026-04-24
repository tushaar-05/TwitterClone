import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Layout />}>
        <Route path="feed" element={<Feed />} />
        <Route path="explore" element={<Explore />} />
        <Route path="profile" element={<Profile />} />
      </Route>

    </Routes>
  );
};

export default App;