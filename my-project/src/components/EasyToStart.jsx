import mobileSection from "../assets/mobileSection.webp";
import phone from "../assets/phone.png";

const EasyToStart = () => {
  return (
    <div className="w-full max-w-6xl h-auto mx-auto mt-10 px-4">
      <h1 className="text-[#5A5A5A] text-3xl md:text-6xl text-center font-bold pb-10 py-2">
        EASY TO START
      </h1>

      {/* Container */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-24 justify-center">
        {/* Left Side */}
        <div className="hidden md:block md:w-1/2">
          <img src={mobileSection} alt="Mobile Section" className="w-full h-auto" />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={phone} className="w-full max-w-xs md:max-w-sm" alt="Phone" />
        </div>
      </div>
    </div>
  );
};

export default EasyToStart;

