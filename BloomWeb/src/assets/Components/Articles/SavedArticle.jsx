import React from 'react'
import { Link } from "react-router-dom";
const SavedArticle = ({article, author}) => {
    
    const truncatedContent = article.content.substring(0, 150);
    return (
        <div className="max-w-2xl mx-auto my-8 p-8 bg-[#F3F0EA] rounded-lg shadow-xl ">
          <div className="flex items-center mb-4">
            <img
              src={author.doctorProfilePicture}
              alt={author.doctorName}
              className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
            />
            <div className="ml-4">
              <p className="text-sm font-semibold text-gray-700">
                {author.doctorName} {author.doctorLastName}
              </p>
              <p className="text-xs text-gray-500">{article.createdAt}</p>
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
           <p className="text-gray-800 leading-7">
             {truncatedContent}...
            {article.content.length > 200 && (
              <>
                <Link to={`/article/${article.id}`} className="text-blue-500">
                  Read More
                </Link>
              </>
            )} 
          </p> 
          <div className="flex justify-between"> 
          <p className=" me-4 md:me-6 cursor-pointer mt-[10px]">
            <span className="shadow-inner border rounded-3xl p-[2px] hover:bg-gray-400 transition-all">
              {author.doctorSpecialty}
            </span>
          </p>
          {/* <CiSaveDown2 className="mt-[45px] cursor-pointer hover:bg-gray-200"
          onClick={handleSaveArticle}
          /> */}
          </div>
        </div>
      );
    };

export default SavedArticle
