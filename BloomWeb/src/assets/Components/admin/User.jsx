
import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const User = ({users,onDelete}) => {
   
  return (
    <div className="flex m-[25px] border rounded-2xl p-[10px] justify-between">
    <img
      className="w-[50px] h-[50px] rounded-full mr-[10px] "
      src={users.profile_picture }
      alt={users.first_Name}
    />
    <div className="cursor-default">
      <p  >
        Name :{" "}
        <span>
          {" "}
          {users.first_Name} {users.last_Name}{" "}
        </span>
      </p>
      <p className="">
      Age : <span>{users.age} </span>
      </p>
      <p className="">
        <span>
          {users.first_Name}'s Email : {users.email}
        </span>
      </p>
      <p className="">
        {" "}
        <span>{users.first_Name}'s Adress :Sousse , Chattt Mariem Sousse</span>
      </p>
    </div>
    <div className="hover:text-[red]"> <FaTrashAlt size={24} onClick={onDelete}/></div>
  </div>
  )
}

export default User
