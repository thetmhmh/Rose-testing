"use client";
import React, { useState } from "react";
import Image from "next/image";
import {HiArrowLongLeft, HiArrowLongRight,HiChevronLeft, HiChevronRight, HiXMark } from "react-icons/hi2";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import photo1 from "@/assets/images/photo-page/rosie-Concept-Photo.jpeg";
import photo2 from "@/assets/images/photo-page/APT-Concept-Photo.jpeg";
import photo3 from "@/assets/images/photo-page/rose-dazed-korea.jpg";
import photo4 from "@/assets/images/photo-page/vogue-hong-kong.jpg";
import photo5 from "@/assets/images/photo-page/ROSE-PAPER-MAGAZINE.jpeg";
import photo6 from "@/assets/images/photo-page/ROSE-for-BuzzFeed-Puppy-Interview.jpeg";
import photo7 from "@/assets/images/photo-page/image 7.png";
import photo8 from "@/assets/images/photo-page/ROSE-x-Sulwhasoo.jpeg";
import photo9 from "@/assets/images/photo-page/ROSE-x-Yves-Saint-Laurent-Eyewear2jpeg.jpeg";
import photo10 from "@/assets/images/photo-page/rose-w-korea.jpg";
import photo11 from "@/assets/images/photo-page/rose-elle-korea.jpg";
import photo12 from "@/assets/images/photo-page/ROSE-for-2024-Vanity-Fair-Oscar-Party.jpeg";
import photo13 from "@/assets/images/photo-page/ysl-rose.jpg";
import photo14 from "@/assets/images/photo-page/ROSE-R-SPECIAL-EDITION-PHOTOBOOK.jpeg";
import photo15 from "@/assets/images/photo-page/ROSE-R-SPECIAL-EDITION-PHOTOBOOK2.jpeg";
import photo16 from "@/assets/images/photo-page/ROSE-x-by-O-Oi-Fall.jpeg";
import photo17 from "@/assets/images/photo-page/ROSE-x-O-Oi-COLLECTION.jpeg";
import photo18 from "@/assets/images/photo-page/rose-i-d-magazine-special-edition-cover.jpg";
import photo19 from "@/assets/images/photo-page/rose-gq-korea.jpg";
import photo20 from "@/assets/images/photo-page/ROSE-at-the-Sulwhasoo.jpeg";
import photo21 from "@/assets/images/photo-page/Rose-for-Mastermind-Magazine.jpeg";
import photo22 from "@/assets/images/photo-page/Vogue-Korea.jpeg";
import photo23 from "@/assets/images/photo-page/ROSE-for-VOGUE-Australia-ELVIS.jpeg";
import photo24 from "@/assets/images/photo-page/Rose-for-Dazed-Korea.jpeg";


const mockData = [
  { id: 1, name: "Rosie Album Concept Photo", image: photo1 },
  { id: 2, name: "APT. Concept Photo", image: photo2 },
  { id: 3, name: "ROSÉ For DAZED Korea Spring Edition", image: photo3 },
  { id: 4, name: "Cover of Vogue Hong kong", image: photo4 },
  { id: 5, name: "ROSE For Paper Magazine", image: photo5 },
  { id: 6, name: "ROSE For BuzzFeed Puppy Interview", image: photo6 },
  { id: 7, name: "Rosé x Tiffany & Co", image: photo7 },
  { id: 8, name: "Rosé x Sulwhasooo", image: photo8 },
  { id: 9, name: "ROSE x YSL Eyewear", image: photo9 },
  { id: 10, name: "ROSÉ For W Korea", image: photo10 },
  { id: 11, name: "ROSÉ For Elle Korea", image: photo11 },
  { id: 12, name: "ROSÉ For 2024 Vanity Fair Oscar Party", image: photo12 },
  { id: 13, name: "ROSE For Vogue Korea x YSL Perfume", image: photo13 },
  { id: 14, name: "ROSÉ-R-SPECIAL EDITION PHOTOBOOK", image: photo14 },
  { id: 15, name: "ROSÉ-R-SPECIAL EDITION PHOTOBOOK", image: photo15 },
  { id: 16, name: "ROSÉ x 5252 by O!Oi Fall", image: photo16 },
  { id: 17, name: "ROSÉ x O!Oi Collection", image: photo17 },
  { id: 18, name: "ROSÉ For i-D Special Edition Cover", image: photo18 },
  { id: 19, name: "ROSÉ For GQ Korea", image: photo19 },
  { id: 20, name: "ROSÉ At The Sulwhasoo Launch Event", image: photo20 },
  { id: 21, name: "Rosé for Mastermind Magazine", image: photo21 },
  { id: 22, name: "Rosé For Vogue Korea YSL", image: photo22 },
  { id: 23, name: "ROSÉ for Vogue Australia", image: photo23 },
  { id: 24, name: "Rosé for Dazed Korea x Saint Laurant", image: photo24 },
];

const itemsPerPage = 12;
const PhotoRender = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const totalPages = Math.ceil(mockData.length / itemsPerPage);

  const currentData = mockData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // useEffect(() => {
  //   if (!isLightboxOpen) {

  //     document.body.style.overflow = "auto";
  //   }
  // }, [isLightboxOpen]);

  const openLightbox = (index) => {
    const fullIndex = (currentPage - 1) * itemsPerPage + index;
    setIsLightboxOpen(true);
    setLightboxIndex(fullIndex);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxIndex(null);

    console.log("Lightbox closed and page reset");
  };


  return (
   <div>
      <div className="grid md:grid-cols-3 gap-5 mb-[50px]  sm:mb-[50px]  md:mb-[30px] lg:mb-[100px] overflow-hidden">
        {currentData.map((item, index) => (
          <div
            onClick={() => openLightbox(index)}
            key={item.id}
            className=" relative group group h-[400px] sm:w-[300px] sm:h-[400px] md:w-full md:h-[296px]  lg:w-full lg:h-[500px] cursor-pointer overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover  "
            />
            {/* <div className="absolute bottom-0 w-full h-full bg-black opacity-0 group-hover:opacity-20 transform translate-y-full group-hover:translate-y-0  transition-transform duration-700 ease-in-out"></div> */}
            <div className="lg:absolute inset-0 bg-black  bg-opacity-50 opacity-0 group-hover:opacity-50  transform translate-y-full group-hover:translate-y-0  transition-all duration-500 ease-in-out"></div>
            <div className="lg:absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <p className="text-white font-orpheusDisplay font-light text-3xl text-center px-5">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-6 gap-[18px] md:gap-[30px] lg:gap-[30px]">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="  text-primary  disabled:text-gray-500 disabled:cursor-not-allowed"
        >
          <HiArrowLongLeft className="w-[18px] h-[18px] sm:w-[18px] sm:h-[18px] md:w-6 md:h-6 lg:w-6 lg:h-6" />
        </button>

        {[...Array(totalPages).keys()].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-[30px] h-[30px] text-[16px] sm:w-[30px] sm:h-[30px] sm:text-[16px] md:w-[50px] md:h-[50px] md:text-2xl lg:w-[50px] lg:h-[50px]  lg:text-2xl font-twentieth font-semibold flex justify-center items-center rounded-full gap-[30px] ${
              currentPage === index + 1
                ? "bg-primary text-white"
                : "bg-transparent text-primary hover:text-gray-500"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className=" text-primary   disabled:text-gray-500 disabled:cursor-not-allowed"
        >
          <HiArrowLongRight className="w-[18px] h-[18px] sm:w-[18px] sm:h-[18px] lg:w-6 lg:h-6 " />
        </button>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          open={isLightboxOpen}
          close={() => {
            console.log("Lightbox onClose event");
            closeLightbox();
          }}
          index={lightboxIndex}
          slides={mockData.map((photo) => photo.image)}
          render={{
            iconPrev: () => <HiChevronLeft className="w-10 h-10 sm:w-10 sm:h-10 lg:w-[70px] lg:h-[70px] text-white" />,
            iconNext: () => <HiChevronRight className="w-10 h-10 sm:w-10 sm:h-10  lg:w-[70px] lg:h-[70px] text-white"  />,
            iconClose: () => <HiXMark className="w-10 h-10 sm:w-10 sm:h-10  lg:w-[70px] lg:h-[70px] text-white"/>
          }}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}
         
          
        />

      
      )}
    
    </div>
  );
};

export default PhotoRender;
