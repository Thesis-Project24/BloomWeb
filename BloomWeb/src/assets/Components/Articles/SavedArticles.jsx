import React from "react";
import { useFetchSavedArticles } from "../../Api/Articles";
import SavedArticle from "./SavedArticle";
import { Link } from "react-router-dom";

const SavedArticles = () => {
  const { data, isLoading, isError, isSuccess, refetch } =
    useFetchSavedArticles();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // console.log(data[0].article, "from saved ");

  return (
    <div>
      <div className="flex justify-center ">
        {/* filter section */}
        <div className="p-[20px] border rounded-2xl">
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
            <Link to={"/articles"}>
              <li className="hover:underline me-4 md:me-6 shadow-sm text-sm font-medium text-gray-50 sm:mb-0 cursor-pointer">
                For You
              </li>
            </Link>
            <li className="hover:underline me-4 md:me-6 shadow-sm cursor-pointer">
              Saved
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
            <li className="hover: me-4 md:me-6 shadow-sm cursor-pointer">
              {">"}
            </li>
          </ul>
        </div>
      </div>
      {/* Article */}
      {data.length>0 &&
        data.map((ele) => {
          return (
            <SavedArticle
              article={{
                id: ele.id,
                content: ele.article.content,
                title: ele.article.title,
                createdAt: ele.article.createdAt,
              }}
              author={{
                id: ele.article.authorId,
                doctorName: ele.article.author.first_name,
                doctorLastName: ele.article.author.last_name,
                doctorProfilePicture: ele.article.author.profile_picture,
                doctorSpecialty: ele.article.author.specialty,
              }}
            />
          );
        })}
    </div>
  );
};

export default SavedArticles;
