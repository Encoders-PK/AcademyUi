// const Footer = () => {
//   return (
//     <footer className="bg-[#020621] text-white py-20 w-full mt-12 h-[360px]">
//       <div className="container mx-auto flex justify-between">
//         <div className="w-1/4">
//           <h3 className="text-2xl font-bold">Logo Here</h3>
//           <p className="mt-4">
//             We review your documents to ensure that all fonts, margins, indentations, and other formatting elements are used consistently. Our professional team strives to provide quality service and we are ready to assist you.
//           </p>
//         </div>
//         <div className="w-1/5">
//           <h3 className="text-xl font-bold">Navigation</h3>
//           <ul className="mt-4 space-y-1 list-disc list-inside">
//             <li>Home</li>
//             <li>About Us</li>
//             <li>Contact</li>
//             <li>Reviews</li>
//             <li>Account Login</li>
//           </ul>
//         </div>
//         <div className="w-1/5">
//           <h3 className="text-xl font-bold">Services</h3>
//           <ul className="mt-4 space-y-1 list-disc list-inside">
//             <li>Home</li>
//             <li>About Us</li>
//             <li>Contact</li>
//             <li>Reviews</li>
//             <li>Account Login</li>
//           </ul>
//         </div>
//         <div className="w-1/5">
//           <h3 className="text-xl font-bold">Contact Us</h3>
//           <ul className="mt-4 space-y-1 list-disc list-inside">
//             <li>Call Us</li>
//             <li>WhatsApp Us</li>
//             <li>Email Us</li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// const Footer = () => {
//   return (
//     <footer className="bg-[#020621] text-white py-8 md:py-20 w-full mt-12">
//       <div className="container mx-auto px-4 flex flex-col  md:flex-row justify-between">
//         <div className="w-full md:w-1/4 mb-8 md:mb-0">
//           <h3 className="text-xl md:text-2xl font-bold">Logo Here</h3>
//           <p className="mt-4 text-sm md:text-base">
//             We review your documents to ensure that all fonts, margins, indentations, and other formatting elements are used consistently. Our professional team strives to provide quality service and we are ready to assist you.
//           </p>
//         </div>
//         <div className="w-full md:w-1/5 mb-8 md:mb-0">
//           <h3 className="text-lg md:text-xl font-bold">Navigation</h3>
//           <ul className="mt-4 space-y-2 md:space-y-1 list-none md:list-disc list-inside">
//             <li>Home</li>
//             <li>About Us</li>
//             <li>Contact</li>
//             <li>Reviews</li>
//             <li>Account Login</li>
//           </ul>
//         </div>
//         <div className="w-full md:w-1/5 mb-8 md:mb-0">
//           <h3 className="text-lg md:text-xl font-bold">Services</h3>
//           <ul className="mt-4 space-y-2 md:space-y-1 list-none md:list-disc list-inside">
//             <li>Home</li>
//             <li>About Us</li>
//             <li>Contact</li>
//             <li>Reviews</li>
//             <li>Account Login</li>
//           </ul>
//         </div>
//         <div className="w-full md:w-1/5">
//           <h3 className="text-lg md:text-xl font-bold">Contact Us</h3>
//           <ul className="mt-4 space-y-2 md:space-y-1 list-none md:list-disc list-inside">
//             <li>Call Us</li>
//             <li>WhatsApp Us</li>
//             <li>Email Us</li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import badge1 from "../assets/badge1.png";
import badge2 from "../assets/badge2.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import whatsapp from "../assets/whatsapp.png";
import logo from "../assets/ta-logo.png";
import { Link, useNavigate } from "react-router-dom";

const Footer = ({ aboutRef, contactRef }) => {
  const navigate = useNavigate();
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

  return (
    <footer className="bg-[#367285] text-white py-8 md:py-20 w-full mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center md:justify-between text-center md:text-left">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <div className="flex justify-center">
            <img src={logo} className="w-[400px] h-auto -ml-8" alt="logoPic" />
          </div>
          <p className="mt-4 text-sm md:text-base">
            We review your documents to ensure that all fonts, margins,
            indentations, and other formatting elements are used consistently.
            Our professional team strives to provide quality service and we are
            ready to assist you.
          </p>

          <h1 className="mt-4 font-bold">Our Social Media Links</h1>
          <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
            <a
              href="https://www.facebook.com/theacademiansexperts"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <div>
                <img src={facebook} className="w-8 h-8" alt="" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/theacademiansexperts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <div>
                <img src={instagram} className="w-8 h-8" alt="" />
              </div>
            </a>
            <a
              href="https://wa.me/447397145697"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src={whatsapp} className="w-8 h-8" alt="" />
              </div>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/6 md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-lg md:text-xl font-bold">Navigation</h3>

          <ul className="mt-4 space-y-2 md:space-y-1 list-none md:list-disc list-inside">
            <li>
              <Link to="/" className="hover:underline font-bold">
                Home
              </Link>
            </li>
            <li>
              <a
                href="#"
                onClick={scrollToAbout}
                className="cursor-pointer hover:underline font-bold"
              >
                About
              </a>
            </li>
            <li>
             
              <a
                href="#"
                onClick={scrollToContactUs}
                className="cursor-pointer hover:underline font-bold"
              >
                Contact Us
              </a>
            </li>
            <li>
              <Link to="/review" className="hover:underline font-bold">
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/6 md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-lg md:text-xl font-bold">Services</h3>
          <ul className="mt-4 space-y-2 md:space-y-1 list-none md:list-disc list-inside">
            <li>
              <Link to="/assignment-help" className="hover:underline font-bold">
                Assignment Help
              </Link>
            </li>
            <li>
            <Link to="/essay-help" className="hover:underline font-bold">
                Essay Help
              </Link>
            </li>
            <li>
            <Link to="/coursework-help" className="hover:underline font-bold">
                CourseWork Help
              </Link>
            </li>
            <li>
              <Link to="/exam-help" className="hover:underline font-bold">
                Online Exam Help
              </Link>
            </li>
            <li>
              <Link to="/dissertation-help" className="hover:underline font-bold">
                Dissertation Help
              </Link>
            </li>
            <li>
              <Link to="/research-proposal" className="hover:underline font-bold">
                Ressearch Proposal Help
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/5">
          <h3 className="text-lg md:text-xl font-bold mb-2">Secure Payment</h3>
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <img src={badge1} className="w-full h-auto " alt="" />
            </div>
            <div>
              <img src={badge2} className="w-full h-auto " alt="" />
            </div>
          </div>

          {/* <div className='flex '>
            <div><img src={badge1} alt="badge" /></div>
            <div><img src={badge2} alt="badge" /></div>
            <div><img src={badge3} alt="badge" /></div>

          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;







