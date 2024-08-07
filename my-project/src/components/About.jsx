// import aboutPic from "../assets/aboutPic.png";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { BiMessageRoundedDots } from "react-icons/bi";

// const About = () => {
//   return (
//     <div className="md:w-[75%] w-full  mx-auto mt-12 md:py-12 border border-black">
//       {/* container */}
//       <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
//         {/* left side */}
//         <div className="w-full md:w-1/2">
//           <h1 className="text-2xl md:text-3xl font-bold  px-2 text-[#5A5A5A] md:leading-tight ">
//             Welcome to the most Reliable &<br />
//             Affordable
//             <span className="text-[#F1B815]"> Tutoring Help</span> by Top <br />
//             Notch Paki PhD Experts
//           </h1>
//           <p className="py-6 px-2 font-medium text-sm md:text-base ">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text
//             ever since the 1500s, when an unknown printer took a galley of type
//             and scrambled it to make a type specimen book. It has survived not
//             only five centuries, but also the leap into electronic typesetting,
//             remaining essentially unchanged. It was popularised in the 1960s
//             with the release of Letraset sheets containing Lorem Ipsum passages,
//             and more recently with desktop publishing software like Aldus
//             PageMaker including versions of Lorem Ipsum.
//           </p>
//           {/* <div className="flex flex-col md:flex-row mx-2 md:mx-0 gap-4 py-8 ">
//             <div className="bg-[#007285] w-[470px] md:w-[230px] h-10 flex justify-center rounded-md">
//               <div className="flex items-center gap-2">
//                 <BiMessageRoundedDots className="text-2xl md:text-3xl" color="white" />
//                 <h1 className="text-white font-bold text-sm ">TALK TO OUR EXPERT</h1>
//               </div>
//             </div>

//             <div className="bg-[#408955] w-[470px] md:w-[230px] h-10 flex justify-center rounded-md">
//               <div className="flex items-center gap-2">
//                 <IoLogoWhatsapp className="text-2xl md:text-3xl" color="white" />
//                 <h1 className="text-white font-bold text-sm  uppercase">Whatsapp Now</h1>
//               </div>
//             </div>
//           </div> */}

//           {/* Buttons */}
//           <div className="flex flex-col md:flex-row gap-4 py-8">
//                 <div className="bg-[#ffb800] w-full md:w-56 h-10 flex justify-center rounded-md">
//                   <div className="flex items-center gap-2">
//                     <BiMessageRoundedDots className="text-2xl md:text-3xl" color="white" />
//                     <h1 className="text-white font-bold text-sm uppercase">TALK TO OUR EXPERT</h1>
//                   </div>
//                 </div>

//                 <div className="bg-white w-full md:w-56 h-10 flex justify-center rounded-md">
//                   <div className="flex items-center gap-2">
//                     <IoLogoWhatsapp className="text-2xl md:text-3xl" color="#408955" />
//                     <h1 className="text-[#408955] font-bold text-sm uppercase">Whatsapp Now</h1>
//                   </div>
//                 </div>
//               </div>

//         </div>

//         {/* right side */}
//         <div className="hidden md:block md:w-1/2">
//           <img src={aboutPic} alt="About Picture" className="w-full h-auto" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import aboutPic from "../assets/aboutPic.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiMessageRoundedDots } from "react-icons/bi";

const About = () => {
  return (
    <div className="md:w-[75%] w-full mx-auto mt-12 md:py-12  px-4">
      {/* container */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* left side */}
        <div className="w-full md:w-1/2">
          <h1 className="text-xl md:text-3xl font-bold px-2 text-[#5A5A5A] md:leading-tight">
            Expert <span className="text-[#F1B815]">Assignment Assistance</span>{" "}
            Tailored Support for Your Academic Success
          </h1>
          {/* <h1 className="text-xl md:text-3xl font-bold px-2 text-[#5A5A5A] md:leading-tight">
            Welcome to the most Reliable &<br />
            Affordable
            <span className="text-[#F1B815]"> Tutoring Help</span> by Top <br />
            Notch Paki PhD Experts
          </h1> */}
          <p className="py-6 px-2 font-medium text-sm md:text-base">
            Do you face difficulties with your assignment or dissertation and
            you require professional help? This is your academic guide; our
            professional team is ready to assist you in achieving your goals.
            Each client is provided with customized services, and that is why we
            offer you original content that complies with the academic level you
            specify. Regardless of the type of issues that you have – with
            research, with writing, or with editing – we are happy to help and
            support you. Chat now to know more on What Our Experts Can Do
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 py-8">
            <div className="bg-[#ffb800] w-full md:w-56 h-10 flex justify-center rounded-md">
              <div className="flex items-center gap-2">
                <BiMessageRoundedDots
                  className="text-2xl md:text-3xl"
                  color="white"
                />
                <h1 className="text-white font-bold text-sm uppercase">
                  TALK TO OUR EXPERT
                </h1>
              </div>
            </div>

            <a href="https://wa.me/447397145697" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center">
            <div className="bg-white w-full md:w-56 h-10 flex justify-center rounded-md border border-[#408955]">
              <div className="flex items-center gap-2">
                <IoLogoWhatsapp
                  className="text-2xl md:text-3xl"
                  color="#408955"
                />
                <h1 className="text-[#408955] font-bold text-sm uppercase">
                  Whatsapp Now
                </h1>
              </div>
            </div>
            </a>
          </div>
        </div>

        {/* right side */}
        <div className="hidden md:block md:w-1/2">
          <img src={aboutPic} alt="About Picture" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default About;
