import * as React from "react";
import { Route, Routes, BrowserRouter as Router, Link, Form } from "react-router-dom";
import About from "./assets/Components/About/About";
import Articles from "./assets/Components/Articles/Articles";
import Doctors from "./assets/Components/Doctors/Doctors";
import Forum from "./assets/Components/Forum/Forum";
import Landing from "./assets/Components/HomePage/Landing";
import NavBar from "./assets/Components/NavBar/Navbar";
import Signin from "./assets/Components/Signin/Signup/Signin";
import Signup from "./assets/Components/Signin/Signup/Signup";
import Footer from "./assets/Components/NavBar/Footer";
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import ArticleDet from "./assets/Components/Articles/ArticleDet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
        <NavBar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:id" element={<ArticleDet/>}/>
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/signin" element={<Signin />}/>
          <Route path="/signin/signup" element={<Signup />}/>
        </Routes>
      <Footer/>
    </Router>
    </QueryClientProvider> 
  );
}

export default App;
