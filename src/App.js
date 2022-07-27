import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Navbar from "./shared/Navbar/Navbar";
import "./App.css";
import Login from "./component/Authentication/Login/Login";
import Notify from "./shared/Notify/Notify";
import Register from "./component/Authentication/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Notify />
      </AuthProvider>
    </div>
  );
}

export default App;
