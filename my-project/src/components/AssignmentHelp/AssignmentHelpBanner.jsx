import { BiMessageRoundedDots } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoStarSharp, IoStarHalfOutline } from "react-icons/io5";
import ukwriters from "../../assets/ukwriters.png";
import trustpilot from "../../assets/trustpilot.png";
import sitejabber from "../../assets/sitejabber.png";
import { LuSunMedium } from "react-icons/lu";
import featureline from "../../assets/featureline.png";
import SignUp from "../SignUp";
import { useEffect } from "react";

const AssignmentHelpBanner = () => {
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

  return (
    <div className="bg-[#367285] w-full">
      <div className="bg-banner-bg bg-cover bg-center h-auto w-full">
        <div className="md:w-[75%]  max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-20">
            {/* Left Container */}
            <div className="text-white  md:w-[65%]">
              <h1 className="text-[#ffb800] font-bold text-xl md:text-2xl">
                Get A+ with Our Help
              </h1>
              <h1 className="text-white text-2xl md:text-4xl font-bold">
                Hire Top UK PhD Assessment Experts for Your Succes
              </h1>
              

              <img src={featureline} alt="Feature line" className="mt-2" />

              <p className="whitespace-pre-wrap font-semibold py-6 text-sm md:text-base lg:text-lg">
                Team Academians® delivers top-quality assignment assistance to
                ensure your academic success.
                
                We’re here to support every step of your educational journey
              </p>

              <div className="flex flex-wrap gap-4 py-4">
                <div className="flex items-center gap-1">
                  <LuSunMedium size={20} color="#F3C30E" />
                  <h1 className="text-sm md:text-base lg:text-lg font-semibold">
                    24/7 Free Support
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <LuSunMedium size={20} color="#F3C30E" />
                  <h1 className="text-sm  font-semibold md:text-base lg:text-lg">
                    Best Price
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <LuSunMedium size={20} color="#F3C30E" />
                  <h1 className="text-sm  font-semibold md:text-base lg:text-lg">
                    100% Money Back Guarantee
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <LuSunMedium size={20} color="#F3C30E" />
                  <h1 className="text-sm font-semibold md:text-base lg:text-lg">
                    Top Quality Work
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <LuSunMedium size={20} color="#F3C30E" />
                  <h1 className="text-sm md:text-base  font-semibold lg:text-lg">
                    Plagiarism Free
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <LuSunMedium size={20} color="#F3C30E" />
                  <h1 className="text-sm md:text-base font-semibold  lg:text-lg">
                    On time Deliver
                  </h1>
                </div>
              </div>

              

              <div className="flex flex-col md:flex-row gap-4 py-8 w-full md:w-auto">
                <button
                  onClick={handleTalkToExpertClick}
                  className="flex gap-2 items-center bg-[#ffb800] w-full md:w-[230px] h-10 justify-center rounded-md"
                >
                  <BiMessageRoundedDots
                    className="text-2xl md:text-3xl"
                    color="white"
                  />
                  <h1 className="text-white font-bold text-sm md:text-base">
                    TALK TO OUR EXPERT
                  </h1>
                </button>

                <a
                  href="https://wa.me/447397145697"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center"
                >
                  <div className="bg-white w-full md:w-[230px] h-10 flex items-center justify-center rounded-md">
                    <IoLogoWhatsapp className="text-2xl text-[#408955]" />
                    <h1 className="text-[#408955] font-bold text-sm md:text-base uppercase">
                      Whatsapp Now
                    </h1>
                  </div>
                </a>
              </div>

              <div className="flex justify-center md:justify-start gap-4 py-4">
                <div className="bg-[#00000080] md:w-44 h-16 p-2 rounded-md border border-white">
                  <div className="flex items-center justify-between h-full">
                    <div>
                      <img
                        src={ukwriters}
                        className="w-8 h-8 md:w-9 md:h-9"
                        alt="UK Writers"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="flex items-center gap-1">
                        <h1 className="text-base font-bold">4.9</h1>
                        <div className="flex">
                          <IoStarSharp color="#E85F2A" />
                          <IoStarSharp color="#E85F2A" />
                          <IoStarSharp color="#E85F2A" />
                          <IoStarSharp color="#E85F2A" />
                          <IoStarHalfOutline color="#E85F2A" />
                        </div>
                      </div>
                      <h1 className="text-sm">UK Top Writers</h1>
                    </div>
                  </div>
                </div>

                <div className="bg-[#00000080]  md:w-44 h-16 p-2 rounded-md border border-white">
                  <div className="flex items-center justify-between h-full">
                    <div>
                      <img
                        src={trustpilot}
                        alt="TrustPilot"
                        className="w-8 h-8 md:w-9 md:h-9"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="flex items-center gap-1">
                        <h1 className="text-base font-bold">4.8</h1>
                        <div className="flex">
                          <IoStarSharp color="#E85F2A" />
                          <IoStarSharp color="#E85F2A" />
                          <IoStarSharp color="#E85F2A" />
                          <IoStarSharp color="#E85F2A" />
                          <IoStarHalfOutline color="#E85F2A" />
                        </div>
                      </div>
                      <h1 className="text-sm">TrustPilot</h1>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="bg-[#00000080]  md:w-44 h-16 p-2 rounded-md border border-white">
                    <div className="flex items-center justify-between h-full">
                      <div>
                        <img
                          src={sitejabber}
                          alt="SiteJabber"
                          className="w-8 h-8 md:w-9 md:h-9"
                        />
                      </div>
                      <div className="flex flex-col items-start">
                        <div className="flex items-center gap-1">
                          <h1 className="text-base font-bold">4.8</h1>
                          <div className="flex">
                            <IoStarSharp color="#E85F2A" />
                            <IoStarSharp color="#E85F2A" />
                            <IoStarSharp color="#E85F2A" />
                            <IoStarSharp color="#E85F2A" />
                            <IoStarHalfOutline color="#E85F2A" />
                          </div>
                        </div>
                        <h1 className="text-sm mr-4">SiteJabber</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Container */}
            <div className="md:w-[35%] w-full  mx-auto">
              <SignUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentHelpBanner;
