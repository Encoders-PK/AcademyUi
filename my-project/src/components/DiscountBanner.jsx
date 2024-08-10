

import { useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiMessageRoundedDots } from "react-icons/bi";
import GET from '../assets/GET.png';

const DiscountBanner = () => {
  useEffect(() => {
    // Adding Tawk.to script to the page when the component mounts
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function(){
      var s1 = document.createElement("script"),
          s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://tawk.to/chat/601da070c31c9117cb7649b7/1etprlduf'; // Your Tawk.to script source
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
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

  return (
    <div className="w-full bg-[#367285] md:h-[350px] h-auto md:mt-24 mt-10 relative flex items-center justify-center p-4 md:p-8">
      {/* Image Container */}
      <div className="hidden md:block w-[25%]">
         <img src={GET} className="absolute -top-20 left-40" alt="Discount Banner" />
      </div>

      {/* Text Content */}
      <div className="text-white text-center md:text-left md:ml-8 flex flex-col items-center md:items-start">
        <h1 className="text-2xl md:text-4xl font-bold">
          GET FLAT <span className="text-yellow-400 text-3xl md:text-6xl animate-blink">50%</span> DISCOUNT
        </h1>
        <h2 className="text-lg md:text-2xl mt-4">Come First Avail 1st</h2>
        <h2 className="text-lg md:text-2xl mt-2">05 Limited Coupon Available</h2>
        <div className="flex flex-col md:flex-row gap-3 py-8 w-full md:w-auto">
          <button 
            onClick={handleTalkToExpertClick} 
            className="flex gap-2 items-center bg-[#ffb800] w-full md:w-[230px] h-10 justify-center rounded-md"
          >
            <BiMessageRoundedDots className="text-2xl md:text-3xl" color="white" />
            <h1 className="text-white font-bold text-sm md:text-base">TALK TO OUR EXPERT</h1>
          </button>

          <a href={`https://wa.me/447397145697?text=${encodeURIComponent(
                "Hello Team Academians, I want to avail my promo code TA-OFF50."
              )}`} target="_blank" rel="noopener noreferrer" >
            <div className="bg-white w-full md:w-[230px] h-10 flex items-center gap-2 justify-center rounded-md">
              <IoLogoWhatsapp className="text-2xl text-[#408955]" />
              <h1 className="text-[#408955] font-bold text-sm md:text-base uppercase">Whatsapp Now</h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;




