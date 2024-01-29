import React from "react";
import { useFetchDoctors } from "../../Api/Doctors";

const Doctors = () => {
  const { data, isLoading, isError, isSuccess, refetch } = useFetchDoctors();
  console.log(data);
  return (
    <div>
    <div className="flex justify-center mt-[50px] ">
      <div className="p-[20px] border rounded-2xl">
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
          <li className="hover:underline me-4 md:me-6 shadow-sm text-sm font-medium text-gray-50 sm:mb-0 cursor-pointer">
            All Doctors
          </li>
          <li className="hover:underline me-4 md:me-6 shadow-sm cursor-pointer">
            Psychiatry
          </li>
          <li className="hover:underline me-4 md:me-6 shadow-sm cursor-pointer">
            psychology
          </li>
          <li className="hover:underline me-4 md:me-6 shadow-sm cursor-pointer">
            Psychoneurosis
          </li>
          <li className="hover:underline me-4 md:me-6 shadow-sm cursor-pointer">
            Neuropsychiatry
          </li>
          <li className="hover: me-4 md:me-6 shadow-sm cursor-pointer">
            {">"}
          </li>
        </ul>
      </div>
    </div>
      <div>
        {}
       </div>
    </div>
  );
};

export default Doctors;
