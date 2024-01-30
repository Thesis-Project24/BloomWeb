import React from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchForumPosts } from '../../Api/Forum';
import PostForum from './PostForum';
import CreatePost from './createPost';

const Forum = () => {
  const navigate = useNavigate();
  const { data: posts, isLoading, error, refetch } = fetchForumPosts();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <p>Error fetching posts</p>;
  }

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 p-4 gap-4">
      {/* CreatePost component on the left side */}
      <div className="md:col-span-1 lg:col-span-1">
        <CreatePost refetch={refetch} />
      </div>
      <div className="md:col-span-2 lg:col-span-3 ">
        <ul>
          {posts.reverse().map((post) => (
            <li key={post.id} className="mb-4 ">
              <PostForum refetch={refetch} post={post} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Forum;
