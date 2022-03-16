import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Login from "./components/views/auth/Login";
import Register from "./components/views/auth/Register";
import Dashboard from "./components/views/dashboard/Dashboard";
import { useAppDispatch } from "./store/hooks";
import { loadUser } from "./store/slices/authSlice";
import ProtectedRoute from "./utils/ProtectedRoute";

axios.defaults.baseURL = "http://localhost:5000";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
