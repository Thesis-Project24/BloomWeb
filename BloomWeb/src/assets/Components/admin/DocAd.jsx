import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const DocAd = ({doctors,onDelete}) => {
    // id: ele.id,
    // first_Name: ele.first_name,
    // last_Name: ele.last_name,
    // email: ele.email,
    // address:ele.address,
    // profile_picture: ele.profile_picture,
    // role: ele.role,
    // phone: ele.phone_number,
    // age: ele.age,
    // gender: ele.gender,
    // review : ele.review,
    // specialty: ele.specialty
  return (
    <div className="flex m-[25px] border rounded-2xl p-[10px] justify-between">
    <img
      className="w-[50px] h-[50px] rounded-full mr-[10px] "
      src={doctors.profile_picture}
      alt={doctors.first_Name}
    />
    <div className="cursor-default">
      <p  >
        Name :{" "}
        <span>
          {" "}
          {doctors.first_Name} {doctors.last_Name}{" "}
        </span>
      </p>
      <p className="">
      specialty : <span>{doctors.specialty} </span>
      </p>
      <p className="">
        <span>
          {doctors.first_Name}'s Email : {doctors.email}
        </span>
      </p>
      <p className="">
        {" "}
        <span>{doctors.first_Name}'s Adress : {doctors.address}</span>
      </p>
    </div>
    <div className="hover:text-[red]"> <FaTrashAlt size={24} onClick={onDelete}/></div>
  </div>
  )
}

export default DocAd
