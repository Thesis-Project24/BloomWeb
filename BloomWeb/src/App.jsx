// src/App.js
import * as React from "react";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import About from "./assets/Components/About/About";
import Articles from "./assets/Components/Articles/Articles";
import Doctors from "./assets/Components/Doctors/Doctors";
import Forum from "./assets/Components/Forum/Forum";
import Landing from "./assets/Components/HomePage/Landing";
import NavBar from "./assets/Components/NavBar/Navbar";
import Signin from "./assets/Components/Signin/Signup/Signin";
import Signup from "./assets/Components/Signin/Signup/Signup";
import Footer from "./assets/Components/NavBar/Footer";

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/signin" element={<Signin />}/>
          <Route path="/signin/signup" element={<Signup />}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
