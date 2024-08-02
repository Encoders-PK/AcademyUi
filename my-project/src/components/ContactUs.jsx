// import { IoLogoWhatsapp } from "react-icons/io";
// import { FaRegThumbsUp } from "react-icons/fa";

// const ContactUs = () => {
//   return (
//     <div className="w-[75%] h-[550px]  mx-auto my-20">
//       <h1 className="text-[#5A5A5A] text-5xl text-center font-bold pb-8 py-2">
//         CONTACT US
//       </h1>

//       {/* conatiner */}
//       <div className="flex items-center gap-24 justify-center">
//         {/* left Side */}
//         <div className="w-[50%] py-12  -ml-12 ">
//           <h1 className="text-[#333333] text-4xl font-bold py-6">One Stop Solution to All <br /> Academic Worries</h1>

//           <p className="text-sm text-[#333333] pb-6">
//           Struggling with looming deadlines and intricate assignments? At
//             Academians, we understand the pressure students face daily. If
//             you're constantly thinking,"Who can write my assignment for me?" or
//             "Where can I pay someone to do my assignment?", look no further. Our
//             team of dedicated assignment writers is here to provide top-notch,
//             tailor-made solutions for all your academic needs. Let us be your
//             cademic beacon, guiding you through every challenge, ensuring your
//             success.
//           </p>

//           <div className="flex items-center gap-2 py-4">
//             <div className="bg-[#367285] w-[260px] h-12 flex justify-center rounded-md">
//               <div className="flex items-center gap-2">
//                 <FaRegThumbsUp className="text-2xl" color="white" />
//                 <h1 className="text-white font-bold">TALK TO OUR EXPERT</h1>
//               </div>
//             </div>

//             <div className="bg-[#408955]  w-[260px] h-12 flex justify-center rounded-md">
//               <div className="flex items-center gap-2">
//                 <IoLogoWhatsapp className="text-2xl" color="white" />
//                 <h1 className="text-white font-bold">Whatsapp Now</h1>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* Right Side  */}

//         <div className="">

//             <div className="bg-[#020621] w-[450px] h-[370px] rounded-2xl">
//                 <h1 className=" text-white text-2xl font-bold pb-4 pt-8 px-12">Our team is available 24/7 <br /> to provide you best assistance</h1>
//                 <form action="">

//                 <div className="flex flex-col gap-2 mt-2 pl-12 pr-8">
//                 <input
//                   className="border-2 border-[#EEEEEE] outline-none p-2 rounded-md focus:border-blue-500"
//                   type="text"
//                   placeholder="Full Name"
//                 />
//                 <input
//                   className="border-2 border-[#EEEEEE] outline-none p-2 rounded-md focus:border-blue-500"
//                   type="text"
//                   placeholder="Email"
//                 />
//                 <input
//                   className="border-2 border-[#EEEEEE] outline-none p-2 rounded-md focus:border-blue-500"
//                   type="text"
//                   placeholder="Phone No."
//                 />

//                 <button className="w-[150px] h-12 text-white bg-[#367285] flex items-center justify-center my-4 rounded-md mx-auto">
//                     Submit
//                 </button>

//               </div>

//                 </form>

//             </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import { IoLogoWhatsapp } from "react-icons/io";
import { FaRegThumbsUp } from "react-icons/fa";
import { BiMessageRoundedDots } from "react-icons/bi";

const ContactUs = () => {
  return (
    <div className="w-[90%] md:w-[75%] h-auto mx-auto md:my-24 contact-section">
      <h1 className="text-[#5A5A5A] text-4xl md:text-5xl text-center font-bold md:pb-12 md:py-4">
        CONTACT US
      </h1>

      {/* container */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-24 justify-center">
        {/* Left Side */}
        <div className="w-full md:w-[50%] py-12 md:py-0 md:-ml-12 text-center md:text-left">
          <h1 className="text-[#333333] text-2xl md:text-4xl font-bold md:py-6 pb-4">
            One Stop Solution to All <br /> Academic Worries
          </h1>

          <p className="text-sm md:text-base text-[#333333] pb-6">
            Struggling with looming deadlines and intricate assignments? At
            Academians, we understand the pressure students face daily. If
            you're constantly thinking, "Who can write my assignment for me?" or
            "Where can I pay someone to do my assignment?", look no further. Our
            team of dedicated assignment writers is here to provide top-notch,
            tailor-made solutions for all your academic needs. Let us be your
            academic beacon, guiding you through every challenge, ensuring your
            success.
          </p>

          <div className="flex flex-col md:flex-row gap-4 py-8 ">
            <div className="bg-[#007285] w-[470px] md:w-[230px] h-10 flex justify-center rounded-md">
              <div className="flex items-center gap-2">
                <BiMessageRoundedDots
                  className="text-2xl md:text-3xl"
                  color="white"
                />
                <h1 className="text-white font-bold text-sm">
                  TALK TO OUR EXPERT
                </h1>
              </div>
            </div>

            <div className="bg-[#408955] w-[470px] md:w-[230px] h-10 flex justify-center rounded-md">
              <div className="flex items-center gap-2">
                <IoLogoWhatsapp
                  className="text-2xl md:text-3xl"
                  color="white"
                />
                <h1 className="text-white font-bold text-sm  uppercase">
                  Whatsapp Now
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-auto flex justify-center -mt-2 md:mt-0">
          <div className="bg-[#007285] w-[90%] md:w-[450px] h-auto  rounded-2xl p-6 md:p-8">
            <h1 className="text-white text-xl md:text-2xl font-bold pb-4">
              Our team is available 24/7 <br /> to provide you the best
              assistance
            </h1>
            <form action="">
              <div className="flex flex-col gap-2 mt-2">
                <input
                  className="border-2 border-[#EEEEEE] outline-none p-2 rounded-md focus:border-blue-500"
                  type="text"
                  placeholder="Full Name"
                />
                <input
                  className="border-2 border-[#EEEEEE] outline-none p-2 rounded-md focus:border-blue-500"
                  type="text"
                  placeholder="Email"
                />
                <input
                  className="border-2 border-[#EEEEEE] outline-none p-2 rounded-md focus:border-blue-500"
                  type="text"
                  placeholder="Phone No."
                />

                <button className="w-full md:w-[150px] h-12 text-[#16334F] font-bold bg-white flex items-center justify-center my-4 rounded-md mx-auto">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
