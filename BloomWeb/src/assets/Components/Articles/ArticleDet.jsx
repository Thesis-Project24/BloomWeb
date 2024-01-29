import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchOneArticle } from '../../Api/Articles';

const ArticleDet = () => {
  const { id } = useParams(); 
  const { data, isLoading, isError } = useFetchOneArticle(id);
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

//   const article = data; 

  return (
    <div className="max-w-2xl mx-auto my-8 p-8 bg-white rounded-lg shadow-xl ">
        <p className="text-2xl text-gray-500 absolute right-[705px] top-[130px]">{data.article.createdAt}</p>
    <div className="flex items-center mb-4">
      <img
        src={data.article.author.profile_picture}
        alt={data.article.author.first_name}
        className="w-[250px] h-[250px] rounded-full object-cover border-2 border-blue-500"
      />
      <div className="ml-4">
        <p className="text-2xl font-bold text-gray-700">
         Dr {data.article.author.first_name}
          </p>
         <p className="text-xl font-bold text-gray-700 pl-[35px]  ">
          {data.article.author.last_name}
        </p>
      </div>
    </div>
    <h1 className="text-2xl font-bold mb-4">{data.article.title}</h1>
    <p className="text-gray-800 leading-7">
     {data.article.content}
      
    </p>
    <p className=" me-4 md:me-6 cursor-pointer mt-[10px]">
      <span className="shadow-inner border rounded-3xl p-[2px] hover:bg-gray-400 transition-all text-[#729384]">
        {data.article.author.specialty}
      </span>
    </p>
  </div>
  );
};

export default ArticleDet;
