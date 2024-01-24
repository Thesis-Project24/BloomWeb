import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-evenly p-[30px] mt-[10px]  ">
        <h1>Bloom</h1>
        <ul className="flex justify-stretch space-x-[40px]">
          <Link to={"/"}>
          <li  className="mr-4  hover:text-gray-500">Home</li>
          </Link>
          <Link to={"/doctors"}>
          <li className="mr-4   hover:text-gray-500">Doctors</li>
          </Link>
          <Link to={"/Forum"}>
          <li className="mr-4   hover:text-gray-500">Forum</li>
          </Link>
          <Link to={"/Articles"}>
          <li className="mr-4   hover:text-gray-500">Artices</li>
          </Link>
          <Link to={"/About"}> 
          <li className="mr-4   hover:text-gray-500">About Us</li>
          </Link>
        </ul>
        <ul className="flex justify-stretch space-x-[40px]">
          <Link to={"/signin"}>
            <li className="mr-4  hover:text-gray-500">SignIn</li>
            </Link>
            <Link to={"/signin/signup"} >
            <li className="mr-4   hover:text-gray-500">SignUp</li>
            </Link>
        </ul>
      </div>
    
    </nav>
  );
};

export default Navbar;
