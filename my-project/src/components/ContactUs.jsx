
import { IoLogoWhatsapp } from "react-icons/io";
import { BiMessageRoundedDots } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../baseUrl";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { name, email, phoneNo };

      console.log(data);

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post(`${baseUrl}/signup`, data, config);

      if (res.status === 201) {
        setName("");
        setEmail("");
        setPhoneNo("");
        console.log(res);
        navigate("/thankyou");
      } else {
        console.error('Error:', res);
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  useEffect(() => {
    // Adding Tawk.to script to the page when the component mounts
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/601da070c31c9117cb7649b7/1etprlduf"; // Your Tawk.to script source
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
    <div className="w-full md:w-[75%] h-auto md:my-24 contact-section mx-auto mt-12 px-4">
      <h1 className="text-[#5A5A5A] text-3xl md:text-5xl text-center font-bold mb-2 md:mb-12">
        CONTACT US
      </h1>

      {/* container */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 justify-center">
        {/* Left Side */}
        <div className="w-full md:w-1/2 py-8 md:py-0 text-center md:text-left">
          <h1 className="text-[#333333] text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            One Stop Solution to All <br /> Academic Worries
          </h1>

          <p className="text-sm md:text-base text-[#333333] mb-6 px-4 md:px-0">
            Struggling with looming deadlines and intricate assignments? At
            Academians, we understand the pressure students face daily. If
            you're constantly thinking, "Who can write my assignment for me?" or
            "Where can I pay someone to do my assignment?", look no further. Our
            team of dedicated assignment writers is here to provide top-notch,
            tailor-made solutions for all your academic needs. Let us be your
            academic beacon, guiding you through every challenge, ensuring your
            success.
          </p>

          <div className="flex flex-col md:flex-row gap-4 py-8 w-full md:w-auto">
            <button
              onClick={handleTalkToExpertClick}
              className="flex gap-2 items-center bg-[#007285] w-full md:w-[230px] h-10 justify-center rounded-md"
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

          {/* <div className="flex flex-col md:flex-row gap-4">
          <a href="https://tawk.to/chat/62b99b88b0d10b6f3e79802d/1g6igf40l" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center">
            <div className="bg-[#007285] w-full md:w-[230px] h-10 flex justify-center items-center rounded-md">
              <div className="flex items-center gap-2">
                <BiMessageRoundedDots className="text-2xl md:text-3xl" color="white" />
                <h1 className="text-white font-bold text-sm md:text-base">TALK TO OUR EXPERT</h1>
              </div>
            </div>
            </a>

            <a href="https://wa.me/447397145697" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center">
            <div className="bg-white w-full md:w-56 h-10 flex justify-center rounded-md border border-[#408955]">
              <div className="flex items-center gap-2">
                <IoLogoWhatsapp
                  className="text-2xl md:text-3xl"
                  color="#408955"
                />
                <h1 className="text-[#408955] font-bold text-sm uppercase">
                  Whatsapp Now
                </h1>
              </div>
            </div>
            </a>
          </div> */}
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="bg-[#007285] w-full md:w-[450px] rounded-2xl p-6 md:p-8">
            <h1 className="text-white text-xl md:text-2xl font-bold mb-4">
              Our team is available 24/7 <br /> to provide you the best
              assistance
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <input
                  className="border-2 border-[#EEEEEE] outline-none  p-3 rounded-md focus:border-blue-500"
                  type="text"
                  placeholder="Full Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="border-2 border-[#EEEEEE] outline-none p-3 rounded-md focus:border-blue-500"
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="border-2 border-[#EEEEEE] outline-none p-3 rounded-md focus:border-blue-500"
                  type="tel"
                  placeholder="Phone No."
                  required
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />

                <button className="w-full md:w-auto h-12 text-[#16334F] font-bold bg-white flex items-center justify-center mt-4 rounded-md" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;


