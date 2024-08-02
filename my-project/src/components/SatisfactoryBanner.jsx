
// import satisfactory from "../assets/satisfactory.png";

// const SatisfactoryBanner = () => {
//   return (
//     <div className="bg-[#010621] mt-24 w-full h-[370px]">
//       <div className="w-[80%] mx-auto">
//         {/* container */}
//         <div className="flex items-center justify-between gap-4">
//           {/* left side */}
//           <div className=" border border-black">
//             <h1 className="text-white text-5xl font-semibold">
//               See if your subject is on the list
//             </h1>

//             <div className="flex items-center gap-4 py-6">
//               <div>
//                 <input
//                   type="text"
//                   className="border-2 border-[#EEEEEE] outline-none px-4  w-[450px] h-12"
//                   name=""
//                   placeholder="Problem Help"
//                 />
//               </div>

//               <div>
//                 <button className="bg-[#078954] text-white px-12  py-2">
//                   Get Help
//                 </button>
//               </div>
//             </div>

//             <h1 className="text-white">
//               For Ex:
//               <span className="custom-underline inline-block mx-2">
//                 Assignment 1
//               </span>
//               <span className="custom-underline inline-block mx-2">
//                 Assignment 2
//               </span>
//               <span className="custom-underline inline-block mx-2">
//                 Assignment 3
//               </span>
//               <br />
//               <span className="custom-underline inline-block mx-14 pt-4">
//                 Assignment 4
//               </span>
//             </h1>
//           </div>
//           {/* Right Side      */}

//           <div className="w-[35%]">
//             <img src={satisfactory} className='' alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SatisfactoryBanner;


import satisfactory from "../assets/satisfactory.png";

// const SatisfactoryBanner = () => {
//   return (
//     <div className="bg-[#010621] mt-12 md:mt-24 w-full md:h-[340px] py-8">
//       <div className="w-full max-w-6xl mx-auto px-4">
//         {/* Container */}
//         <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
//           {/* Left Side */}
//           <div className="flex-1 border border-black p-4 md:p-6">
//             <h1 className="text-white text-3xl md:text-5xl font-semibold">
//               See if your subject is on the list
//             </h1>

//             <div className="flex flex-col md:flex-row items-center gap-4 py-6">
//               <input
//                 type="text"
//                 className="border-2 border-[#EEEEEE] outline-none px-4 w-full md:w-[450px] h-12"
//                 placeholder="Problem Help"
//               />
//               <button className="bg-[#078954] text-white px-6 md:px-12 py-2 mt-4 md:mt-0">
//                 Get Help
//               </button>
//             </div>

//             <h1 className="text-white text-sm md:text-base">
//               For Ex:
//               <span className="custom-underline inline-block mx-2">
//                 Assignment 1
//               </span>
//               <span className="custom-underline inline-block mx-2">
//                 Assignment 2
//               </span>
//               <span className="custom-underline inline-block mx-2">
//                 Assignment 3
//               </span>
//               <br />
//               <span className="custom-underline inline-block mx-2 md:mx-14 pt-4">
//                 Assignment 4
//               </span>
//             </h1>
//           </div>

//           {/* Right Side */}
//           <div className="w-full md:w-1/3">
//             <img src={satisfactory} className="w-[400px] h-[400px] absolute" alt="Satisfactory Banner" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SatisfactoryBanner;

const SatisfactoryBanner = () => {
  return (
    <div className="bg-gradient-to-r from-[#142A41] via-[#1B7995] to-[#142A41] mt-12 md:mt-24 w-full md:h-[330px] py-8 md:relative">
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Container */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20 md:relative">
          {/* Left Side */}
          <div className="flex-1 p-4 md:p-6 md:relative md:z-10">
            <h1 className="text-white text-3xl md:text-4xl font-semibold">
              See if your subject is on the list
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-4 py-6">
              <input
                type="text"
                className="border-2 border-[#EEEEEE] outline-none px-4 w-full md:w-[450px] h-12"
                placeholder="Problem Help"
              />
              <button className="bg-[#078954] w-[120px] h-auto rounded-lg text-white   py-2 mt-4 md:mt-0">
                Get Help
              </button>
            </div>

            <h1 className="text-white text-sm md:text-base">
              For Ex:
              <span className="custom-underline inline-block mx-2">
                Assignment 1
              </span>
              <span className="custom-underline inline-block mx-2">
                Assignment 2
              </span>
              <span className="custom-underline inline-block mx-2">
                Assignment 3
              </span>
              <br />
              <span className="custom-underline inline-block mx-12 md:mx-14 pt-4">
                Assignment 4
              </span>
            </h1>
          </div>

          {/* Right Side */}
          <div className="w-full md:relative">
            <img src={satisfactory} className="w-full h-auto md:absolute top-0 left-0 md:top-[-240px] md:left-[-10px]" alt="Satisfactory Banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatisfactoryBanner;
