import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Login from "./components/views/auth/Login";
import Register from "./components/views/auth/Register";
import Dashboard from "./components/views/dashboard/Dashboard";
import { useAppDispatch } from "./store/hooks";
import { loadUser } from "./store/slices/authSlice";

axios.defaults.baseURL = "http://localhost:5000";

function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     fetch("http://localhost:5000/auth/login/success", {
  //       method: "GET",
  //       credentials: "include",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Credentials": "true",
  //       },
  //     })
  //       .then((response) => {
  //         if (response.status === 200) return response.json();
  //         throw new Error("authentication has been failed!");
  //       })
  //       .then((resObject) => {
  //         setUser(resObject.user);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  //   try {
  //     fetchUser();
  //   } catch (err: unknown) {
  //     if (err instanceof Error) {
  //       console.error(err.message);
  //     }
  //   }
  // }, []);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  console.log(user);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
