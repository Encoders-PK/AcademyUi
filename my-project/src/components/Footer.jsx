import { useNavigate } from "react-router-dom";
import badge1 from "../assets/badge1.png";
import badge2 from "../assets/badge2.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import whatsapp from "../assets/whatsapp.png";
import logo from "../assets/ta-logo.png";

const Footer = ({ aboutRef, contactRef }) => {
  const navigate = useNavigate();

  const scrollToSection = (path, ref) => {
    navigate(path);
    setTimeout(() => {
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 500); // Adjust delay if necessary
  };

  const scrollToTopAndNavigate = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  return (
    <footer className="bg-[#367285] text-white py-8 md:py-20 w-full mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center md:justify-between text-center md:text-left">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <div className="flex justify-center items-center">
            <div>
              <a
                onClick={() => scrollToTopAndNavigate("/")}
                className="cursor-pointer"
              >
                <img
                  src={logo}
                  className="w-[400px] h-auto -ml-8"
                  alt="logoPic"
                />
              </a>
            </div>
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
              <div>
                <img src={facebook} className="w-8 h-8" alt="Facebook" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/theacademiansexperts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src={instagram} className="w-8 h-8" alt="Instagram" />
              </div>
            </a>
            <a
              href={`https://wa.me/447397145697?text=${encodeURIComponent(
                "Hello Team Academians, I want to avail my promo code TA-OFF50."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src={whatsapp} className="w-8 h-8" alt="WhatsApp" />
              </div>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/6 md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-lg md:text-xl font-bold">Navigation</h3>
          <ul className="mt-4 space-y-2 md:space-y-1 list-none md:list-disc list-inside">
            <li>
              <a
                onClick={() => scrollToTopAndNavigate("/")}
                className="cursor-pointer hover:underline font-bold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("/about-us", aboutRef)}
                className="cursor-pointer hover:underline font-bold"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("/contact-us", contactRef)}
                className="cursor-pointer hover:underline font-bold"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToTopAndNavigate("/review")}
                className="cursor-pointer hover:underline font-bold"
              >
                Reviews
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/6 md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-lg md:text-xl font-bold">Services</h3>
          <ul className="mt-4 space-y-2 md:space-y-1 list-none md:list-disc list-inside">
            <li>
              <a
                onClick={() => scrollToTopAndNavigate("/assignment-help")}
                className="cursor-pointer hover:underline font-bold"
              >
                Assignment Help
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToTopAndNavigate("/essay-help")}
                className="cursor-pointer hover:underline font-bold"
              >
                Essay Help
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToTopAndNavigate("/coursework-help")}
                className="cursor-pointer hover:underline font-bold"
              >
                CourseWork Help
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToTopAndNavigate("/exam-help")}
                className="cursor-pointer hover:underline font-bold"
              >
                Online Exam Help
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToTopAndNavigate("/dissertation-help")}
                className="cursor-pointer hover:underline font-bold"
              >
                Dissertation Help
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToTopAndNavigate("/research-proposal")}
                className="cursor-pointer hover:underline font-bold"
              >
                Research Proposal Help
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/5">
          <h3 className="text-lg md:text-xl font-bold mb-2">Secure Payment</h3>
          <div className="flex flex-col justify-center items-center">
            <div className="mb-4">
              <img
                src={badge1}
                className="w-full h-auto "
                alt="Secure Payment Badge 1"
              />
            </div>
            <div>
              <img
                src={badge2}
                className="w-[220px] "
                alt="Secure Payment Badge 2"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
