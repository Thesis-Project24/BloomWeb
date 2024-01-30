import React from "react";
import { Link } from "react-router-dom";
import { PhoneOutlined, HomeOutlined } from "@ant-design/icons";
import { IoMale, IoFemale,IoMailUnreadOutline  } from "react-icons/io5";

const Doctor = ({ doctor }) => {
  //
  // id:ele.id,
  // email: ele.email,
  // name : ele.first_name,
  // lastName : ele.last_name,
  // specialty: ele.specialty,
  // picture : ele.profile_picture,
  // number: ele.phone_number,
  // address:ele.address,
  // bio : ele.bio,
  // rate : ele.rate,
  // review : ele.review,
  // gender:ele.gender,
  //
  return (
    <Link to={`/doctors/${doctor.id}`}>
    <div className="max-w-2xl mx-auto my-8 p-8 bg-[#729384] rounded-lg shadow-xl  cursor-pointer" >
      <div className="flex gap-[25px]">
        <img
          className="w-[100px] h-[100px] rounded-full object-cover border-2 border-gray-500"
          src={doctor.picture}
          alt={doctor.name}
        />
        <div className="flex p-[5px] ">
          <div >
            <p className="text-white font-serif mt-[25px] cursor-default ">
              Dr. {doctor.name} {doctor.lastName}
            </p>
            <p className="underline text-[#F3F0EA]  font-thin cursor-default">
              {doctor.specialty}
            </p>
            <p className="text-sm hover:underline hover:text-[white] cursor-default mt-[15px] flex gap-[10px]">
            <IoMailUnreadOutline /> {doctor.email}
            </p>
            <div>
              <p className="mt-[10px]">About:</p>
              <p>{doctor.bio}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-lg  justify-center items-center mt-[50px] shadow-xl  p-[10px]">
  <ul className="grid grid-cols-3">
    <li className="items-center gap-2 col-span-1 flex">
      <PhoneOutlined /> {doctor.number}
    </li>
    <li className="items-center gap-2 col-span-2 flex">
      <HomeOutlined /> {doctor.address}
    </li>
    <li className="items-center gap-2 col-span-3 flex">
      {(doctor.gender === "male" && <IoMale />) || (doctor.gender === "female" && <IoFemale />)}
    </li>
  </ul>
</div>
</div>
</Link>
  );
};

export default Doctor;
