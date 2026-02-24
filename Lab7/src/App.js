import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Landing from "./pages/Landing";
import Footer from "./pages/Footer";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route
          path="/login"
          element={
            <Login
              username={username}
              password={password}
              setPassword={setPassword}
              setUserName={setUserName}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        {isLoggedIn && (
          <Route
            path="/dashboard"
            element={
              <Dashboard
                username={username}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          ></Route>
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
