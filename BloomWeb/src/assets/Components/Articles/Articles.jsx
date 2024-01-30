import React, { useEffect, useState } from "react";
import { useFetchArticles } from "../../Api/Articles";
import ImageSlider from "./ImageSlider";
import Article from "./Article";
import { useNavigate } from "react-router-dom";

const Articles = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError, isSuccess, refetch } = useFetchArticles();
  const [filterdData, setFiltredData] = useState(null); // Initialize as null
  const [searchKeyword, setSearchKeyword] = useState("");
 
  useEffect(() => {
    // if (data && Array.isArray(data)) 

    if (searchKeyword) {
      const lowerCaseKeyword = searchKeyword.toLowerCase();
      setFiltredData(
        data.filter(
          (article) =>
            article.title.toLowerCase().includes(lowerCaseKeyword) ||
            article.content.toLowerCase().includes(lowerCaseKeyword) ||
            article.author.first_name
              .toLowerCase()
              .includes(lowerCaseKeyword) ||
            article.author.last_name.toLowerCase().includes(lowerCaseKeyword)
        )
      );
    } else {
      setFiltredData(data);
      // }
    }
  }, [searchKeyword, data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error loading Articles</p>;
  }

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
              placeholder="Search for your article"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* carroussel section */}
      {/* <ImageSlider/> */}

      <div className="flex justify-center ">
        {/* filter section */}
        <div className="p-[20px] border rounded-2xl">
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
            <li className="hover:underline me-4 md:me-6 shadow-sm text-sm font-medium text-gray-50 sm:mb-0 cursor-pointer">
              For You
            </li>
            <li
              className="hover:underline me-4 md:me-6 shadow-sm cursor-pointer"
              onClick={() => navigate("/savedArticles")}
            >
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
      <div>
        {/* Article */}
        {filterdData &&
          filterdData.map((ele) => {
            return (
              <Article
                article={{
                  id: ele.id,
                  content: ele.content,
                  title: ele.title,
                  createdAt: ele.createdAt,
                }}
                author={{
                  id: ele.authorId,
                  doctorName: ele.author.first_name,
                  doctorLastName: ele.author.last_name,
                  doctorProfilePicture: ele.author.profile_picture,
                  doctorSpecialty: ele.author.specialty,
                }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Articles;
