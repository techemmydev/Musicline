import logo1 from "../assets/img/Logo-1.png";
import logo2 from "../assets/img/Logo-2.png";
import logo3 from "../assets/img/Logo-3.png";
import logo4 from "../assets/img/Logo-4.png";
import logo5 from "../assets/img/Logo-8.png";

const logos = [
  { src: logo1, alt: "Company Logo 1" },
  { src: logo2, alt: "Company Logo 2" },
  { src: logo3, alt: "Company Logo 3" },
  { src: logo4, alt: "Company Logo 4" },
  { src: logo5, alt: "Company Logo 5" },
];

const CompanyLogos = () => {
  return (
    <div className="w-full p-10   mt-4 lg:p-32 ">
      <h1 className="text-center font-PlusJakartaSans font-[600] mb-9 text-[25px]">
        Supported by:
      </h1>
      <div className="w-full flex items-center justify-center  h-5/6">
        <div className="  lg:flex lg:gap-20 ">
          {logos.map((logo, index) => (
            <div key={index} className="mb-9 lg:mb-0">
              {" "}
              {/* Adjust margin for mobile */}
              <img src={logo.src} alt={logo.alt} className="w-48" />{" "}
              {/* Set a width for consistency */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
