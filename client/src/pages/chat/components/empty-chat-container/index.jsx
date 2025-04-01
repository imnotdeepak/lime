import React from "react";
import Lottie from "lottie-react";
import animationData from "@/assets/lottie-json";

const EmptyChatContainer = () => {
  return (
    <div className=" flex-1 bg-black md:flex flex-col justify-center items-center hidden duration delay-1000 transition-all">
      <Lottie
        animationData={animationData}
        loop={true}
        style={{
          height: 300,
          width: 300,
          filter: "brightness(0.8) sepia(1) hue-rotate(180deg)",
        }}
      />

      <div className="text-opacity-80 text-white flex flex-col gap-5 items-center mt-10 lg:text-4xl text-3xl transition-all duration-300 text-center">
        <h3 className="poppins-medium">
          Hi<span className="text-green-500">!</span> Welcome to
          <span className="text-[#00c951]"> L</span>
          <span className="text-[#45cd2a]">i</span>
          <span className="text-[#8ace00]">m</span>
          <span className="text-[#cfcf00]">e</span>
          <span className="text-[#ffd000]">!</span>
        </h3>
      </div>
    </div>
  );
};

export default EmptyChatContainer;
