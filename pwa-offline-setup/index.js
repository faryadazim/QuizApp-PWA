import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import swDev from "./swDev";
import User from "./User";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
// import your route components too
import { Link } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <nav className="App">
      <Link to="/">Home</Link> | <Link to="/user">User</Link> |
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<App />}></Route>

      <Route path="/about" element={<About />}></Route>

      <Route path="/user" element={<User />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

swDev();
