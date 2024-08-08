// import { BiMessageRoundedDots } from "react-icons/bi"
// import { IoLogoWhatsapp } from "react-icons/io"

// const StickyBtn = () => {
//   return (
//     <div className='bg-white md:hidden block w-full h-auto fixed bottom-0 left-0 right-0 mt-24'>
//           <div className="flex  gap-4 py-8 ">
//             <div className="bg-[#ffb800] w-[470px] md:w-[230px] h-10 flex justify-center rounded-md">
//               <div className="flex items-center gap-2">
//                 <BiMessageRoundedDots className="text-2xl md:text-3xl" color="white" />
//                 <h1 className="text-white font-bold text-sm uppercase">TALK TO OUR EXPERT</h1>
//               </div>
//             </div>

//             <div className="bg-white w-[470px] md:w-[230px] h-10 flex justify-center rounded-md">
//               <div className="flex items-center gap-2">
//                 <IoLogoWhatsapp className="text-2xl md:text-3xl" color="#408955" />
//                 <h1 className="text-[#408955] font-bold text-sm  uppercase">Whatsapp Now</h1>
//               </div>
//             </div>
//           </div>
//     </div>
//   )
// }

// export default StickyBtn


import { IoLogoWhatsapp } from "react-icons/io";

const StickyBtn = () => {
  return (
    <div className='bg-white fixed bottom-0 left-0 right-0 mt-24 md:hidden block'>
      <div className="flex  gap-4 py-2 px-2">
        <div className="bg-[#367285] w-full h-16 flex justify-center rounded-md">
          <div className="flex items-center gap-1 w-full max-w-[470px] mx-auto">
            <h1 className="text-white font-bold text-sm uppercase"></h1>
          </div>
        </div>

        <div className="bg-[#408955] w-full h-16 flex justify-center rounded-md border">
          <div className="flex items-center gap-2 w-full max-w-[470px] mx-auto">
            <IoLogoWhatsapp className="text-3xl pl-1" color="white" />
            <h1 className="text-white font-bold text-xl uppercase">Whatsapp</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBtn;
