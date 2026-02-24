import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
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

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
         <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/about-us" element={<About />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
