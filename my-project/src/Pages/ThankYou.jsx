// import { Link } from "react-router-dom";
import { TbMessages } from "react-icons/tb";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Navbar from "../components/Navbar";
import { FaGift } from "react-icons/fa6";

const ThankYou = () => {
  return (
    <>
      <Head />
      <Navbar />
      <div className="flex items-center justify-center h-auto py-12">
        <div className="bg-white w-[800px] h-[600px] shadow-xl px-10 py-12">
          <h1 className="text-[#4D5C6E] font-semibold text-4xl pb-6 pt-12">
            CONGRATULATIONS
          </h1>
          <h3 className="text-[#4D5C6E] text-base py-10">
            50% Discount has been applied on your order at{" "}
            <span>Academians UK</span> Your Key manager will be connected to you
            shortly Via Phone Call and WhatsAap . Enjoy the assistance of a
            verified expert in your academic field of study. Simply hire an
            expert to lend a hand, with professionalism guaranteed.
          </h3>
          <p className="text-[#4D5C6E]">
            To avail promo code Please Contact us through WhatsApp or Live Chat
          </p>

          <div className="flex items-center justify-center pt-10">
        <div className="flex flex-col md:flex-row gap-4 py-8 ">
            <div className="bg-[#408955] w-[280px] mx-auto md:mx-0 md:w-[260px] h-10 flex justify-center rounded-md">
              <div className="flex items-center gap-2">
                <FaGift className="text-2xl md:text-3xl"  size={25} color="white" />
                <h1 className="text-white font-bold text-sm md:text-base">Avail Promo Code</h1>
              </div>
            </div>

            <div className="bg-[#020621] w-[280px] mx-auto md:w-[260px] h-10 flex justify-center rounded-md">
              <div className="flex items-center gap-2">
                <TbMessages className="text-2xl md:text-3xl" size={25} color="white" />
                <h1 className="text-white font-bold text-sm md:text-base">live chat</h1>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ThankYou;
