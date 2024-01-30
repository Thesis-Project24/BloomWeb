import { useMutation, useQuery } from "react-query";

import axios from "axios";


// { All Doctors fetcher }

export const useFetchDoctors = () => {
    return useQuery("Doctors", async () => {
      const response = await axios.get(
        `http://localhost:3000/doctors/getAll`
      );
      const data = response.data;
      return data;
    });
  };