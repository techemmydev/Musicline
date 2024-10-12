import Button from "./Button";

const CallToAction = () => {
  return (
    <div className="relative bg-orange-500 p-8 flex flex-col items-center justify-center lg:flex-row lg:p-20 ">
      {/* Image and Overlay Container */}
      <div className="relative w-full lg:w-full h-[400px] ">
        {/* Image */}
        <img
          src="https://www.musictoyourhome.com/wp-content/uploads/2023/06/is-it-hard-to-play-cello.jpg
"
          alt="Be an Expert"
          className=" object-cover w-full h-full rounded-lg  "
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center  p-4 lg:p-8 bg-black bg-opacity-60 text-white rounded-lg">
          <h3 className="uppercase text-[#B38B37] font-[600] mb-2 lg:mb-3 text-[20px]">
            Let's Join Us
          </h3>
          <h2 className="text-[30px] lg:text-4xl font-bold text-white mb-3 lg:mb-4 text-center lg:text-left font-serif rever">
            Be an Expert With Us
          </h2>
          <p className="text-white mb-4 lg:mb-6 lg:w-1/2 text-center lg:text-center font-PlusJakartaSans text-[15px] leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex flex-col lg:flex-row justify-center gap-3 w-full max-w-lg">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              className="p-3 border rounded-lg focus:outline-none w-full lg:w-full" // Change lg:w-96 to increase width
            />

            {/* Button */}
            <Button className="hover:bg-black text-white uppercase bg-icon-color mb-8 w-full lg:w-72 lg:mb-0">
              SEND
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
