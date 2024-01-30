import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { useFetchDoctors } from "../../Api/Doctors";
import Doctor from "./Doctor";
import AppStore from "../Download/AppStore";
import PlayStore from "../Download/PlayStore";

const Doctors = () => {
  const { data, isLoading, isError, isSuccess, refetch } = useFetchDoctors();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filterdData, setFiltredData] = useState(null);
  console.log(data);

  useEffect(() => {
    // if (data && Array.isArray(data))

    if (searchKeyword) {
      const lowerCaseKeyword = searchKeyword.toLowerCase();
      setFiltredData(
        data.filter(
          (doctor) =>
          // console.log(doctor,"from the inside")
          doctor.first_name.toLowerCase().includes(lowerCaseKeyword)||
          doctor.last_name.toLowerCase().includes(lowerCaseKeyword)||
          doctor.phone_number.includes(lowerCaseKeyword)||
          doctor.address[0].includes(lowerCaseKeyword)
          )
          );
        } else {
      setFiltredData(data);
    }
  }, [searchKeyword, data]);
  // console.log(filterdData,"ddsdsdsdsdsdsd");
  return (
    <div>
       {/* searchBar section */}
       <div className="flex items-center justify-start p-5">
        <div className="rounded-lg p-5">
          <div className="flex border rounded-lg border-gray-200">
            <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg p-5">
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="pointer-events-none absolute w-5 fill-gray-500 transition"
              >
                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
              </svg>
            </div>
            <input
              type="text"
              className="w-full max-w-[1600px] pl-2 text-base font-semibold outline-0 rounded bg-transparent"
              placeholder="Search for your Doctor"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
          </div>
        </div>
      </div>
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
      <div>
        {isSuccess && filterdData && filterdData.map((ele)=>{
          return (
            <Doctor 
            doctor={{
              id:ele.id,
              email: ele.email,
              name : ele.first_name,
              lastName : ele.last_name,
              specialty: ele.specialty,
              picture : ele.profile_picture,
              number: ele.phone_number,
              address:ele.address,
              bio : ele.bio,
              rate : ele.rate,
              review : ele.review,
              gender:ele.gender,
            }}
            /> 
          )
        })}
       </div>
       <div>
      <h1 className="text-[50px] p-10 justify-center flex text-white">Get our App now</h1>
       <div className="flex justify-center gap-[10px]">
       <AppStore/>
       <PlayStore/>
       </div>
       <h3 className="text-[50px] p-11 flex justify-center text-white font- " >Available On both Plateformes </h3>
       </div>
    </div>
  );
};

export default Doctors;
