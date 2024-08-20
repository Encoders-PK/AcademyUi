import { IoLogoWhatsapp } from "react-icons/io";

const StickyBtn = () => {
  return (
    <div className='bg-white fixed bottom-0 left-0 right-0 mt-24 md:hidden block'>
      <div className="flex  gap-2 py-2 px-2">
        <div className="bg-[#FFB800] w-full h-16 flex justify-center rounded-md">
          <div className="flex items-center gap-1 w-full max-w-[470px] mx-auto">
            <h1 className="text-white font-bold text-sm uppercase"></h1>
          </div>
        </div>
        <div>
        <a
              href={`https://wa.me/447397145697?text=${encodeURIComponent(
                "Hello Team Academians, I want to avail my promo code TA-OFF50."
              )}`}
              target="_blank"
              rel="noopener noreferrer">
        <div className="bg-[#408955] w-full h-16 flex justify-center rounded-md border">
          <div className="flex items-center gap-1 px-4 w-full max-w-[470px] mx-auto">
            <IoLogoWhatsapp className="text-3xl" color="white" />
            <h1 className="text-white font-bold text-xl">WhatsApp</h1>
          </div>
        </div>
        </a>
        </div>
      </div>
    </div>
  );
};

export default StickyBtn;
