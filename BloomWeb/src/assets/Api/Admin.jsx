import { useMutation, useQuery } from "react-query";

import axios from "axios";

// {all Users fetcher } //

export const useFetchUsers = () => {
  return useQuery("users", async () => {
    const response = await axios.get(`http://localhost:3000/users`);
    const data = response.data;
    return data;
  });
};

export const useFetchOneUser = () => {
  return useQuery("user", async () => {
    const response = await axios.get(
      `http://localhost:3000/users/dAZy1LsxPSUkiud6gRkKsjWpGJ53`
    );
    const data = response.data;
    return data;
  });
};

export const DeleteUser = ()=>{
  const mutationFn = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/forum/comments/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting User', error);
      throw error;
    }
  };
  return useMutation(mutationFn);
}
