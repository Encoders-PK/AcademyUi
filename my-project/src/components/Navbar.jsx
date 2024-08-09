// import { useState, useRef, useEffect } from "react";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { TiArrowSortedDown, TiThMenu, TiTimes } from "react-icons/ti";
// import { IoHome } from "react-icons/io5";
// import Available from "../assets/Available.png";
// import { IoBagCheck } from "react-icons/io5";
// import { FaBuildingColumns } from "react-icons/fa6";
// import { BiMessageRoundedDots } from "react-icons/bi";
// import { IoMdCall } from "react-icons/io";
// import logo from "../assets/ta-logo.png";
// import { NavLink } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = ({ aboutRef, contactRef }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const serviceRef = useRef(null);
//   const navigate = useNavigate();

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
//     if (aboutRef.current) {
//       aboutRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//     navigate("/about-us");
//   };

//   const scrollToContactUs = () => {
//     contactRef.current?.scrollIntoView({ behavior: "smooth" });
//     navigate("/contact-us"); // Change the URL
//   };

//   // Add event listener for clicks outside
//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="bg-[#367285]  h-auto w-full lg:py-8 md:py-8 pt-8 md:pt-0 pb-8 md:pb-0 md:mt-8">
//       {/* main container */}
//       <div className="flex items-center justify-between md:w-[80%] w-[95%] mx-2 md:mx-auto    text-white">
//         <Link to={"/"}>
//           <div className="text-2xl">
//             <img
//               src={logo}
//               className="w-[360px] h-auto md:ml-0 -ml-8"
//               alt="logoPic"
//             />
//           </div>
//         </Link>

//         <div className="hidden md:flex gap-6">
//           <Link to={"/"}>
//             <h1 className="font-bold">Home</h1>
//           </Link>

//           <a href="#" onClick={scrollToAbout}>
//             <h1 className="cursor-pointer font-bold">About</h1>
//           </a>

//           <div
//             className="relative flex items-center gap-2"
//             onClick={toggleDropdown}
//             ref={serviceRef}
//           >
//             <h1
//               className={`cursor-pointer font-bold ${
//                 isDropdownOpen ? "text-white" : ""
//               }`}
//             >
//               Service
//             </h1>
//             <TiArrowSortedDown size={15} />
//             {isDropdownOpen && (
//               <div
//                 className="absolute top-full left-0 mt-2 bg-[#007285] border border-[#ffffff7a] w-[220px] text-white rounded-lg shadow-lg z-10"
//                 ref={dropdownRef}
//               >
//                 <ul>
//                   <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
//                     <NavLink
//                       to="/assignment-help"
//                       exact
//                       activeClassName="text-blue-500"
//                     >
//                       Assignment Help
//                     </NavLink>
//                   </li>
//                   <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300  hover:font-bold  cursor-pointer">
//                     <NavLink
//                       to="/essay-help"
//                       exact
//                       activeClassName="text-blue-500"
//                     >
//                       Essay Help
//                     </NavLink>
//                   </li>
//                   <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold  cursor-pointer">
//                     <NavLink
//                       to="/coursework-help"
//                       exact
//                       activeClassName="text-blue-500"
//                     >
//                       Coursework Help
//                     </NavLink>
//                   </li>
//                   <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300  hover:font-bold cursor-pointer">
//                     <NavLink
//                       to="/exam-help"
//                       exact
//                       activeClassName="text-blue-500"
//                     >
//                       Online Exam Help
//                     </NavLink>
//                   </li>
//                   <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold  cursor-pointer">
//                   <NavLink
//                       to="/dissertation-help"
//                       exact
//                       activeClassName="text-blue-500"
//                     >
//                       Dissertation Help
//                     </NavLink>
//                   </li>
//                   <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold  cursor-pointer">
//                   <NavLink
//                       to="/research-proposal"
//                       exact
//                       activeClassName="text-blue-500"
//                     >
//                      Research Proposal Help
//                     </NavLink>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>

//           <Link to={"/review"}>
//             <h1 className="font-bold">Reviews</h1>
//           </Link>
//           <a href="#" onClick={scrollToContactUs}>
//             <h1 className="cursor-pointer font-bold">Contact Us</h1>
//           </a>
//         </div>

//         <div className="hidden  md:flex items-center gap-4">
//           <a
//             href="https://wa.me/447397145697"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex gap-2 items-center"
//           >
//             <div className="bg-[#408955] w-[220px] h-[40px] flex px-2 rounded-md">
//               <div className="flex items-center gap-1">
//                 <IoLogoWhatsapp className="text-3xl" />
//                 <h1 className="text-white uppercase font-bold">
//                   get 50% discount
//                 </h1>
//               </div>
//             </div>
//           </a>

//           <div>
//             <img src={Available} className="w-[170px] h-[68px]" alt="" />
//           </div>

//           {/* <div className="bg-white w-[160px] py-1 px-1 flex justify-center rounded">
//             <div className="flex items-center gap-2">
//               <FaRegSmileBeam color="green" className="text-3xl" />
//               <h1 className="text-black">Our Reviews</h1>
//             </div>
//           </div> */}
//         </div>

//         <div className="md:hidden flex items-center mx-auto ">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? (
//               <TiTimes size={30} className="text-white" />
//             ) : (
//               <TiThMenu size={30} className="text-white" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-[#367285] w-full text-white px-4 py-8 ">
//           <Link to={"/"}>
//             <div className="flex gap-2 items-center">
//               <IoHome size={25} />
//               <h1>Home</h1>
//             </div>
//           </Link>
//           <div className="flex gap-2 items-center py-4">
//             <IoBagCheck size={25} />
//             <h1 onClick={scrollToAbout} className="cursor-pointer">
//               About
//             </h1>
//           </div>

//           {/* services main container */}
//           <div>
//             <div className="flex  gap-2">
//               <FaBuildingColumns size={25} />
//               <div
//                 className="relative mt-1 flex items-center gap-1 pb-4"
//                 onClick={toggleDropdown}
//                 ref={serviceRef}
//               >
//                 <h1
//                   className={`cursor-pointer  ${
//                     isDropdownOpen ? "text-white" : ""
//                   }`}
//                 >
//                   Service
//                 </h1>
//                 <TiArrowSortedDown size={15} />
//               </div>
//             </div>
//             {isDropdownOpen && (
//               <div className="bg-[#007285] border border-[#ffffff7a] w-[220px] text-white rounded-md shadow-lg mt-2 mb-4">
//                 <ul>
//                   <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold  cursor-pointer">
//                     <NavLink
//                       to="/assignment-help"
//                       exact
//                       activeClassName="text-blue-500"
//                     >
//                       Assignment Help
//                     </NavLink>
//                   </li>

//                   <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
//                     <NavLink
//                       to="/essay-help"
//                       exact
//                       activeClassName="text-blue-500"
//                     >
//                       Essay Help
//                     </NavLink>
//                   </li>
//                   <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
//                     <NavLink
//                       to="/coursework-help"
//                       exact
//                       activeClassName="text-blue-500"
//                     >
//                       Coursework Help
//                     </NavLink>
//                   </li>
//                   <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
//                     <NavLink
//                       to="/exam-help"
//                       exact
//                       activeClassName="text-blue-500"
//                     >
//                       Online Exam Help
//                     </NavLink>
//                   </li>
//                   <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
//                   <NavLink
//                       to="/dissertation-help"
//                       exact
//                       activeClassName="text-blue-500"
//                     >
//                       Dissertation Help
//                     </NavLink>
//                   </li>
//                   <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
//                   <NavLink
//                       to="/research-proposal"
//                       exact
//                       activeClassName="text-blue-500"
//                     >
//                      Research Proposal Help
//                     </NavLink>
//                   </li>
//                 </ul>
//               </div>
//             )}
 

//           </div>

//           <Link to={"review"}>
//             <div className="flex items-center gap-2 ">
//               <BiMessageRoundedDots size={25} />
//               <h1 className="">Reviews</h1>
//             </div>
//           </Link>
//           <div className="flex items-center gap-2 py-4">
//             <IoMdCall size={25} />
//             <h1 onClick={scrollToContactUs} className="cursor-pointer">
//               Contact Us
//             </h1>
//           </div>

//           <a
//             href="https://wa.me/447397145697"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex gap-2 items-center"
//           >
//             <div className="bg-[#408955] w-[60%] px-2 py-2 flex justify-center rounded-md">
//               <div className="flex items-center gap-2">
//                 <IoLogoWhatsapp className="text-3xl" />
//                 <h1 className="text-white uppercase font-bold">50% discount</h1>
//               </div>
//             </div>
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
import { useState, useRef, useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { TiArrowSortedDown, TiThMenu, TiTimes } from "react-icons/ti";
import { IoHome } from "react-icons/io5";
import Available from "../assets/Available.png";
import { IoBagCheck } from "react-icons/io5";
import { FaBuildingColumns } from "react-icons/fa6";
import { BiMessageRoundedDots } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import logo from "../assets/ta-logo.png";
import { NavLink } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ aboutRef, contactRef }) => {
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
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
    navigate("/about-us");
  };

  const scrollToContactUs = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    navigate("/contact-us"); // Change the URL
  };

 
  

  // Add event listener for clicks outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#367285] h-auto w-full lg:py-8 md:py-8 pt-8 md:pt-0 pb-8 md:pb-0 md:mt-8">
      {/* Main container */}
      <div className="flex items-center justify-between md:w-[80%] w-[95%] mx-2 md:mx-auto text-white ">
        <Link to={"/"}>
          <div className="text-2xl">
            <img
              src={logo}
              className="w-[340px] h-auto md:ml-0 -ml-6 -mr-10"
              alt="logoPic"
            />
          </div>
        </Link>

        <div className="hidden md:flex gap-6">
          <Link to={"/"}>
            <h1 className="font-bold">Home</h1>
          </Link>

          <a href="#" onClick={scrollToAbout}>
            <h1 className="cursor-pointer font-bold">About</h1>
          </a>

          <div
            className="relative flex items-center gap-2"
            onClick={toggleDropdown}
            ref={serviceRef}
          >
            <h1
              className={`cursor-pointer font-bold ${
                isDropdownOpen ? "text-white" : ""
              }`}
            >
              Service
            </h1>
            <TiArrowSortedDown size={15} />
            {isDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 bg-[#007285] border border-[#ffffff7a] w-[220px] text-white rounded-lg shadow-lg z-20"
                ref={dropdownRef}
              >
                <ul>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                    <NavLink
                      to="/assignment-help"
                      className={({ isActive }) => isActive ? "text-blue-500" : ""}
                    >
                      Assignment Help
                    </NavLink>
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                    <NavLink
                      to="/essay-help"
                      className={({ isActive }) => isActive ? "text-blue-500" : ""}
                    >
                      Essay Help
                    </NavLink>
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                    <NavLink
                      to="/coursework-help"
                      className={({ isActive }) => isActive ? "text-blue-500" : ""}
                    >
                      Coursework Help
                    </NavLink>
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                    <NavLink
                      to="/exam-help"
                      className={({ isActive }) => isActive ? "text-blue-500" : ""}
                    >
                      Online Exam Help
                    </NavLink>
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                    <NavLink
                      to="/dissertation-help"
                      className={({ isActive }) => isActive ? "text-blue-500" : ""}
                    >
                      Dissertation Help
                    </NavLink>
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                    <NavLink
                      to="/research-proposal"
                      className={({ isActive }) => isActive ? "text-blue-500" : ""}
                    >
                      Research Proposal Help
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link to={"/review"}>
            <h1 className="font-bold">Reviews</h1>
          </Link>
          <a href="#" onClick={scrollToContactUs}>
            <h1 className="cursor-pointer font-bold">Contact Us</h1>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/447397145697"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center"
          >
            <div className="bg-[#408955] w-[220px] h-[40px] flex px-2 rounded-md">
              <div className="flex items-center gap-1">
                <IoLogoWhatsapp className="text-3xl" />
                <h1 className="text-white uppercase font-bold">
                  get 50% discount
                </h1>
              </div>
            </div>
          </a>

          <div>
            <img src={Available} className="w-[170px] h-[68px]" alt="" />
          </div>
        </div>

        <div className="md:hidden flex items-center mx-auto">
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
        <div className="md:hidden bg-[#367285] w-full text-white px-4 py-8">
          <Link to={"/"}>
            <div className="flex gap-2 items-center">
              <IoHome size={25} />
              <h1>Home</h1>
            </div>
          </Link>
          <div className="flex gap-2 items-center py-4">
            <IoBagCheck size={25} />
            <h1 onClick={scrollToAbout} className="cursor-pointer">
              About
            </h1>
          </div>

          <div>
            <div className="flex gap-2">
              <FaBuildingColumns size={25} />
              <div
                className="relative mt-1 flex items-center gap-1 pb-4"
                onClick={toggleDropdown}
                ref={serviceRef}
              >
                <h1
                  className={`cursor-pointer ${
                    isDropdownOpen ? "text-white" : ""
                  }`}
                >
                  Service
                </h1>
                <TiArrowSortedDown size={15} />
              </div>
            </div>
            {isDropdownOpen && (
              <div
                className="bg-[#007285] border border-[#ffffff7a] w-[220px] text-white rounded-md shadow-lg mt-2 mb-4"
                ref={dropdownRef}
              >
                <ul>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                    <NavLink
                      to="/assignment-help"
                      className={({ isActive }) => isActive ? "text-blue-500" : ""}
                    >
                      Assignment Help
                    </NavLink>
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                    <NavLink
                      to="/essay-help"
                      className={({ isActive }) => isActive ? "text-blue-500" : ""}
                    >
                      Essay Help
                    </NavLink>
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                    <NavLink
                      to="/coursework-help"
                      className={({ isActive }) => isActive ? "text-blue-500" : ""}
                    >
                      Coursework Help
                    </NavLink>
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                    <NavLink
                      to="/exam-help"
                      className={({ isActive }) => isActive ? "text-blue-500" : ""}
                    >
                      Online Exam Help
                    </NavLink>
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                    <NavLink
                      to="/dissertation-help"
                      className={({ isActive }) => isActive ? "text-blue-500" : ""}
                    >
                      Dissertation Help
                    </NavLink>
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                    <NavLink
                      to="/research-proposal"
                      className={({ isActive }) => isActive ? "text-blue-500" : ""}
                    >
                      Research Proposal Help
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link to={"/review"}>
            <div className="flex items-center gap-2">
              <BiMessageRoundedDots size={25} />
              <h1 className="">Reviews</h1>
            </div>
          </Link>
          <div className="flex items-center gap-2 py-4">
            <IoMdCall size={25} />
            <h1 onClick={scrollToContactUs} className="cursor-pointer">
              Contact Us
            </h1>
          </div>

          <a
            href="https://wa.me/447397145697"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center"
          >
            <div className="bg-[#408955] w-[60%] px-2 py-2 flex justify-center rounded-md">
              <div className="flex items-center gap-2">
                <IoLogoWhatsapp className="text-3xl" />
                <h1 className="text-white uppercase font-bold">50% discount</h1>
              </div>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;

