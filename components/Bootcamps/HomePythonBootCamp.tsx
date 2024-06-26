"use client";
import React from "react";
import { ThreeDCardDemo } from "./ThreeDCardDemo";
import { BsCameraReels } from "react-icons/bs";
import { LuAirplay } from "react-icons/lu";
import { ImEmbed2 } from "react-icons/im";

const HomePythonBootCamp = () => {
  return (
    <div className="pl-8 pr-8 md:pl-28 md:pr-32">
      <h2 className="flex  justify-center gap-x-5 text-[30px] sm:text-[40px] md:text-[60px] lg:text-[70px] pt-2 font-bold leading-normal">
        <span>
          {"Python".split("").map((child, idx) => (
            <span className={"hoverText"} key={idx}>
              {child}
            </span>
          ))}
        </span>
        <span>
          {"Bootcamp".split("").map((child, idx) => (
            <span className={"hoverText"} key={idx}>
              {child}
            </span>
          ))}
        </span>
      </h2>
      <div className="flex flex-col justify-normal xl:flex-row w-full h-full  xl:justify-around">
        <span className="n -mt-12 xl:mt-0">
          <ThreeDCardDemo />
        </span>
        <span className=" xl:w-1/2 hidden xl:inline xl:mt-10 mb-10">
          <div className="space-y-6 sm:pl-10 sm:pr-5 2xl:pr-10 xl:relative xl:top-10 lg:pl-10 lg:pr-20">
            <h4 className="font-semibold text-3xl pt-6">About Course</h4>
            <p>
              Our 5-Day Python Bootcamp is designed to provide an{" "}
              <span className="font-bold"> immersive learning</span> experience
              in Python programming. Led by industry experts
            </p>
            <span className="font-bold">Mohit Manuja,</span> Software Engineer
            at <span className="font-bold">Google</span>, and{" "}
            <span className="font-bold">Rajat Kumar</span>, Software Engineer at{" "}
            <span className="font-bold">Intuit</span>
            <p>
              This program aims to equip participants with{" "}
              <span className="font-bold">
                {" "}
                essential Python skills, problem-solving techniques
              </span>{" "}
              and a strong foundation in algorithms and data structures. This
              bootcamp is perfect for beginners and those looking to enhance
              their coding abilities for technical interviews, competitive
              programming, and{" "}
              <span className="font-bold">
                real-world software development.
              </span>
            </p>
            <div className="hidden 2xl:grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-8">
              <div className="border-2  hover:cursor-pointer transition-all duration-300 p-3 md:p-4 border-opacity-30 rounded-md">
                <div className="fl-ic gap-2">
                  <div className="min-w-12 min-h-12 rounded-full dark:bg-black bg-white border border-black border-opacity-20 bg-border-dlc fl-ic justify-center text-lg">
                    <BsCameraReels />
                  </div>
                  <div className="space-y-2">
                    <p className="text-base text-gray-500 dark:text-gray-400 font-medium">
                      Start Date
                    </p>
                    <p className="text-base font-medium">19 June 2024</p>
                  </div>
                </div>
              </div>

              <div className="border-2  hover:cursor-pointer transition-all duration-300 p-3 md:p-4 border-opacity-30 rounded-md">
                <div className="fl-ic gap-2">
                  <div className="min-w-12 min-h-12 rounded-full dark:bg-black bg-white border border-black border-opacity-20 bg-border-dlc fl-ic justify-center text-lg">
                    <LuAirplay />
                  </div>
                  <div className="space-y-2">
                    <p className="text-base text-gray-500 dark:text-gray-400 font-medium">
                      Duration
                    </p>
                    <p className="text-base font-medium">5 Days</p>
                  </div>
                </div>
              </div>

              <div className="border-2  hover:cursor-pointer transition-all duration-300 p-3 md:p-4 border-opacity-30 rounded-md">
                <div className="fl-ic gap-2">
                  <div className="min-w-12 min-h-12 rounded-full dark:bg-black bg-white border border-black border-opacity-20 bg-border-dlc fl-ic justify-center text-lg">
                    <ImEmbed2 />
                  </div>
                  <div className="space-y-2">
                    <p className="text-base text-gray-500 dark:text-gray-400 font-medium">
                      Class Timings (Weekdays)
                    </p>
                    <p className="text-base font-medium">9 to 10 PM IST </p>
                  </div>
                </div>
              </div>

              <div className="border-2  hover:cursor-pointer transition-all duration-300 p-3 md:p-4 border-opacity-30 rounded-md">
                <div className="fl-ic gap-2">
                  <div className="min-w-12 min-h-12 rounded-full dark:bg-black bg-white border border-black border-opacity-20 bg-border-dlc fl-ic justify-center text-lg">
                    <ImEmbed2 />
                  </div>
                  <div className="space-y-2">
                    <p className="text-base text-gray-500 dark:text-gray-400 font-medium">
                      Class Timings (Weekend)
                    </p>
                    <p className="text-base font-medium">3 to 5 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default HomePythonBootCamp;
