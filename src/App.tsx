import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/views/Login";
import Register from "./components/views/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
