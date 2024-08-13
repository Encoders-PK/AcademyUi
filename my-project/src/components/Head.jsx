import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { CgMail } from "react-icons/cg";

const Head = () => {
  return (
    <div className="bg-[#0F203D] w-full h-10 fixed top-0 left-0 z-50 shadow-md hidden md:block">
      {/* main container */}
      <div className="mx-20">
        <div className="flex justify-between items-center gap-10">
          {/* left side */}
          <div className="flex items-center mt-1 gap-2">
            <div className="bg-[#ffb800] w-[70px] text-center rounded-full text-white p-1 animate-darkLight">OFFERS</div>
            <h1 className="text-white text-[14px]">Buy 4 Assessments and get 1 absolutely FREE!</h1>
          </div>

          {/* right side */}
          <div className="flex items-center justify-center gap-2 h-full">
            <div className="flex gap-2 items-center text-white">
              <a href="tel:+441618189341" className="flex gap-2 items-center">
                <IoCall color="white" size={20} className="text-3xl" />
                <h1 className=" font-bold text-base">+44 161 818 9341</h1>
              </a>
            </div>

            <div className="flex gap-2 items-center">
              <a href={`https://wa.me/447397145697?text=${encodeURIComponent(
                "Hello Team Academians, I want to avail my promo code TA-OFF50."
              )}`} target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center">
                <IoLogoWhatsapp color="white" size={20} className="text-3xl" />
                <h1 className=" text-white font-bold text-base">+44 739 714 5697</h1>
              </a>
            </div>

            <div className="flex gap-2 items-center">
              <a href="mailto:info@academians.co.uk" className="flex gap-2 items-center">
                <CgMail color="white" size={20} className="text-3xl" />
                <h1 className=" text-white font-bold text-base">info@academians.co.uk</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;

