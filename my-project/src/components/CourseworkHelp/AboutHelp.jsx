import aboutPic from "../../assets/aboutPic.webp";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiMessageRoundedDots } from "react-icons/bi";
import { useEffect} from "react";

const AboutHelp = ({aboutRef}) => {
  
  useEffect(() => {
    // Adding Tawk.to script to the page when the component mounts
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://tawk.to/chat/601da070c31c9117cb7649b7/1etprlduf"; // Your Tawk.to script source
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  const handleTalkToExpertClick = () => {
    if (window.Tawk_API && window.Tawk_API.maximize) {
      window.Tawk_API.maximize();
    } else {
      console.error("Tawk.to is not initialized properly.");
    }
  };
  return (
    <div className="md:w-[75%] w-full mx-auto mt-12 md:py-12  px-4"  ref={aboutRef} id="about">
      {/* container */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* left side */}
        <div className="w-full md:w-1/2">
          <h1 className="text-xl md:text-3xl font-bold px-1 md:px-2 text-[#5A5A5A] md:leading-tight">
            Expert <span className="text-[#F1B815]">CourseWork Assistance</span>
            <br />
            Tailored Support for Your Academic Success
          </h1>
          
          <p className="py-6 px-2 font-medium text-sm md:text-base">
            Do you face difficulties with your assignment or dissertation and
            you require professional help? This is your academic guide; our
            professional team is ready to assist you in achieving your goals.
            Each client is provided with customized services, and that is why we
            offer you original content that complies with the academic level you
            specify. Regardless of the type of issues that you have – with
            research, with writing, or with editing – we are happy to help and
            support you. Chat now to know more on What Our Experts Can Do
          </p>

          

          <div className="flex flex-col md:flex-row gap-4 py-8 w-full md:w-auto">
            <button
              onClick={handleTalkToExpertClick}
              className="flex gap-2 items-center bg-[#ffb800] w-full md:w-[230px] h-10 justify-center rounded-md"
            >
              <BiMessageRoundedDots
                className="text-2xl md:text-3xl"
                color="white"
              />
              <h1 className="text-white font-bold text-sm md:text-base">
                TALK TO OUR EXPERT
              </h1>
            </button>

            <a
              href="https://wa.me/447397145697"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <div className="bg-white w-full md:w-[230px] h-10 flex items-center justify-center rounded-md border border-[#408955]">
                <IoLogoWhatsapp className="text-2xl text-[#408955]" />
                <h1 className="text-[#408955] font-bold text-sm md:text-base uppercase">
                  Whatsapp Now
                </h1>
              </div>
            </a>
          </div>
        </div>

        {/* right side */}
        <div className="hidden md:block md:w-1/2">
          <img src={aboutPic} alt="About Picture" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default AboutHelp;