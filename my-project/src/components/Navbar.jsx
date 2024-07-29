// import { useState, useRef, useEffect } from "react";
// import { FaRegSmileBeam } from "react-icons/fa";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { TiArrowSortedDown } from "react-icons/ti";
// import Banner from "./Banner";

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const serviceRef = useRef(null);


//   // Toggle dropdown visibility
//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   // Close dropdown if click outside of dropdown or service
//   const handleClickOutside = (event) => {
//     if (
//       dropdownRef.current &&
//       !dropdownRef.current.contains(event.target) &&
//       !serviceRef.current.contains(event.target)
//     ) {
//       setIsDropdownOpen(false);
//     }
//   };


//   const scrollToAbout = () => {
//     const aboutSection = document.querySelector(".about-section");
//     if (aboutSection) {
//       aboutSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const scrollToContactUs = () => {
//     const aboutSection = document.querySelector(".contact-section");
//     if (aboutSection) {
//       aboutSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Add event listener for clicks outside
//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);


  

//   return (
//     <div className="bg-[#020621] h-auto w-full curve-bottom pt-6 md:mt-10">
//       {/* main container */}
//       <div className="flex items-center justify-between w-[75%] mx-auto text-white">
//         <div className="text-2xl">Logo Here</div>

//         <div className="flex gap-10">
//           <h1>Home</h1>
//           <h1 onClick={scrollToAbout} className="cursor-pointer">
//             About
//           </h1>

//           <div
//             className="relative flex items-center gap-2"
//             onClick={toggleDropdown}
//             ref={serviceRef}
//           >
//             <h1
//               className={`cursor-pointer ${
//                 isDropdownOpen ? "text-blue-500" : ""
//               }`}
//             >
//               Service
//             </h1>
//             <TiArrowSortedDown size={15} />
//             {isDropdownOpen && (
//               <div
//                 className="absolute top-full left-0 mt-2 bg-[#1F2851] w-48 text-white rounded-md shadow-lg z-10"
//                 ref={dropdownRef}
//               >
//                 <ul>
//                   <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 cursor-pointer">
//                     Assignment Help
//                   </li>
//                   <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 cursor-pointer">
//                     Essay Help
//                   </li>
//                   <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 cursor-pointer">
//                     Coursework Help
//                   </li>
//                   <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 cursor-pointer">
//                     Exam Online Help
//                   </li>
//                   <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 cursor-pointer">
//                     Dissertation Help
//                   </li>
//                   <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 cursor-pointer">
//                     Research Proposal Help
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>

//           <h1>Reviews</h1>
//           <h1 onClick={scrollToContactUs} className="cursor-pointer">
//             Contact Us
//           </h1>
//         </div>

//         <div className="flex gap-4">
//           <div className="bg-white px-2 py-2 flex justify-center rounded">
//             <div className="flex items-center gap-2">
//               <FaRegSmileBeam color="green" className="text-3xl" />
//               <h1 className="text-black">Our Reviews</h1>
//             </div>
//           </div>

//           <div className="bg-[#408955] flex justify-center rounded-md">
//             <div className="flex items-center gap-2">
//               <IoLogoWhatsapp className="text-3xl" />
//               <h1 className="text-white">50% discount</h1>
//             </div>
//           </div>
//         </div>
//       </div>

      

//       <Banner />
//     </div>
//   );
// };

// export default Navbar;

import { useState, useRef, useEffect } from "react";
import { FaRegSmileBeam } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { TiArrowSortedDown, TiThMenu, TiTimes } from "react-icons/ti";
import { IoHome } from "react-icons/io5";

import { Link,useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const serviceRef = useRef(null);
  const navigate = useNavigate();

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown if click outside of dropdown or service
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !serviceRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    navigate('/about');
  };

  const scrollToContactUs = () => {
    const aboutSection = document.querySelector(".contact-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Add event listener for clicks outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#020621]  h-auto w-full py-8 md:mt-10">
      {/* main container */}
      <div className="flex items-center justify-between md:w-[75%] w-[95%] mx-auto  text-white">
        <div className="text-2xl">Logo Here</div>

        <div className="hidden md:flex gap-10">
         <Link to={'/'}>
         <h1>Home</h1>
         </Link>
          <Link to={'/about'}>
          <h1 onClick={scrollToAbout} className="cursor-pointer">
            About
          </h1>
          </Link>

          <div
            className="relative flex items-center gap-2"
            onClick={toggleDropdown}
            ref={serviceRef}
          >
            <h1
              className={`cursor-pointer ${
                isDropdownOpen ? "text-blue-500" : ""
              }`}
            >
              Service
            </h1>
            <TiArrowSortedDown size={15} />
            {isDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 bg-[#1F2851] w-48 text-white rounded-md shadow-lg z-10"
                ref={dropdownRef}
              >
                <ul>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 cursor-pointer">
                    Assignment Help
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 cursor-pointer">
                    Essay Help
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 cursor-pointer">
                    Coursework Help
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 cursor-pointer">
                    Exam Online Help
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 cursor-pointer">
                    Dissertation Help
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 cursor-pointer">
                    Research Proposal Help
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link to={'/review'}><h1>Reviews</h1></Link>
          <h1 onClick={scrollToContactUs} className="cursor-pointer">
            Contact Us
          </h1>
        </div>

        <div className="hidden  md:flex gap-4">
          <div className="bg-white px-2 py-2 flex justify-center rounded">
            <div className="flex items-center gap-2">
              <FaRegSmileBeam color="green" className="text-3xl" />
              <h1 className="text-black">Our Reviews</h1>
            </div>
          </div>

          <div className="bg-[#408955] flex justify-center rounded-md">
            <div className="flex items-center gap-2">
              <IoLogoWhatsapp className="text-3xl" />
              <h1 className="text-white">50% discount</h1>
            </div>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <TiTimes size={30} className="text-white" />
            ) : (
              <TiThMenu size={30} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#020621] w-full text-white px-4 py-8">
         <div className="flex gap-2 items-center">
         <IoHome size={20} />
          <h1>Home</h1>
         </div>
          <h1 onClick={scrollToAbout} className="cursor-pointer pb-4 pt-4">
            About
          </h1>


      {/* services main container */}
      <div>
       <div className="flex items-center border border-white gap-2">
       <IoHome size={20} />
       <div className="relative flex items-center gap-1 pb-4" onClick={toggleDropdown} ref={serviceRef}>
            <h1 className={`cursor-pointer  ${isDropdownOpen ? "text-blue-500" : ""}`}>Service</h1>
            <TiArrowSortedDown size={15} />
          </div>
       </div>
          {isDropdownOpen && (
            <div className="bg-[#1F2851] text-white rounded-md shadow-lg mt-2">
              <ul>
                <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 cursor-pointer">
                  Assignment Help
                </li>
                <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 cursor-pointer">
                  Essay Help
                </li>
                <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 cursor-pointer">
                  Coursework Help
                </li>
                <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 cursor-pointer">
                  Exam Online Help
                </li>
                <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 cursor-pointer">
                  Dissertation Help
                </li>
                <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 cursor-pointer">
                  Research Proposal Help
                </li>
              </ul>
            </div>
          )}
         </div>

         <Link to={'review'}> <h1 className="pb-4">Reviews</h1></Link>
          <h1 onClick={scrollToContactUs} className="cursor-pointer py-2">
            Contact Us
          </h1>

         <div className="flex items-center gap-4">
         <div className="bg-white w-1/2 px-2 py-2 flex justify-center rounded my-2">
            <div className="flex items-center gap-2">
              <FaRegSmileBeam color="green" className="text-3xl" />
              <h1 className="text-black">Our Reviews</h1>
            </div>
          </div>

          <div className="bg-[#408955] w-1/2 px-2 py-2 flex justify-center rounded-md">
            <div className="flex items-center gap-2">
              <IoLogoWhatsapp className="text-3xl" />
              <h1 className="text-white">50% discount</h1>
            </div>
          </div>
         </div>
        </div>
      )}

     
    </div>
  );
};

export default Navbar;


