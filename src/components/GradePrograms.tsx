import React from "react";
import saxophone from "../assets/img/male-teenage-pupil-playing-drums-in-music-lesson-2022-03-30-20-23-47-utc.jpg";
import saxophone1 from "../assets/img/nursery-school-children-with-man-teacher-sitting-o-2022-01-19-00-04-00-utc.jpg";
import saxophone2 from "../assets/img/adorable-schoolgirl-and-her-music-teacher-playing-2021-12-16-00-26-04-utc.jpg";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import Button from "./Button";

// Dummy Data for Numbers
const numbers = [
  { value: 100, label: "Awards Won" },
  { value: 500, label: "Our Experts" },
  { value: 250, label: "Field Expertise" },
  { value: 50, label: "Locations" },
];

// Dummy Data for Programs
const programs = [
  {
    title: "Preschool",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: saxophone, // Replace with actual image path
  },
  {
    title: "Schooler",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: saxophone1, // Replace with actual image path
  },
  {
    title: "Teenager",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: saxophone2, // Replace with actual image path
  },
];

const GradePrograms: React.FC = () => {
  return (
    <>
      <div className="relative">
        {/* Background Image Section */}
        <div
          className="bg-cover bg-center h-auto md:h-96"
          style={{
            backgroundImage: `url(https://www.musictoyourhome.com/wp-content/uploads/2023/06/is-it-hard-to-play-cello.jpg)`, // Replace with your image path
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-70" />{" "}
          {/* Adjust opacity as needed */}
          {/* Content */}
          <div className="container mx-auto p-8 relative z-10 flex flex-col items-center md:flex-row md:justify-center lg:justify-center gap-8">
            {numbers.map((item, index) => (
              <div
                key={index}
                className="text-center md:w-1/4 flex flex-col items-center lg:justify-center lg:h-80"
              >
                <span className="block text-4xl text-icon-color mb-2 font-serif font-bold">
                  <CountUp end={item.value} duration={2} suffix="+" />
                </span>
                <p className="text-gray-300 font-PlusJakartaSans text-[20px]">
                  {item.label}
                </p>{" "}
                {/* Change text color for better visibility */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" p-8 bg-white lg:p-20">
        <div className=" ">
          {/* Grade Programs Section */}
          <div className="text-center mb-10">
            <h3 className="text-lg uppercase tracking-widest mb-10 mt-12 text-icon-color font-serif font-bold">
              Our Programs
            </h3>
            <h2 className="text-4xl  mb-4 font-serif font-bold lg:mb-14">
              Grade Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white  rounded-lg overflow-hidden transition-transform hover:scale-105 text-center lg:text-left"
              >
                <img
                  src={program.imgSrc}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 font-serif">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 font-PlusJakartaSans">
                    {program.description}
                  </p>
                  <Link
                    to={""}
                    className={` font-semibold font-PlusJakartaSans uppercase text-icon-color transform hover:-translate-y-2 transition-transform duration-300 text-[15px] ${
                      index == 0 ? "text-icon-color" : ""
                    }`}
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Button className="hover:bg-black text-white uppercase bg-icon-color  mb-8  w-full lg:w-72">
            See All Programs
          </Button>
        </div>
      </div>
    </>
  );
};

export default GradePrograms;
