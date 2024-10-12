import React from "react";
import instructor1 from "../assets/img/portrait-of-muslim-girl-in-hijab-playing-piano-2022-07-06-17-53-04-utc.jpg";
import instructor2 from "../assets/img/happy-young-man-in-eyeglasses-and-casualwear-sitti-2021-12-16-00-28-51-utc.jpg";
import instructor3 from "../assets/img/happy-young-teacher-of-music-with-guitar-sitting-i-2021-10-27-21-38-47-utc.jpg";
import instructor4 from "../assets/img/a-music-teacher-conducts-a-lesson-on-playing-a-mus-2022-07-06-17-54-29-utc.jpg";
import Button from "./Button";

const InstructorsSection: React.FC = () => {
  const instructors = [
    { name: "Alfredo Torres", role: "Guitar Instructor", image: instructor1 },
    { name: "Ruth Stewart", role: "Vocal Instructor", image: instructor2 },
    { name: "Hannah Morales", role: "Violin Instructor", image: instructor3 },
    { name: "Juliana Silva", role: "Piano Instructor", image: instructor4 },
  ];

  return (
    <div className=" lg:p-28">
      <div className="container  mx-auto px-4">
        <p className="text-center lg:text-3xl  font-bold mb-8 font-PlusJakartaSans text-[#B38B37] uppercase">
          Our Teachers
        </p>
        <h2 className="text-center lg:text-4xl font-bold mb-8 font-serif text-3xl">
          Meet Our Instructor
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 p-8 lg:p-0">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="text-center relative hover:border-b-4 hover:border-black transition-all duration-300 pb-4 hover:shadow-lg" // Adding border on hover and padding-bottom
            >
              <div className="overflow-hidden rounded-lg">
                {" "}
                {/* Ensure the image stays within its container */}
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full object-cover rounded-lg mb-4 transform transition-transform duration-300 hover:scale-105" // Scaling on hover
                />
              </div>
              <h3 className="text-lg font-bold font-serif">
                {instructor.name}
              </h3>
              <p className="text-gray-600 font-PlusJakartaSans">
                {instructor.role}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          {" "}
          <Button className="hover:bg-black text-white uppercase bg-icon-color  mb-8  w-full lg:w-72">
            See All Instructor
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default InstructorsSection;
