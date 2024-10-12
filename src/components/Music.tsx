import React from "react";
import guitar from "../assets/img/guitar.png";
import guitar2 from "../assets/img/bass-drum.png";
import piano from "../assets/img/flute.png";
import drum from "../assets/img/piano.png";
import violin from "../assets/img/saxophone.png";
import saxophone from "../assets/img/violin.png";
import { Link } from "react-router-dom";

interface ClassItem {
  icon: string; // Update this to string to hold image paths
  title: string;
  description: string;
}

const classItems: ClassItem[] = [
  {
    icon: guitar, // Correctly reference the imported images
    title: "Guitar Class",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: piano,
    title: "Piano Class",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: drum,
    title: "Drum Class",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: violin,
    title: "Violin Class",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: saxophone,
    title: "Saxophone",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: guitar2,
    title: "Saxophone",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const MusicClassSection: React.FC = () => {
  return (
    <div className=" p-8 bg-[#F8F8F8] lg:p-32">
      <div className=" ">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h3 className=" text-lg uppercase tracking-widest mb-2  text-icon-color font-PlusJakartaSans font-[600]">
            Our Class
          </h3>
          <h2 className="text-4xl font-bold mb-4 font-serif">
            Our Music Class
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto font-PlusJakartaSans ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Class Items Grid */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {classItems.map((item, index) => (
            <div
              key={index}
              className={`  p-12 rounded-lg hover:bg-gold-500  transition-colors h-full ${
                index == 0 ? " bg-icon-color" : ""
              }`}
            >
              {/* Icon - Display image */}
              <div className="mb-4">
                <img
                  src={item.icon}
                  alt={`${item.title} Icon`}
                  className="w-24 h-24 "
                />
              </div>

              {/* Title */}
              <h3
                className={`text-2xl font-bold mb-2 font-PlusJakartaSans ${
                  index == 0 ? "text-white" : ""
                }`}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className={`text-gray-600 mb-9 font-PlusJakartaSans ${
                  index == 0 ? "text-white" : ""
                }`}
              >
                {item.description}
              </p>

              {/* Learn More */}
              <Link
                to={""}
                className={`text-gold-500 font-semibold font-PlusJakartaSans uppercase text-icon-color transform hover:-translate-y-2 transition-transform duration-300  ${
                  index == 0 ? "text-white" : ""
                }`}
              >
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicClassSection;
