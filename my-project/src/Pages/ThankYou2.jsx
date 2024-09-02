import Footer from "../components/Footer";
import Head from "../components/Head";
import Navbar from "../components/Navbar";
import { FaGift } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BiMessageRoundedDots } from "react-icons/bi";
import StickyBtn from "../components/StickyBtn";

const ThankYou2 = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Adding Tawk.to script to the page when the component mounts
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://tawk.to/chat/601da070c31c9117cb7649b7/1etprlduf"; // Your Tawk.to script source
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  const handleTalkToExpertClick = () => {
    if (window.Tawk_API && window.Tawk_API.maximize) {
      window.Tawk_API.maximize();
    } else {
      console.error("Tawk.to is not initialized properly.");
    }
  };

  const scrollToTopAndNavigate = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };
  useEffect(() => {
      
    document.title = 'Thank You - Academians UK'; // Set the document title
}, []);

  return (
    <>
      <Head />
      <Navbar aboutRef={aboutRef} contactRef={contactRef} />
      <div className="flex items-center justify-center py-12 px-4">
        <div className="bg-white max-w-3xl w-full shadow-xl px-6 py-8 md:px-10 md:py-12">
          <h1 className="text-[#4D5C6E] font-semibold text-2xl md:text-4xl pb-6 pt-12 text-center">
            CONGRATULATIONS
          </h1>
          <h3 className="text-[#4D5C6E] text-sm md:text-base py-4 md:py-8">
            50% Discount has been applied on your order at{" "}
            <a
              className="text-blue-600 cursor-pointer"
              onClick={() => scrollToTopAndNavigate('/')}
            ><span className="font-semibold bg-[#020621] text-white">Academians UK</span></a>. Your key
            manager will be connected to you shortly via{" "}
            <a href="tel:+441618189341" className="text-blue-600" target="_blank"
              rel="noopener noreferrer">
              Phone call
            </a>{" "}
            and {" "}<a
              href={`https://wa.me/447397145697?text=${encodeURIComponent(
                "Hello Team Academians, I want to avail my promo code TA-OFF50."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            > WhatsApp
            </a>
            . Enjoy the assistance of a verified expert in your academic field
            of study. Simply hire an expert to lend a hand, with professionalism
            guaranteed.
          </h3>
          <p className="text-[#4D5C6E] text-sm md:text-base">
            To avail promo code, please contact us through WhatsApp or live
            chat.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center md:gap-4 gap-2  py-8 mt-8 ">
            <a
              href="https://wa.me/447397145697?text=Hello%20Team%20Academians%2C%20I%20want%20to%20avail%20my%20promo%20code%20TA-OFF50"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-[260px] bg-[#408955] h-10 flex items-center justify-center rounded-md "
            >
              <div className="flex items-center gap-2">
                <FaGift
                  className="text-2xl md:text-3xl"
                  size={25}
                  color="white"
                />
                <h1 className="text-white font-bold text-sm md:text-base uppercase">
                  Avail Promo Code
                </h1>
              </div>
            </a>

            <button
              onClick={handleTalkToExpertClick}
              className="flex gap-2 items-center bg-[#ffb800] w-full md:w-[230px] h-10 justify-center rounded-md"
            >
              <BiMessageRoundedDots
                className="text-2xl md:text-3xl"
                size={25}
                color="white"
              />
              <h1 className="text-white font-bold text-sm md:text-base">
                TALK TO OUR EXPERT
              </h1>
            </button>
          </div>
        </div>
      </div>

      <Footer aboutRef={aboutRef} contactRef={contactRef} />
      <StickyBtn />
    </>
  );
};

export default ThankYou2;
