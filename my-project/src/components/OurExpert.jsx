// import man from "../assets/man.png";
// import woman from "../assets/woman.png";

// import { HiMiniStar } from "react-icons/hi2";
// import { IoLogoWhatsapp } from "react-icons/io";

// const OurExpert = () => {
//   return (
//     <div className="w-[85%] mx-auto h-auto mb-14  mt-24 border-2 border-black">
//       <h1 className="text-center text-[#5A5A5A] text-6xl font-bold py-12">
//         Choose Your Experts
//       </h1>

//       <div className="flex flex-wrap gap-4 justify-center p-3">
//         {/* card one */}
//         <div className="w-full sm:w-[46%] md:w-[48%] lg:w-[420px] h-auto bg-white shadow-2xl mb-4 rounded-xl">
//           <div className="py-8 px-8 text-white">
//             <div className="flex items-center justify-between gap-2">
//               <div className="flex items-center gap-2">
//                 {/* 1st Section */}
//                 <div className="">
//                   <img src={man} className="w-[50px] h-[50px]" alt="menpic" />
//                 </div>

//                 {/* 2nd Section */}
//                 <div className="flex flex-col">
//                   <h1 className="text-black font-semibold">Daniel Fox</h1>
//                   <div className="flex gap-2 items-center">
//                     <HiMiniStar
//                       color="white"
//                       size={20}
//                       className="bg-[#60C955]"
//                     />
//                     <HiMiniStar
//                       color="white"
//                       size={20}
//                       className="bg-[#60C955]"
//                     />
//                     <HiMiniStar
//                       color="white"
//                       size={20}
//                       className="bg-[#60C955]"
//                     />
//                     <HiMiniStar
//                       color="white"
//                       size={20}
//                       className="bg-[#60C955]"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* 3rd Section */}
//               <div>
//                 <div className="bg-[#66D352] w-[70px] px-2 py-1 rounded-md shadow-lg h-auto">
//                   4.5 / 5
//                 </div>
//               </div>
//             </div>

//             <h2 className="text-[#92979B] mt-3">
//               Work experience:{" "}
//               <span className="font-semibold pl-2">9 Years</span>
//             </h2>

//             <p className="text-gray-400 py-6">
//               Daniel Fox is a rewarded assignment services expert with numerous
//               published articles in notorious assignment services journals. He
//               is a recognized published business journalist with an interest in
//               ghostwriting. The experts pays increased attention to the latest
//               business trends and can complete various assignment services
//               Assignment timely.
//             </p>

//             <div className="w-full h-[2px] bg-[#92979B] mt-12"></div>

//             <div className="flex items-center gap-4 mt-4">
//               <div className="text-black flex items-end gap-1">
//                 <h1 className="font-bold text-base">409</h1>
//                 <span className="text-sm text-gray-400">orders completed</span>
//               </div>

//               <div className="text-black flex items-end gap-1">
//                 <h1 className="font-bold text-base">409</h1>
//                 <span className="text-sm text-gray-400">orders completed</span>
//               </div>
//             </div>

//             {/* button */}

//             <div className="bg-[#408955] w-full h-10 flex justify-center rounded-md mt-8">
//               <div className="flex items-center gap-2">
//                 <IoLogoWhatsapp
//                   className="text-2xl md:text-3xl"
//                   color="white"
//                 />
//                 <h1 className="text-white font-semibold text-sm  uppercase">
//                   Click to Assign Expert
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* card two */}
//         <div className="w-full sm:w-[46%] md:w-[48%] lg:w-[420px] h-auto bg-white shadow-2xl mb-4 rounded-xl">
//           <div className="py-8 px-8 text-white">
//             <div className="flex items-center justify-between gap-2">
//               <div className="flex items-center gap-2">
//                 {/* 1st Section */}
//                 <div className="">
//                   <img src={woman} className="w-[50px] h-[50px]" alt="menpic" />
//                 </div>

//                 {/* 2nd Section */}
//                 <div className="flex flex-col">
//                   <h1 className="text-black font-semibold">Daniel Fox</h1>
//                   <div className="flex gap-2 items-center">
//                     <HiMiniStar
//                       color="white"
//                       size={20}
//                       className="bg-[#60C955]"
//                     />
//                     <HiMiniStar
//                       color="white"
//                       size={20}
//                       className="bg-[#60C955]"
//                     />
//                     <HiMiniStar
//                       color="white"
//                       size={20}
//                       className="bg-[#60C955]"
//                     />
//                     <HiMiniStar
//                       color="white"
//                       size={20}
//                       className="bg-[#60C955]"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* 3rd Section */}
//               <div>
//                 <div className="bg-[#66D352] w-[70px] px-2 py-1 rounded-md shadow-lg h-auto">
//                   4.5 / 5
//                 </div>
//               </div>
//             </div>

//             <h2 className="text-[#92979B] mt-3">
//               Work experience:{" "}
//               <span className="font-semibold pl-2">9 Years</span>
//             </h2>

//             <p className="text-gray-400 py-6">
//               Daniel Fox is a rewarded assignment services expert with numerous
//               published articles in notorious assignment services journals. He
//               is a recognized published business journalist with an interest in
//               ghostwriting. The experts pays increased attention to the latest
//               business trends and can complete various assignment services
//               Assignment timely.
//             </p>

//             <div className="w-full h-[2px] bg-[#92979B] mt-12"></div>

//             <div className="flex items-center gap-4 mt-4">
//               <div className="text-black flex items-end gap-1">
//                 <h1 className="font-bold text-base">500</h1>
//                 <span className="text-sm text-gray-400">orders completed</span>
//               </div>

//               <div className="text-black flex items-end gap-1">
//                 <h1 className="font-bold text-base">480</h1>
//                 <span className="text-sm text-gray-400">Positive Reviews</span>
//               </div>
//             </div>

//             {/* button */}

//             <div className="bg-[#408955] w-full h-10 flex justify-center rounded-md mt-8">
//               <div className="flex items-center gap-2">
//                 <IoLogoWhatsapp
//                   className="text-2xl md:text-3xl"
//                   color="white"
//                 />
//                 <h1 className="text-white font-semibold text-sm  uppercase">
//                   Click to Assign Expert
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* card three */}

//         <div className="w-full sm:w-[46%] md:w-[48%] lg:w-[420px] h-auto bg-white shadow-2xl mb-4 rounded-xl">
//           <div className="py-8 px-8 text-white">
//             <div className="flex items-center justify-between gap-2">
//               <div className="flex items-center gap-2">
//                 {/* 1st Section */}
//                 <div className="">
//                   <img src={man} className="w-[50px] h-[50px]" alt="menpic" />
//                 </div>

//                 {/* 2nd Section */}
//                 <div className="flex flex-col">
//                   <h1 className="text-black font-semibold">Daniel Fox</h1>
//                   <div className="flex gap-2 items-center">
//                     <HiMiniStar
//                       color="white"
//                       size={20}
//                       className="bg-[#60C955]"
//                     />
//                     <HiMiniStar
//                       color="white"
//                       size={20}
//                       className="bg-[#60C955]"
//                     />
//                     <HiMiniStar
//                       color="white"
//                       size={20}
//                       className="bg-[#60C955]"
//                     />
//                     <HiMiniStar
//                       color="white"
//                       size={20}
//                       className="bg-[#60C955]"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* 3rd Section */}
//               <div>
//                 <div className="bg-[#66D352] w-[70px] px-2 py-1 rounded-md shadow-lg h-auto">
//                   4.5 / 5
//                 </div>
//               </div>
//             </div>

//             <h2 className="text-[#92979B] mt-3">
//               Work experience:{" "}
//               <span className="font-semibold pl-2">9 Years</span>
//             </h2>

//             <p className="text-gray-400 py-6">
//               Daniel Fox is a rewarded assignment services expert with numerous
//               published articles in notorious assignment services journals. He
//               is a recognized published business journalist with an interest in
//               ghostwriting. The experts pays increased attention to the latest
//               business trends and can complete various assignment services
//               Assignment timely.
//             </p>

//             <div className="w-full h-[2px] bg-[#92979B] mt-12"></div>

//             <div className="flex items-center gap-4 mt-4">
//               <div className="text-black flex items-end gap-1">
//                 <h1 className="font-bold text-base">409</h1>
//                 <span className="text-sm text-gray-400">orders completed</span>
//               </div>

//               <div className="text-black flex items-end gap-1">
//                 <h1 className="font-bold text-base">409</h1>
//                 <span className="text-sm text-gray-400">orders completed</span>
//               </div>
//             </div>

//             {/* button */}

//             <div className="bg-[#408955] w-full h-10 flex justify-center rounded-md mt-8">
//               <div className="flex items-center gap-2">
//                 <IoLogoWhatsapp
//                   className="text-2xl md:text-3xl"
//                   color="white"
//                 />
//                 <h1 className="text-white font-semibold text-sm  uppercase">
//                   Click to Assign Expert
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="py-12 flex items-center justify-center gap-2">
//         <button className="bg-red-500 w-[16px] h-[16px] rounded-[50%]"></button>

//         {/* Button 2 */}
//         <button className="bg-green-500 w-[16px] h-[16px] rounded-[50%]"></button>

//         {/* Button 3 */}
//         <button className="bg-blue-500 w-[16px] h-[16px] rounded-[50%]"></button>

//         {/* Button 4 */}
//         <button className="bg-yellow-500 w-[16px] h-[16px] rounded-[50%]"></button>
//       </div>
//     </div>
//   );
// };

// export default OurExpert;

import { useState, useRef, useEffect } from "react";
import { HiMiniStar } from "react-icons/hi2";
import { IoLogoWhatsapp } from "react-icons/io";
import useMediaQuery from "./useMediaQuery.js"; // Import the custom hook

const OurExpert = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardsContainerRef = useRef();
  const isMobile = useMediaQuery("(max-width: 640px)"); // Mobile screen
  const isTabletOrDesktop = useMediaQuery("(min-width: 641px)"); // Tablet and larger screens

  const experts = [
    {
      name: "Prof. Duncan",
      img: "https://i.ibb.co/gVCvPpD/writer7-7-11zon.png",
      rating: 4.5,
      experience: "9 Years",
      description: `Ranked #7 globally, Prof. Duncan excels in delivering academic support with 3942
       assignments completed and 3364 positive reviews. His impressive 99% success rate makes him a top choice for
        students seeking reliable assistance.`,
      completedOrders: 4281,
      positiveReviwes: 3867,
    },
    {
      name: "Prof. Gail",
      img: "https://i.ibb.co/jf4pt8t/writer8-8-11zon.png",
      rating: 4.7,
      experience: "8 Years",
      description: `Ranked #14 globally, Prof. Gail is a top assignment expert with 2619 assignments completed for students in the UK and USA. Her 1900 positive reviews and 95% success rate highlight her dedication and expertise in delivering high-quality academic support.`,
      completedOrders: 2619,
      positiveReviwes: 1900,
    },
    {
      name: "Prof. Bryan",
      img: "https://i.ibb.co/qkBRm6H/writer9-9-11zon.png",
      rating: 4.5,
      experience: "6 Years",
      description: `Ranked #12 globally, Prof. Bryan is a top assignment expert with 2843 assignments completed for UK students. His 2581 positive reviews and 98% success rate highlight his dedication and expertise in delivering exceptional academic support.`,
      completedOrders: 2843,
      positiveReviwes: 2581,
    },
    {
      name: "Prof. Carstensen",
      img: "https://i.ibb.co/7gJXKk7/writer1-1-11zon.png",
      rating: 4.6,
      experience: "7 Years",
      description: `Ranked #4 globally, Prof. Carstensen has completed 4281 assignments for UK students, earning 3867 reviews and a 98% success rate. Known for expert knowledge and meticulous support, Prof. Carstensen is a top choice for academic excellence.`,
      completedOrders: 2300,
      positiveReviwes: 1960,
    },
    {
      name: "Dr. Larrisa",
      img: "https://i.ibb.co/cQ7cdfR/writer10-10-11zon.png",
      rating: 4.5,
      experience: "9 Years",
      description: `Ranked #4 globally, Prof. Carstensen has completed 4281 assignments for UK students, earning 3867 positive reviews and a 98% success rate. Known for expert knowledge and meticulous support, Prof. Carstensen is a top choice for academic excellence.`,
      completedOrders: 3059,
      positiveReviwes: 2837,
    },
    {
      name: "Dr. Warwick",
      img: "https://i.ibb.co/3R4QhWK/writer6-6-11zon.png",
      rating: 4.8,
      experience: "12 Years",
      description: `Ranked #15 globally, Dr. Warwick is a top assignment expert with 2300 assignments completed for UK and US students. His 1960 positive reviews and 98% success rate highlight his exceptional support and academic expertise.`,
      completedOrders: 4281,
      positiveReviwes: 3867,
    },
  ];

  const handleButtonClick = (index) => {
    setCurrentCardIndex(index);
  };

  useEffect(() => {
    if (cardsContainerRef.current) {
      const cardWidth = cardsContainerRef.current.firstChild.offsetWidth;
      cardsContainerRef.current.scrollTo({
        left: cardWidth * currentCardIndex,
        behavior: "smooth",
      });
    }
  }, [currentCardIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCardIndex((prevIndex) => {
        const increment = isMobile ? 1 : 1;
        return (prevIndex + increment) % experts.length;
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [experts.length, isMobile]);

  const renderCard = (expert, index) => (
    <div
      key={index}
      className={`flex-none w-full sm:w-[46%] md:w-[48%] lg:w-[420px] h-auto bg-white shadow-md mb-4  rounded-xl transition-transform duration-500 ease-in-out transform ${
        currentCardIndex === index ? "scale-105" : ""
      }`}
    >
      <div className="py-8 px-8 text-white">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="">
              <img
                src={expert.img}
                className="w-[50px] h-[50px]"
                alt="expert"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-black font-semibold">{expert.name}</h1>
              <div className="flex gap-2 items-center">
                <HiMiniStar color="white" size={20} className="bg-[#60C955]" />
                <HiMiniStar color="white" size={20} className="bg-[#60C955]" />
                <HiMiniStar color="white" size={20} className="bg-[#60C955]" />
                <HiMiniStar color="white" size={20} className="bg-[#60C955]" />
                <HiMiniStar color="white" size={20} className="bg-[#60C955]" />
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#66D352] w-[70px] px-2 py-1 rounded-md shadow-lg h-auto">
              {expert.rating} / 5
            </div>
          </div>
        </div>
        <h2 className="text-[#92979B] mt-3">
          Work experience:{" "}
          <span className="font-semibold pl-2">{expert.experience}</span>
        </h2>
        <p className="text-gray-400 py-6">{expert.description}</p>
        <div className="w-full h-[2px] bg-[#92979B] mt-12"></div>
        <div className="flex items-center gap-4 mt-4">
          <div className="text-black flex items-end gap-1">
            <h1 className="font-bold text-base">{expert.completedOrders}</h1>
            <span className="text-sm text-gray-400">orders completed</span>
          </div>
          <div className="text-black flex items-end gap-1">
            <h1 className="font-bold text-[14px]">{expert.positiveReviwes}</h1>
            <span className="text-sm text-gray-400">positive Reviews</span>
          </div>
        </div>
        <a href="https://wa.me/447397145697" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center">
        <div className="bg-[#408955] w-full h-10 flex justify-center rounded-md mt-8">
          <div className="flex items-center gap-2">
            <IoLogoWhatsapp className="text-2xl md:text-3xl" color="white" />
            <h1 className="text-white font-semibold text-sm uppercase">
              Click to Assign Expert
            </h1>
          </div>
        </div>
        </a>
      </div>
    </div>
  );

  return (
    <div className="w-[85%] mx-auto h-auto mb-14 mt-24">
      <h1 className="text-center text-[#5A5A5A] text-3xl md:text-6xl font-bold py-12 uppercase">
        Choose Your Experts
      </h1>
      <div
        className="flex overflow-x-auto gap-1 md:gap-4 p-3 hide-scrollbar"
        ref={cardsContainerRef}
      >
        {experts.map((expert, index) => renderCard(expert, index))}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        {experts.map((_, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`w-[16px] h-[16px] rounded-full ${
              currentCardIndex === index ? "bg-blue-500" : "bg-[#F1B815]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default OurExpert;
