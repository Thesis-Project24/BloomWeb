import React, { useState } from 'react';
import { FaRegKeyboard } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { createForumPost } from '../../Api/Forum';

const CreatePost = ({ post,refetch}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const { mutate: createPost } = createForumPost();

    const handleSubmit = () => {
        if (title.trim() && content.trim()) {
            const postData = {
                title,
                content,
                authorId: "zi8ll3WpjMQe11hIiZEfpZpXz672",
            };

            createPost(postData, {
                onSuccess: () => {
                    setTitle('');
                    setContent('');
                    toast.success("Post created successfully!");
                    refetch()
                },
                onError: (error) => {
                    console.error('Error creating post', error);
                    toast.error("Error creating post.");
                }
            });
        } else {
            toast.error("Title and content are required.");
        }
    };

    return (
        <div className= " lg:fixed md:fixed lg:max-w-[330px] md:max-w-[250px] min-h-[390px]    bg-white bg-opacity-50  w-full mx-auto p-6 rounded-lg shadow-lg border border-gray-300 backdrop-filter backdrop-blur-sm">
            <div className="flex items-center mb-4">
                <img src={'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
                <div>
                    <span className="font-semibold text-lg text-gray-800">amine</span>
                </div>
            </div>
            <div className="mb-4">
                <input
                    className="    ring-1 ring-zinc-400  outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50  shadow-md focus:shadow-lg focus:shadow-[#729384]     w-full text-xl font-bold text-gray-800 px-4 py-2 border border-[#F3F0EA]  rounded mb-2 bg-transparent focus:ring-2 focus:ring-[#729384] focus:outline-none"
                    placeholder="Title of the post"µ
  autocomplete="off"
  name="text"

                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
  
                <textarea
                    className="w-full text-base min-h-[100px] text-gray-600 px-4 py-2 border border-[#F3F0EA]  rounded bg-transparent focus:ring-2 focus:ring-[#729384] focus:outline-none"
                    placeholder="Content of the post"
                    rows="4"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <button
                onClick={handleSubmit}
                className="bg-[#F3F0EA]   w-full text-[#729384] rounded-full px-4 py-2 hover:bg-[#ffffff] flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
            >
                <FaRegKeyboard size={20} className="mr-2 text-[#729384]" />
                Create Post
            </button>
        </div>
    );
};

export default CreatePost;
