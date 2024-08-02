// import { useState } from "react";
// import HomeworkImage from "../assets/slide-1.png";
// import AssignmentImage from "../assets/slide-2.png";
// import ResearchImage from "../assets/slide-3.png";
// import AssignmentEditImage from "../assets/slide-4.png";
// import OtherImage from "../assets/slide-5.png";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { FaCheck } from "react-icons/fa";

// const tabs = [
//   {
//     name: "Homework",
//     content: {
//       heading: "Homework",
//       description:
//         "We understand your academic career will be filled with complex homework tasks, but don’t take stress to complete it efficiently.",
//       bulletPoints: [
//         "More than 50 subjects covered",
//         "24-7 services available",
//         "Get unlimited revisions",
//       ],
//       image: HomeworkImage,
//     },
//   },
//   {
//     name: "Assignment",
//     content: {
//       heading: "Assignment",
//       description:
//         "Looking for a professional writer to deal with scientific research papers? Look, nowhere we are here to provide your best research paper writing.",
//       bulletPoints: [
//         "On-time submission",
//         "Expert guidance",
//         "Custom solutions",
//       ],
//       image: AssignmentImage,
//     },
//   },
//   {
//     name: "Research Paper",
//     content: {
//       heading: "Research Paper",
//       description:
//         "Looking for a professional writer to deal with scientific research papers? Look, nowhere we are here to provide your best research paper writing.",
//       bulletPoints: [
//         "On-time submission",
//         "Expert guidance",
//         "Custom solutions",
//       ],
//       image: ResearchImage,
//     },
//   },
//   {
//     name: "Assignment Editing",
//     content: {
//       heading: "Assignment Editing",
//       description:
//         "Looking for a professional writer to deal with scientific research papers? Look, nowhere we are here to provide your best research paper writing.",
//       bulletPoints: [
//         "On-time submission",
//         "Expert guidance",
//         "Custom solutions",
//       ],
//       image: AssignmentEditImage,
//     },
//   },
//   {
//     name: "Other",
//     content: {
//       heading: "Research Paper",
//       description:
//         "Looking for a professional writer to deal with scientific research papers? Look, nowhere we are here to provide your best research paper writing.",
//       bulletPoints: [
//         "On-time submission",
//         "Expert guidance",
//         "Custom solutions",
//       ],
//       image: OtherImage,
//     },
//   },
// ];

// const Services = () => {
//   const [activeTab, setActiveTab] = useState(tabs[0]);

//   return (
//     <div className="relative w-full">
//       <div className="w-[65%] ml-[14%] mb-14">
//         <h1 className="text-center py-20 font-bold text-6xl text-[#5A5A5A] uppercase">Services by Us</h1>
//         <div className="bg-[#F6F8FA] h-[618px] py-14 px-8">
//           <div className="w-[70%]">
//             <h1 className="uppercase text-3xl font-bold text-[#232E45]">
//               What Our Experts Can Do
//             </h1>

//             <div className="flex items-center gap-6 pt-6 pb-3 pl-2">
//               {tabs.map((tab) => (
//                 <ul
//                   key={tab.name}
//                   className={`cursor-pointer ${
//                     activeTab.name === tab.name
//                       ? "font-semibold text-[#408955]"
//                       : ""
//                   }`}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab.name}
//                 </ul>
//               ))}
//             </div>
//             <div className="border-b border-black"></div>

//             <div>
//               <h1 className="py-7 font-bold">{activeTab.content.heading}</h1>
//               <p className="pb-7">{activeTab.content.description}</p>
//               <ul className="list-none pl-0">
//                 {activeTab.content.bulletPoints.map((point, index) => (
//                   <li key={index} className="flex items-center gap-2">
//                     <FaCheck className="text-green-500" />
//                     {point}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Button */}
//             <div className="bg-[#408955] w-[470px] md:w-[230px] h-10 flex justify-center shadow-md rounded-md mt-14">
//               <div className="flex items-center gap-2">
//                 <IoLogoWhatsapp className="text-2xl md:text-3xl" color="white" />
//                 <h1 className="text-white font-bold text-sm uppercase">talk to our expert</h1>
//               </div>
//             </div>
//             <div>
//               <h1 className="text-sm px-8 py-2">It’s <b>100%</b> Confidentials</h1>
//             </div>
//           </div>
//         </div>

//         <img
//           src={activeTab.content.image}
//           className="absolute top-60 right-20"
//           alt={activeTab.name}
//         />
//       </div>
//     </div>
//   );
// };

// export default Services;



import { useState } from "react";
import HomeworkImage from "../assets/slide-1.png";
import AssignmentImage from "../assets/slide-2.png";
import ResearchImage from "../assets/slide-3.png";
import AssignmentEditImage from "../assets/slide-4.png";
import OtherImage from "../assets/slide-5.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const tabs = [
  {
    name: "Homework",
    content: {
      heading: "Homework",
      description:
        "We understand your academic career will be filled with complex homework tasks, but don’t take stress to complete it efficiently.",
      bulletPoints: [
        "More than 50 subjects covered",
        "24-7 services available",
        "Get unlimited revisions",
      ],
      image: HomeworkImage,
    },
  },
  {
    name: "Assignment",
    content: {
      heading: "Assignment",
      description:
        "Looking for a professional writer to deal with scientific research papers? Look, nowhere we are here to provide your best research paper writing.",
      bulletPoints: [
        "On-time submission",
        "Expert guidance",
        "Custom solutions",
      ],
      image: AssignmentImage,
    },
  },
  {
    name: "Research Paper",
    content: {
      heading: "Research Paper",
      description:
        "Looking for a professional writer to deal with scientific research papers? Look, nowhere we are here to provide your best research paper writing.",
      bulletPoints: [
        "On-time submission",
        "Expert guidance",
        "Custom solutions",
      ],
      image: ResearchImage,
    },
  },
  {
    name: "Assignment Editing",
    content: {
      heading: "Assignment Editing",
      description:
        "Looking for a professional writer to deal with scientific research papers? Look, nowhere we are here to provide your best research paper writing.",
      bulletPoints: [
        "On-time submission",
        "Expert guidance",
        "Custom solutions",
      ],
      image: AssignmentEditImage,
    },
  },
  {
    name: "Other",
    content: {
      heading: "Research Paper",
      description:
        "Looking for a professional writer to deal with scientific research papers? Look, nowhere we are here to provide your best research paper writing.",
      bulletPoints: [
        "On-time submission",
        "Expert guidance",
        "Custom solutions",
      ],
      image: OtherImage,
    },
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="relative w-full px-4 md:px-0">
      <div className="md:w-[65%] w-full mx-auto md:mx-0  md:ml-[14%] mb-14">
        <h1 className="text-center py-20 font-bold text-3xl md:text-6xl text-[#5A5A5A] uppercase">Services by Us</h1>
        <div className="bg-[#F6F8FA] py-14 px-8 rounded-lg shadow-md">
          <div className="w-full md:w-[70%] mx-auto md:mx-0">
            <h1 className="uppercase text-2xl md:text-3xl font-bold text-[#232E45] text-center md:text-left">
              What Our Experts Can Do
            </h1>

            <div className="flex flex-wrap items-center gap-6 pt-6 pb-3 pl-2 justify-center md:justify-start">
              {tabs.map((tab) => (
                <ul
                  key={tab.name}
                  className={`cursor-pointer ${
                    activeTab.name === tab.name
                      ? "font-semibold text-[#408955]"
                      : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.name}
                </ul>
              ))}
            </div>
            <div className="border-b border-black mb-6"></div>

            <div className="text-center md:text-left">
              <h1 className="py-7 font-bold text-xl md:text-2xl">{activeTab.content.heading}</h1>
              <p className="pb-7">{activeTab.content.description}</p>
              <ul className="list-none pl-0">
                {activeTab.content.bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-2 justify-center md:justify-start">
                    <FaCheck className="text-green-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <div className="bg-[#408955] w-full md:w-[230px] h-10 flex justify-center shadow-md rounded-md mt-14 mx-auto md:mx-0">
              <div className="flex items-center gap-2">
                <IoLogoWhatsapp className="text-2xl md:text-3xl" color="white" />
                <h1 className="text-white font-bold text-sm uppercase">talk to our expert</h1>
              </div>
            </div>
            <div>
              <h1 className="text-sm text-center md:text-left px-8 py-2">It’s <b>100%</b> Confidentials</h1>
            </div>
          </div>
        </div>

        <img
          src={activeTab.content.image}
          className="md:absolute hidden md:block top-60 right-4 md:right-20 w-[400px] h-auto md:w-auto"
          alt={activeTab.name}
        />
      </div>
    </div>
  );
};

export default Services;


