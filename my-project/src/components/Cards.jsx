

import { SlBadge } from "react-icons/sl";
// import womenicon from '../assets/womenicon.png'

const Cards = () => {
  return (
    <div className="w-[90%] md:w-[75%] h-auto mx-auto mt-8">
      <div className="flex flex-wrap gap-4 justify-center p-3">
        {/* card one */}
        <div className="w-full sm:w-[46%] md:w-[48%] lg:w-[492px] md:h-[460px] lg:h-[460px] h-auto bg-[#010621] shadow-xl mb-4">
          <div className="py-16 px-12 text-white">
            <SlBadge color="white" size={55} />
            <h1 className="text-xl pt-3">High-quality tutoring service</h1>
            <p className="text-sm py-1">
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>

        {/* card two */}
        <div className="w-full sm:w-[46%] md:w-[48%] lg:w-[492px] md:h-[460px] lg:h-[460px] h-auto bg-[#010621] shadow-xl mb-4">
          <div className="py-16 px-12 text-white">
            <SlBadge color="white" size={55} />
            {/* <img src={womenicon} className="w-[55px] h-[55px] text-white" alt="" /> */}
            

            <h1 className="text-xl pt-3">High-quality tutoring service</h1>
            <p className="text-sm py-1">
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center p-3">
        {/* card three */}
        <div className="w-full sm:w-[46%] md:w-[48%] lg:w-[492px] md:h-[460px] lg:h-[460px] h-auto bg-[#010621] shadow-xl mb-4">
          <div className="py-16 px-12 text-white">
            <SlBadge color="white" size={55} />
            <h1 className="text-xl pt-3">High-quality tutoring service</h1>
            <p className="text-sm py-1">
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>

        {/* card four */}
        <div className="w-full sm:w-[46%] md:w-[48%] lg:w-[492px] md:h-[460px] lg:h-[460px] h-auto bg-[#010621] shadow-xl mb-4">
          <div className="py-16 px-12 text-white">
            <SlBadge color="white" size={55} />
            <h1 className="text-xl pt-3">High-quality tutoring service</h1>
            <p className="text-sm py-1">
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

