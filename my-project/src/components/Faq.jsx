

// import  { useState } from "react";
// import FaqSide from "../assets/FaqSide.png";

// const Faq = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const faqs = [
//     "1. How do I hire a tutor helper here?",
//     "2. What is the cost of hiring a tutor?",
//     "3. What subjects can the tutors help with?",
//     "4. How do I schedule a session with a tutor?",
//     "5. Can I change my tutor if I am not satisfied?",
//     "6. What qualifications do the tutors have?",
//     "7. How do I provide feedback on my tutor?",
//   ];

//   return (
//     <div className="w-[90%] h-[780px] mx-auto my-24">
//       <div className="text-center pb-12">
//         <h1 className="text-5xl font-bold text-[#5A5A5A]">FAQ</h1>
//         <h2 className="text-3xl text-[#5A5A5A] py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
       
//       </div>


//       {/* container */}
//       <div className=" flex items-center gap-12 justify-center">


//         {/* left Side */}
//         <div className="w-[30%] ">
        
//         <img src={FaqSide} alt="" className="w-full h-full" />

//         </div>


//         {/* Right Side  */}
//           <div className="w-[50%] px-8">
//           <h2 className="text-3xl text-[#5A5A5A] py-6">Have your questions answered</h2>
//           <div className="">
//         <div className="bg-[#010621] text-white w-[650px] rounded-lg shadow-md p-4 ">
//           {faqs.map((faq, index) => (
//             <FAQItem
//               key={index}
//               question={faq}
//               isOpen={index === openIndex}
//               onClick={() => setOpenIndex(index === openIndex ? null : index)}
//             />
//           ))}
//         </div>

//         </div>


//           </div>


//       </div>
      
      
        
      

//       {/* <div className="absolute transform translate-x-[120%] top-80">
//         <img src={book} alt="FAQ illustration" className="w-48 h-48" />
//       </div> */}
//     </div>
//   );
// };

// const FAQItem = ({ question, isOpen, onClick }) => {
//     return (
//       <div className="border-b">
//         <button
//           onClick={onClick}
//           className="w-full text-left px-4 py-3 focus:outline-none flex justify-between items-center"
//         >
//           <span className="text-lg">{question}</span>
//           <span className={`text-xl w-7 h-7 flex items-center justify-center font-bold rounded-[50%] p-1  ${isOpen ? 'bg-white text-black' : 'bg-white text-black'}`}>
//             {isOpen ? "x" : "+"}
//           </span>
//         </button>
//         {isOpen && (
//           <div className="px-4 text-white bg-[#010621]">
//             <p>
//               It is a long established fact that a reader will be distracted by
//               the readable content of a page when looking at its layout. The point
//               of using Lorem Ipsum is that it has a more-or-less normal
//               distribution of letters, as opposed to using 'Content here, content
//               here', making it look like readable English.
//             </p>
//           </div>
//         )}
//       </div>
//     );
//   };
  

// export default Faq;


import { useState } from "react";
import FaqSide from "../assets/FaqSide.png";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    "1. How do I hire a tutor helper here?",
    "2. What is the cost of hiring a tutor?",
    "3. What subjects can the tutors help with?",
    "4. How do I schedule a session with a tutor?",
    "5. Can I change my tutor if I am not satisfied?",
    "6. What qualifications do the tutors have?",
    "7. How do I provide feedback on my tutor?",
  ];

  return (
    <div className="w-full md:w-[90%] px-4 py-24 mx-auto">
      <div className="text-center pb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5A5A5A]">FAQ</h1>
        <h2 className="text-xl md:text-2xl text-[#5A5A5A] pt-4 px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
      </div>

      {/* Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">

        {/* Left Side */}
        <div className="w-full md:w-[30%] hidden md:block">
          <img src={FaqSide} alt="FAQ Illustration" className="w-full h-auto" />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[50%] px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl text-[#5A5A5A] py-6">
            Have your questions answered
          </h2>
          <div className="bg-[#010621] text-white rounded-lg shadow-md p-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq}
                isOpen={index === openIndex}
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

const FAQItem = ({ question, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-600">
      <button
        onClick={onClick}
        className="w-full text-left px-4 py-3 focus:outline-none flex justify-between items-center"
      >
        <span className="text-lg">{question}</span>
        <span className={`text-xl w-7 h-7 flex items-center justify-center font-bold rounded-full p-1 ${isOpen ? 'bg-white text-black' : 'bg-gray-600 text-white'}`}>
          {isOpen ? "x" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="px-4 py-2 text-white bg-[#010621]">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
      )}
    </div>
  );
};

export default Faq;



