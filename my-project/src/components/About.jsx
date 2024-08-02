// import aboutPic from "../assets/aboutPic.png";

// const About = () => {
//   return (
//     <div className="w-[75%] mx-auto mt-12 py-12  h-[612px] about-section">
//       {/* container */}
//       <div className="flex items-center justify-between ">
//         {/* left side     */}
//         <div className="w-[40%]">
//           <h1 className="text-3xl font-bold text-[#5A5A5A] leading-tight ">
//             Welcome to the most Reliable &<br /> Affordable
//             <span className="text-[#078954]">Tutoring Help</span> by Top <br />
//             Notch Paki PhD Experts
//           </h1>
//           <p className="py-6 font-medium">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text
//             ever since the 1500s, when an unknown printer took a galley of type
//             and scrambled it to make a type specimen book. It has survived not
//             only five centuries, but also the leap into electronic typesetting,
//             remaining essentially unchanged. It was popularised in the 1960s
//             with the release of Letraset sheets containing Lorem Ipsum passages,
//             and more recently with desktop publishing software like Aldus
//             PageMaker including versions of Lorem Ipsum.
//           </p>
//         </div>

//         {/* right side */}

//         <div className="">
//           <img src={aboutPic} alt="About Picture" />
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
    <div className="md:w-[75%] w-full px-4 mx-auto md:mt-12 md:py-12">
      {/* container */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* left side */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold text-[#5A5A5A] md:leading-tight">
            Welcome to the most Reliable &<br />
            Affordable
            <span className="text-[#F1B815]"> Tutoring Help</span> by Top <br />
            Notch Paki PhD Experts
          </h1>
          <p className="py-6 font-medium text-sm md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="flex flex-col md:flex-row gap-4 py-8 ">
            <div className="bg-[#007285] w-[470px] md:w-[230px] h-10 flex justify-center rounded-md">
              <div className="flex items-center gap-2">
                <BiMessageRoundedDots className="text-2xl md:text-3xl" color="white" />
                <h1 className="text-white font-bold text-sm ">TALK TO OUR EXPERT</h1>
              </div>
            </div>

            <div className="bg-[#408955] w-[470px] md:w-[230px] h-10 flex justify-center rounded-md">
              <div className="flex items-center gap-2">
                <IoLogoWhatsapp className="text-2xl md:text-3xl" color="white" />
                <h1 className="text-white font-bold text-sm  uppercase">Whatsapp Now</h1>
              </div>
            </div>
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

