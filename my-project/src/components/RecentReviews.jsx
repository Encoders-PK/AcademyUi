// import { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { IoStarHalfOutline, IoStarSharp } from "react-icons/io5";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { TiMessages } from "react-icons/ti";
// import ukwriters from "../assets/ukwriters.png";

// const RecentReviews = () => {
//   const [startIndex, setStartIndex] = useState(0);

//   const reviews = [
//     {
//       name: "Arya Johnson",
//       rating: 4.5,
//       review:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting i",
//       date: "1/16/2024",
//     },
//     {
//       name: "Oakley Amelia",
//       rating: 4.0,
//       review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
//       date: "1/1/2024",
//     },
//     {
//       name: "Ben Russo",
//       rating: 4.5,
//       review:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//       date: "1/4/2024",
//     },
//     {
//       name: "Emily Watson",
//       rating: 4.5,
//       review:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting i",
//       date: "1/5/2024",
//     },
//     {
//       name: "John Doe1",
//       rating: 4.7,
//       review:
//         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//       date: "1/6/2024",
//     },
//     {
//       name: "John Doe2",
//       rating: 4.7,
//       review:
//         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//       date: "1/6/2024",
//     },
//     {
//       name: "John Doe3",
//       rating: 4.7,
//       review:
//         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//       date: "1/6/2024",
//     },
//     {
//       name: "John Doe4",
//       rating: 4.7,
//       review:
//         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//       date: "1/6/2024",
//     },
//   ];

//   const handlePrev = () => {
//     setStartIndex((prevIndex) =>
//       prevIndex === 0 ? reviews.length - 4 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setStartIndex((prevIndex) =>
//       prevIndex === reviews.length - 4 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="w-full h-[800px] bg-[#020621]">
//       <div className="text-white text-center pt-16 pb-4">
//         <h1 className="text-2xl font-bold">Recent reviews</h1>
//         <p className="text-xl font-semibold">
//           Don’t take our word for it, trust these successful students
//         </p>
//       </div>

//       {/* Reviews Button */}
//       <div className="flex gap-4 py-4 justify-center">
//         <div className="bg-[#010414] w-[180px] h-[80px] p-2 rounded-md border border-white">
//           <div className="flex items-center justify-between h-full">
//             <div>
//              <img src={ukwriters} className="w-[35px] h-[35px]" alt="" />
//             </div>
//             <div className="flex flex-col items-end">
//               <div className="flex items-center gap-1">
//                 <h1 className="text-2xl font-bold text-white">4.9</h1>
//                 <div className="flex">
//                   <IoStarSharp color="#E85F2A" />
//                   <IoStarSharp color="#E85F2A" />
//                   <IoStarSharp color="#E85F2A" />
//                   <IoStarSharp color="#E85F2A" />
//                   <IoStarHalfOutline color="#E85F2A" />
//                 </div>
//               </div>
//               <h1 className="text-sm  mr-6 text-white">UK Top Writers</h1>
//             </div>
//           </div>
//         </div>

//         <div className="bg-[#010414] w-[180px] h-[80px] p-2 rounded-md border border-white">
//           <div className="flex items-center justify-between h-full">
//             <div>
//               <FcGoogle size={35} />
//             </div>
//             <div className="flex flex-col items-end">
//               <div className="flex items-center gap-1">
//                 <h1 className="text-2xl font-bold text-white">4.8</h1>
//                 <div className="flex">
//                   <IoStarSharp color="#E85F2A" />
//                   <IoStarSharp color="#E85F2A" />
//                   <IoStarSharp color="#E85F2A" />
//                   <IoStarSharp color="#E85F2A" />
//                   <IoStarHalfOutline color="#E85F2A" />
//                 </div>
//               </div>
//               <h1 className="text-sm text-white  mr-6">Google Reviews</h1>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Cards Section */}
//       <div className="relative flex items-center justify-center mt-8">
//         <button
//           onClick={handlePrev}
//           className="absolute left-[8%] bg-white rounded-full p-2"
//         >
//           <FaArrowLeft color="#020621" />
//         </button>

//         <div className="flex gap-4 overflow-hidden w-[80%] items-center justify-center">
//           {reviews.slice(startIndex, startIndex + 4).map((review, index) => (
//             <div
//               key={index}
//               className="bg-white p-4 rounded-lg shadow-md w-[280px] h-[300px]"
//             >
//               <div className="flex items-center justify-center py-2">
//                 <IoStarSharp color="#FFDF00" size={20} />
//                 <IoStarSharp color="#FFDF00" size={20} />
//                 <IoStarSharp color="#FFDF00" size={20} />
//                 <IoStarSharp color="#FFDF00" size={20} />
//                 <IoStarSharp color="#808080" size={20} />

//               </div>

//               <h3 className="text-lg text-center font-bold py-1">{review.name}</h3>
//               <p className="text-sm text-center text-[#6dbe2b] font-medium pb-2">@Verified order</p>
//               <p className="text-sm  h-[120px]">{review.review}</p>
//               <p className="text-xs text-gray-400 py-4 text-center">{review.date}</p>
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={handleNext}
//           className="absolute right-[8%] bg-white rounded-full p-2"
//         >
//           <FaArrowRight color="#020621" />
//         </button>
//       </div>

//       <div className="w-[400px] bg-[#078954] h-[70px] mt-14 mx-auto">
//         <div className="flex items-center gap-2 justify-center py-4">
//           <TiMessages color="white" size={20} />
//           <h1 className="text-2xl text-white">Discuss With Experts</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecentReviews;

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
      name: "Arya Johnson",
      rating: 4.5,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      date: "1/16/2024",
    },
    {
      name: "Oakley Amelia",
      rating: 4.0,
      review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      date: "1/1/2024",
    },
    {
      name: "Ben Russo",
      rating: 4.5,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      date: "1/4/2024",
    },
    {
      name: "Emily Watson",
      rating: 4.5,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      date: "1/5/2024",
    },
    {
      name: "John Doe1",
      rating: 4.7,
      review:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      date: "1/6/2024",
    },
    {
      name: "John Doe2",
      rating: 4.7,
      review:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      date: "1/6/2024",
    },
    {
      name: "John Doe3",
      rating: 4.7,
      review:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      date: "1/6/2024",
    },
    {
      name: "John Doe4",
      rating: 4.7,
      review:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      date: "1/6/2024",
    },
  ];

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - (isMobile ? 1 : 4) : prevIndex - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex === reviews.length - (isMobile ? 1 : 4) ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-auto bg-gradient-to-r from-[#142A41] via-[#1B7995] to-[#142A41] py-16">
      <div className="text-white text-center pb-8">
        <h1 className="md:text-6xl text-3xl font-bold">
          CUSTOMER SATISFACTION
        </h1>
        <p className="text-xl px-1 md:px-0 font-semibold">
          Don’t take our word for it, trust these successful students
        </p>
      </div>

      {/* Reviews Button */}

      <div className="flex justify-center pr-2 md:pr-0 md:gap-4 gap-1 py-4">
            <div className="bg-[#00000080] w-[160px] md:w-[180px] md:h-[60px] h-[60px]  md:p-3 lg:p-3 rounded-md border border-white">
              <div className="flex items-center justify-between text-white h-full">
                <div>
                  {/* <FcGoogle size={35} /> */}
                  <img src={ukwriters} className="w-[30px] h-[30px] md:w-[35px] md:h-[35px]" alt="" />
                </div>
                <div className="flex flex-col items-start ">
                  <div className="flex items-center gap-1">
                    <h1 className="text-base md:text-xl font-bold">4.9</h1>
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

            <div className="bg-[#00000080] w-[160px] md:h-[60px] md:w-[180px] h-[60px]  md:p-3 lg:p-3 rounded-md border border-white">
              <div className="flex items-center justify-between text-white h-full">
                <div>
                 <img src={trustpilot} alt="" className="w-[30px] h-[30px] md:w-[35px] md:h-[35px]" />
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-1">
                    <h1 className="text-base md:text-xl font-bold ">4.8</h1>
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


            <div className="bg-[#00000080]  w-[160px] md:w-[180px] md:h-[60px] h-[60px] p-1 md:p-2 lg:p-2 rounded-md border border-white">
              <div className="flex items-center justify-between text-white">
                <div>
                <img src={sitejabber} alt="" className="w-[30px] h-[30px] md:w-[35px] md:h-[35px]" />
                </div>
                <div className="flex flex-col items-start ">
                  <div className="flex items-center gap-1">
                    <h1 className="text-base md:text-xl font-bold">4.8</h1>
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

      {/* Cards Section */}
      <div className="relative flex items-center justify-center mt-8">
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-[8%] bg-white rounded-full p-2"
        >
          <FaArrowLeft color="#020621" />
        </button>

        <div className="flex md:flex-row flex-col gap-4 overflow-hidden md:w-[80%] w-[75%]  items-center justify-center">
          {reviews
            .slice(startIndex, startIndex + (isMobile ? 1 : 4))
            .map((review, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md w-full md:w-[290px] h-auto"
              >
                <div className="flex items-center justify-center">
                  <img
                    src={cardIcon}
                    className="w-12 h-12 rounded-[50%] "
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
                <div className="flex items-center gap-1 justify-center pb-2">
                  <MdVerifiedUser color="#6dbe2b" size={20} />
                  <p className="text-sm text-[#6dbe2b] font-medium ">
                    Verified order
                  </p>
                </div>
                <p className="text-sm h-[120px]">{review.review}</p>
                <p className="text-xs text-gray-400 py-4 text-center">
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
      <div className="flex items-center justify-center pt-10">
        <div className="flex flex-col md:flex-row gap-4 py-8 ">
          <div className="bg-[#ffb800] w-[470px] md:w-[230px] h-10 flex justify-center rounded-md">
            <div className="flex items-center gap-2">
              <BiMessageRoundedDots
                className="text-2xl md:text-3xl"
                color="white"
              />
              <h1 className="text-white font-bold text-sm ">
                TALK TO OUR EXPERT
              </h1>
            </div>
          </div>

          <div className="bg-white w-[470px] md:w-[230px] h-10 flex justify-center rounded-md">
            <div className="flex items-center gap-2">
              <IoLogoWhatsapp
                className="text-2xl md:text-3xl"
                color="#408955"
              />
              <h1 className="text-[#408955] font-bold text-sm  uppercase">
                Whatsapp Now
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentReviews;
