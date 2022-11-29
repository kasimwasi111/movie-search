import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SingleMovieDetails from "./components/SingleMovieDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<SingleMovieDetails />} />
    </Routes>
  );
};

export default App;
