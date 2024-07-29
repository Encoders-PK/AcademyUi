// // import hangBag from "../assets/hangBag.png";
// import { TbMessages } from "react-icons/tb";
// import { IoLogoWhatsapp } from "react-icons/io";
// import discountBanner from '../assets/discountBanner.png';

// const DiscountBanner = () => {
//   return (
//     <div className="w-full bg-[#078954] h-[350px] mt-24 relative flex items-center justify-center">
//       <div className="relative -top-20 -left-30">
//         <img src={discountBanner} className="w-[500px] h-[510px]"  alt="Hang Bag" />
//       </div>
//       <div className="ml-8 text-white ">
//         <h1 className="text-4xl font-bold">GET FLAT <span className="text-yellow-400 text-6xl">50%</span> DISCOUNT</h1>
//         <h2 className="text-2xl mt-4">Come First Avail 1st</h2>
//         <h2 className="text-2xl mt-2">05 Limited Coupon Available </h2>
//         <div className="flex items-center gap-2 py-6">
//             <div className="bg-[#367285] w-[230px] h-10 flex justify-center rounded-md">
//               <div className="flex items-center gap-2">
//                 <TbMessages className="text-3xl" />
//                 <h1 className="text-white font-bold">TALK TO OUR EXPERT</h1>
//               </div>
//             </div>

//             <div className="bg-[white]  w-[200px] h-10 flex justify-center rounded-md">
//               <div className="flex items-center gap-2">
//                 <IoLogoWhatsapp className="text-3xl" color="#408955" />
//                 <h1 className="text-[#408955] font-bold">Whatsapp Now</h1>
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default DiscountBanner;




import { TbMessages } from "react-icons/tb";
import { IoLogoWhatsapp } from "react-icons/io";
import discountBanner from '../assets/discountBanner.png';

const DiscountBanner = () => {
  return (
    <div className="w-full bg-[#078954] md:h-[350px] h-auto mt-24 relative flex items-center justify-center p-4 md:p-8">
      {/* Image Container */}
      <div className="relative hidden md:block  md:-top-20 md:-left-30">
        <img src={discountBanner} className="w-[500px] h-[510px]" alt="Discount Banner" />
      </div>

      {/* Text Content */}
      <div className="text-white text-center md:text-left md:ml-8">
        <h1 className="text-3xl md:text-4xl font-bold">
          GET FLAT <span className="text-yellow-400 text-4xl md:text-6xl">50%</span> DISCOUNT
        </h1>
        <h2 className="text-xl md:text-2xl mt-4">Come First Avail 1st</h2>
        <h2 className="text-xl md:text-2xl mt-2">05 Limited Coupon Available</h2>
        <div className="flex flex-col md:flex-row items-center gap-4 py-6">
          <div className="bg-[#367285] w-full md:w-[230px] h-12 flex justify-center rounded-md">
            <div className="flex items-center gap-2">
              <TbMessages className="text-2xl md:text-3xl" />
              <h1 className="text-white font-bold text-sm md:text-base">TALK TO OUR EXPERT</h1>
            </div>
          </div>

          <div className="bg-white w-full md:w-[200px] h-12 flex justify-center rounded-md">
            <div className="flex items-center gap-2">
              <IoLogoWhatsapp className="text-2xl md:text-3xl" color="#408955" />
              <h1 className="text-[#408955] font-bold text-sm md:text-base">Whatsapp Now</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;

