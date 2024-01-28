import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { IoAddCircleSharp } from 'react-icons/io5'; // Assuming we use React Icons for icons
import { fetchForumPosts } from '../../Api/Forum';




const Forum = () => {
  const navigate = useNavigate();
  const { data: posts, isLoading, error, refetch } = fetchForumPosts();

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">
             <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
           </div>;
  }

  if (error) {
    return <p>Error fetching posts</p>;
  }

  return (
    <div>
      <img className="relative h-24 w-full object-cover" src={require("../assets/vector-1.png")} />
      <div className="bg-gray-100 py-5 h-screen">
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-4">
              <PostForum refetch={refetch} post={post} />
            </li>
          ))}
        </ul>
        <IoAddCircleSharp className="text-4xl text-green-400 mx-auto mb-10" onClick={() => navigate("/CreatePost")} />
      </div>
    </div>
  );
};

export default Forum;
