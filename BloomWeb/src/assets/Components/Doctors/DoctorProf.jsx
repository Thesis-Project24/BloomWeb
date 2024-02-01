import React from 'react'
import { useParams,Link } from 'react-router-dom';
import { useFetchOneDoctors } from '../../Api/Doctors';
import { PhoneOutlined, HomeOutlined } from "@ant-design/icons";
import { IoMale, IoFemale,IoMailUnreadOutline  } from "react-icons/io5";
import PlayStore from '../Download/PlayStore';
import AppStore from '../Download/AppStore';

const DoctorProf = () => {
    const { id } = useParams();
    const {data,isLoading,isError,isSuccess,refetch}=useFetchOneDoctors(id) 
    
    if (isLoading) {
        return (
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
          </div>
        );
      }
      
        if (isError) {
      
          return <p>Error loading Article</p>;
        }

console.log(data);
  return (
    <div>
     {/* filter section */}
     <div className="flex justify-center mt-[50px] ">
      <div className="p-[20px] border rounded-2xl">
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
          <Link to={`/doctors`}>
          <li className="hover:underline me-4 md:me-6 shadow-sm text-sm font-medium text-gray-50 sm:mb-0 cursor-pointer">
            All Doctors
          </li>
          </Link>
          <Link to={`/doctors/Psychiatry`}>
          <li className="hover:underline me-4 md:me-6 shadow-sm cursor-pointer">
            Psychiatry
          </li>
          </Link>
          <Link to={`/doctors/psychology`}>
          <li className="hover:underline me-4 md:me-6 shadow-sm cursor-pointer">
            psychology
          </li>
          </Link>
          <Link  to={`/doctors/psychology`}>
          <li className="hover:underline me-4 md:me-6 shadow-sm cursor-pointer">
            Psychoneurosis
          </li>
          </Link>
          <Link>
          <li className="hover:underline me-4 md:me-6 shadow-sm cursor-pointer">
            Neuropsychiatry
          </li>
          </Link>
          <li className="hover: me-4 md:me-6 shadow-sm cursor-pointer">
            {">"}
          </li>
        </ul>
      </div>
    </div>
    <div className='felx justify-between'>
    <div className="max-w-2xl mx-auto my-8 p-8  rounded-lg shadow-xl  cursor-default" >
      <div className="flex gap-[25px]">
        <img
          className="w-[150px] h-[150px] rounded-xl object-cover border-2 border-gray-500"
          src={data.profile_picture}
          alt={data.first_name}
        />
        <div className="flex p-[5px] ">
          <div >
            <p className="text-white font-serif mt-[25px] cursor-default ">
              Dr. {data.first_name} {data.last_name}
            </p>
            <p className="underline text-[#F3F0EA]  font-thin cursor-default">
              {data.specialty}
            </p>
            <p className="text-sm hover:underline hover:text-[white] cursor-default mt-[15px] flex gap-[10px]">
            <IoMailUnreadOutline /> {data.email}
            </p>
            <div>
              <p className="mt-[10px] text-white">About:</p>
              <p>{data.bio}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-lg  justify-center items-center mt-[50px] shadow-xl  p-[10px]">
  <ul className="grid grid-cols-3">
    <li className="items-center gap-2 col-span-1 flex">
      <PhoneOutlined /> {data.phone_number}
    </li>
    <li className="items-center gap-2 col-span-2 flex">
      <HomeOutlined /> {data.address}
    </li>
    <li className="items-center gap-2 col-span-3 flex">
      {(data.gender === "male" && <IoMale />) || (data.gender === "female" && <IoFemale />)}
    </li>
  </ul>
</div>
</div>
<div>
      <h1 className="text-[50px] p-10 justify-center flex text-white">Get our App now to book Your Appointement</h1>
       <div className="flex justify-center gap-[10px]">
       <AppStore/>
       <PlayStore/>
       </div>
       <h3 className="text-[50px] p-11 flex justify-center text-white font- " >Available On both Plateformes </h3>
       </div>
</div>
</div>
  )
}

export default DoctorProf
