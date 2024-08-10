import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ukwriters from "../assets/ukwriters.png";
import trustpilot from "../assets/trustpilot.png";
import sitejabber from "../assets/sitejabber.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdVerifiedUser } from "react-icons/md";
import cardIcon from "../assets/cardicon.png";
import { BiMessageRoundedDots } from "react-icons/bi";
import { IoStarHalfOutline, IoStarSharp } from "react-icons/io5";

const RecentReviews = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const reviews = [
    {
      name: "JULIANE",
      rating: 5.0,
      review:
        "I advise and recommend to others to use their Academians services, good and high-quality work in good price.",
      date: "1/16/2024",
    },
    {
      name: "Bohua Yeng",
      rating: 4.0,
      review:
        "Their writers are very good and services are amazing, and they care about your privacy.",
      date: "1/1/2024",
    },
    {
      name: "MANDHUR",
      rating: 4.7,
      review:
        "I was stuck in financial accounting assignment one of my friend referred me Academians UK for help. I ordered my task on Academians they provided me the solution step by step.",
      date: "1/4/2024",
    },
    {
      name: "SARIKA",
      rating: 4.5,
      review:
        "Academians  offer excellent writing services, I received my paper on time and it was a perfect piece of paper. Highly Recommend",
      date: "1/5/2024",
    },
    {
      name: "Henry Russell",
      rating: 5.0,
      review:
        "Honestly, I liked their work, I can’t imagine how they communicate with me. Thanks",
      date: "1/6/2024",
    },
    {
      name: "ASHVIN",
      rating: 4.5,
      review:
        "Very satisfied with recent dissertation, because it was submitted on time. I can’t do it on time but Academians helped me and delivered on time.",
      date: "1/6/2024",
    },
    {
      name: "Daisy Smith",
      rating: 4.6,
      review:
        "I have used the services of academians they guys are awesome; work is good and prices are affordable.",
      date: "1/6/2024",
    },
    {
      name: "Rachel Daniels",
      rating: 5.0,
      review:
        "I used Academians for the very first time, and they provided me the good essay work on time, highly recommended.",
      date: "1/6/2024",
    },
  ];

  const handlePrev = () => {
    setStartIndex((prevIndex) => {
      const newIndex =
        prevIndex === 0
          ? reviews.length - (isMobile ? 1 : 4)
          : prevIndex - (isMobile ? 1 : 4);
      return newIndex;
    });
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => {
      const newIndex =
        prevIndex + (isMobile ? 1 : 4) >= reviews.length
          ? 0
          : prevIndex + (isMobile ? 1 : 4);
      return newIndex;
    });
  };
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-auto bg-[#367285] py-16">
      <div className="text-white text-center pb-8">
        <h1 className="text-3xl md:text-6xl font-bold">
          CUSTOMER SATISFACTION
        </h1>
        <p className="text-xl font-semibold">
          Don’t take our word for it, trust these successful students
        </p>
      </div>

      {/* Reviews Button */}
      <div className="flex flex-wrap justify-center gap-4 px-4 md:px-0">
        <div className="bg-[#00000080]  md:w-[170px] h-[60px] p-2 rounded-md border border-white flex items-center justify-between text-white">
          <img src={ukwriters} className="w-[35px] h-[35px]" alt="UK Writers" />
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1">
              <h1 className="text-base md:text-xl md:font-bold font-semibold">
                4.9
              </h1>
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

        <div className="bg-[#00000080]  md:w-[170px] h-[60px] p-2 rounded-md border border-white flex items-center justify-between text-white">
          <img
            src={trustpilot}
            className="w-[35px] h-[35px]"
            alt="TrustPilot"
          />
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1">
              <h1 className="text-base md:text-xl md:font-bold font-semibold">
                4.8
              </h1>
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

        <div className="hidden md:block">
          <div className="bg-[#00000080]  md:w-[170px] h-[60px] p-2 rounded-md border border-white flex items-center justify-between text-white">
            <img
              src={sitejabber}
              className="w-[35px] h-[35px]"
              alt="SiteJabber"
            />
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                <h1 className="text-xl font-bold">4.8</h1>
                <div className="flex">
                  <IoStarSharp color="#E85F2A" />
                  <IoStarSharp color="#E85F2A" />
                  <IoStarSharp color="#E85F2A" />
                  <IoStarSharp color="#E85F2A" />
                  <IoStarHalfOutline color="#E85F2A" />
                </div>
              </div>
              <h1 className="text-sm">SiteJabber</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative flex items-center justify-center mt-8">
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-[4%] bg-white rounded-full p-2"
        >
          <FaArrowLeft color="#020621" />
        </button>

        <div className="flex overflow-hidden gap-4 md:w-[80%] w-[90%]">
          {reviews
            .slice(startIndex, startIndex + (isMobile ? 1 : 4))
            .map((review, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md w-full md:w-[290px] h-auto"
              >
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={cardIcon}
                    className="w-12 h-12 rounded-full"
                    alt="cardIcon"
                  />
                </div>

                <div className="flex items-center justify-center py-2">
                  <IoStarSharp color="#FFDF00" size={20} />
                  <IoStarSharp color="#FFDF00" size={20} />
                  <IoStarSharp color="#FFDF00" size={20} />
                  <IoStarSharp color="#FFDF00" size={20} />
                  <IoStarSharp color="#808080" size={20} />
                </div>

                <h3 className="text-lg text-center font-bold py-1">
                  {review.name}
                </h3>
                <div className="flex items-center gap-1 justify-center mb-2">
                  <MdVerifiedUser color="#6dbe2b" size={20} />
                  <p className="text-sm text-[#6dbe2b] font-medium">
                    Verified order
                  </p>
                </div>
                <p className="text-sm h-[120px] overflow-hidden">
                  {review.review}
                </p>
                <p className="text-xs text-gray-400 text-center mt-2">
                  {review.date}
                </p>
              </div>
            ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-4 md:right-[8%] bg-white rounded-full p-2"
        >
          <FaArrowRight color="#020621" />
        </button>
      </div>

      {/* Buttons */}

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-10 px-4">
        <div className="w-full md:w-[230px] h-10 md:flex items-center justify-center rounded-md">
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
        </div>
       

        <div className="w-full md:w-[230px] h-10 md:flex items-center justify-center rounded-md">
          <a
            href={`https://wa.me/447397145697?text=${encodeURIComponent(
                "Hello Team Academians, I want to avail my promo code TA-OFF50."
              )}`}
            target="_blank"
            rel="noopener noreferrer"
            
          >
            <div className="bg-white w-full md:w-[230px] h-10 flex gap-2 items-center justify-center rounded-md">
              <IoLogoWhatsapp className="text-2xl text-[#408955]" />
              <h1 className="text-[#408955] font-bold text-sm md:text-base uppercase">
                Whatsapp Now
              </h1>
            </div>
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default RecentReviews;
