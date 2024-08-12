// import  { useState } from 'react';
// import satisfactory from "../assets/satisfactory.png";

// const SatisfactoryBanner = () => {
//   const [helpType, setHelpType] = useState('');

//   const handleHelpTypeClick = (type) => {
//     setHelpType(type);
//   };

//   const getWhatsappLink = () => {
//     const promoMessage = 'Hello Team Academians, I want to avail my promo code TA-OFF50.';
  
//   // Dynamic help type message
//   const dynamicMessage = `I want ${helpType} help`;

//   // Combine both messages
//   const fullMessage = `${promoMessage}\n${dynamicMessage}`;

//   // Encode the full message for the URL
//   return `https://wa.me/447397145697?text=${encodeURIComponent(fullMessage)}`;
//   };

//   return (
//     <div className="bg-[#367285] mt-12 md:mt-24 w-full py-8">
//       <div className="w-full max-w-6xl mx-auto px-4">
//         {/* Container */}
//         <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
//           {/* Left Side */}
//           <div className="flex-1 p-4 md:p-6">
//             <h1 className="text-white text-xl md:text-4xl font-bold md:font-semibold">
//               Act Now Before It's Too Late
//             </h1>

//             <div className="flex flex-col md:flex-row items-center gap-4 py-6">
//               <input
//                 type="text"
//                 className="border-2 border-[#EEEEEE] outline-none px-4 w-full md:w-[450px] h-12"
//                 placeholder="Problem Help"
//                 value={helpType}
                
//               />
//               <a
//                 href={getWhatsappLink()}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button className="bg-[#078954] w-[300px] md:w-[120px]  h-auto rounded-lg text-white py-2 px-2 mt-4 md:mt-0 uppercase font-bold">
//                   Get Help
//                 </button>
//               </a>
//             </div>

//             <h1 className="text-white text-sm md:text-base">
//               For Ex:
//               <span
//                 className="custom-underline inline-block mx-1 md:mx-2 cursor-pointer"
//                 onClick={() => handleHelpTypeClick('Assignment')}
//               >
//                 Assignment
//               </span>
//               <span
//                 className="custom-underline inline-block mx-1 md:mx-2 cursor-pointer"
//                 onClick={() => handleHelpTypeClick('Dissertation')}
//               >
//                 Dissertation
//               </span>
//               <span
//                 className="custom-underline inline-block mr-2 ml-12 md:mx-2 cursor-pointer"
//                 onClick={() => handleHelpTypeClick('Coursework')}
//               >
//                 Coursework
//               </span>
//               <span
//                 className="custom-underline inline-block mx-1 md:mx-14 pt-4 cursor-pointer"
//                 onClick={() => handleHelpTypeClick('Online Exams')}
//               >
//                 Online Exams
//               </span>
//             </h1>
//           </div>

//           {/* Right Side */}
//           <div className="w-full md:w-1/2 relative">
//             <img
//               src={satisfactory}
//               className="w-full h-auto object-cover md:absolute top-0 left-0 md:top-[-240px] md:left-[-10px]"
//               alt="Satisfactory Banner"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SatisfactoryBanner;

import { useState } from 'react';
import satisfactory from "../assets/satisfactory.png";

const SatisfactoryBanner = () => {
  const [inputText, setInputText] = useState(''); // Single state for both help type and custom text

  const getWhatsappLink = () => {
    const promoMessage = 'Hello Team Academians, I want to avail my promo code TA-OFF50.';

    // Combine promo message with the input text
    const fullMessage = `${promoMessage}\nI want ${inputText} help`;

    // Encode the full message for the URL
    return `https://wa.me/447397145697?text=${encodeURIComponent(fullMessage)}`;
  };

  const handleHelpTypeClick = (type) => {
    setInputText(type); // Set the clicked help type as the input text
  };

  return (
    <div className="bg-[#367285] mt-12 md:mt-24 w-full py-8">
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Container */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
          {/* Left Side */}
          <div className="flex-1 p-4 md:p-6">
            <h1 className="text-white text-xl md:text-4xl font-bold md:font-semibold">
              Act Now Before It's Too Late
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-4 py-6">
              <input
                type="text"
                className="border-2 border-[#EEEEEE] outline-none px-4 w-full md:w-[450px] h-12"
                placeholder="Type your request here"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)} // Update input text on change
              />
              <a
                href={getWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#078954] w-[300px] md:w-[120px] h-auto rounded-lg text-white py-2 px-2 mt-4 md:mt-0 uppercase font-bold">
                  Get Help
                </button>
              </a>
            </div>

            <h1 className="text-white text-sm md:text-base">
              For Ex:
              <span
                className="custom-underline inline-block mx-1 md:mx-2 cursor-pointer"
                onClick={() => handleHelpTypeClick('Assignment')}
              >
                Assignment
              </span>
              <span
                className="custom-underline inline-block mx-1 md:mx-2 cursor-pointer"
                onClick={() => handleHelpTypeClick('Dissertation')}
              >
                Dissertation
              </span>
              <span
                className="custom-underline inline-block mr-2 ml-12 md:mx-2 cursor-pointer"
                onClick={() => handleHelpTypeClick('Coursework')}
              >
                Coursework
              </span>
              <span
                className="custom-underline inline-block mx-1 md:mx-14 pt-4 cursor-pointer"
                onClick={() => handleHelpTypeClick('Online Exams')}
              >
                Online Exams
              </span>
            </h1>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 relative">
            <img
              src={satisfactory}
              className="w-full h-auto object-cover md:absolute top-0 left-0 md:top-[-240px] md:left-[-10px]"
              alt="Satisfactory Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatisfactoryBanner;


