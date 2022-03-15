import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/views/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
    </Routes>
  );
}

export default App;
