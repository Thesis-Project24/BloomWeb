import { getIdToken } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { GrUserAdmin } from "react-icons/gr";

import { Link } from "react-router-dom";
import { useFetchOneUser } from "../../Api/Admin";

const Navbar = () => {
 
  const {data,isLoading,isError,refetch}= useFetchOneUser()
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error loading Articles</p>;
  }
const role = data.role
 
  // console.log();
  // const rolee=  JSON.parse(user)
  // console.log(rolee.role);
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
          <li className="mr-4   hover:text-gray-500">Appointment</li>
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
         {role==="admin" && <ul className="mr-4   hover:text-gray-500 rounded-full">
          <Link  to={"/admin"} >
          <GrUserAdmin/>
          </Link>
        </ul>}
      </div>
    
    </nav>
  );
};

export default Navbar;
