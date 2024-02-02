import React, { useState } from "react";
import { useFetchUsers } from "../../Api/Admin";
import User from "./User";
import { useFetchDoctors } from "../../Api/Doctors";
import DocAd from "./DocAd";

const AdminDash = () => {
  const [deletedUsers, setDeletedUsers] = useState([]);
  const [deletedDoctor, setDeletedDoctor] = useState([]);
  const {
    data: users,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useFetchUsers();
  const {
    data: doctors,
    isLoad,
    isError: err,
    isSuccess: succc,
  } = useFetchDoctors();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error loading Articles</p>;
  }
  const handleUserDelete = (userId) => {
    setDeletedUsers((prevDeletedUsers) => [...prevDeletedUsers, userId]);
  };
  const handleDoctorDelete = (doctorId) => {
    setDeletedUsers((prevDeletedDoctors) => [...prevDeletedDoctors, doctorId]);
  };


  return (
    <div className="flex flex-row justify-between p-[100px]">
      {/* Users section */}
      <div className="border rounded-md">
        <h2>Patients: {users.length}</h2>
        <div>
          {users &&
            users.map((ele) => (
              !deletedUsers.includes(ele.id) && (
                <User
                  key={ele.id}
                  users={{
                    id: ele.id,
                    first_Name: ele.first_name,
                    last_Name: ele.last_name,
                    email: ele.email,
                    profile_picture: ele.profile_picture,
                    role: ele.user,
                    phone: ele.phone_number,
                    age: ele.age,
                  }}
                  onDelete={() => handleUserDelete(ele.id)}
                />
              )
            ))}
        </div>
      </div>

      {/* Doctors section */}
      <div className="border rounded-md">
        <h2>Doctors: {doctors.length}</h2>
        <div>
          {doctors &&
            doctors.map((ele) => (
              <DocAd
                key={ele.id}
                doctors={{
                  id: ele.id,
                  first_Name: ele.first_name,
                  last_Name: ele.last_name,
                  email: ele.email,
                  address: ele.address,
                  profile_picture: ele.profile_picture,
                  role: ele.role,
                  phone: ele.phone_number,
                  age: ele.age,
                  gender: ele.gender,
                  review: ele.review,
                  specialty: ele.specialty,
                }}
                onDelete={() => handleDoctorDelete(ele.id)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
