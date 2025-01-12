import React from "react";
import Image from "next/image";
import Container from "../container";
import PhotoRender from "./components/PhotoRender.jsx";
const PhotoPage = () => {

  return (
    <div className="mx-auto px-4">
      <Container className="pb-10 sm:pb-10 md:pb-[50px] lg:pb-[70px] pt-0 sm:pt-0 md:pt-5 lg:pt-9">
      <h1 className=" mb-6 sm:mb-6 md:mb-[26px] lg:mb-9 font-orpheusDisplay text-primary font-bold text-[34px] sm:[34px] md:text-4xl lg:text-[46px] text-center">
        Photos
      </h1>
      <PhotoRender/>
    </Container>
    </div>
  );
};

export default PhotoPage;
