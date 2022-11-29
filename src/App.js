import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Error from "./components/Error";
import SingleMovieDetails from "./components/SingleMovieDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies/:id" element={<SingleMovieDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
