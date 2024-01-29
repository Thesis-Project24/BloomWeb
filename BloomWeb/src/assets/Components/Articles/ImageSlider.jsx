import React, { useState } from "react";
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
const ImageSlider = () => {
  const slides = [
    {
      url: "https://i.pinimg.com/236x/07/d0/0e/07d00e32a47d8c918a401cb0cf3be966.jpg",
    },
    {
      url: "https://i.pinimg.com/236x/72/e1/17/72e117538c1fe1a0e9c082278d3aed30.jpg",
    },
    {
      url: "https://i.pinimg.com/236x/5f/7f/70/5f7f70b54ee07e1a90f5a10cc7e66474.jpg",
    },
    {
      url: "https://i.pinimg.com/736x/6e/7c/98/6e7c9883c6a5b02ac3a9e6158e9e8106.jpg",
    },
  ];
  const [currentIndex,setCurrentIndex]=useState(0)
  const prevSlide =()=>{
    const isFirstSlide = currentIndex===0
    const nexIndex = isFirstSlide ? slides.length-1 : currentIndex -1
    setCurrentIndex(nexIndex)
  }
  const nextSlide =()=>{
    const isLastSlide = currentIndex===slides.length-1
    const nexIndex = isLastSlide ? 0 : currentIndex +1
    setCurrentIndex(nexIndex)
  }

  return (
    <div className=" px-4 py-16 flex align-middle justify-center relative group">
      <div className="realtive">
        <img className="w-[300px] h-[300px] rounded-2xl bg-center bg-cover duration-500" src={slides[currentIndex].url} alt="" />
      </div>
      <div className="flex  ">
      {/* left Arrow */}
      <div className="hidden group-hover:block absolute top-[180px] left-[530px] rounded-full bg-white text-[#A78A6E] cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
      </div>
      {/* Right Arrow */}
      <div  className="hidden group-hover:block absolute top-[180px] right-[530px]  rounded-full bg-white text-[#A78A6E] cursor-pointer ">
      <BsChevronCompactRight onClick={nextSlide}  size={30}/>
      </div>
      </div>
    </div>
  );
};

export default ImageSlider;
