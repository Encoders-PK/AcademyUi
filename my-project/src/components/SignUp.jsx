import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import hotOfferIcon from "../assets/hotOfferIcon.png";
import baseUrl from "../baseUrl.js";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const navigate = useNavigate();

  const [time, setTime] = useState({
    hours: 1,
    minutes: 36,
    seconds: 37,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else {
          clearInterval(countdown);
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

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

  return (
    <>
    <div className="w-full ">
    <div className="relative max-w-md mx-auto h-auto rounded-lg bg-white shadow-3xl">
        <div className="absolute top-[-20px] left-24 transform -translate-x-1/2 shadow-xl h-10 bg-green-700 p-2 text-sm font-bold rounded-md text-center text-white">
          Deal Of The Day
        </div>

        <div className="py-10 px-6">
          <div className="flex gap-2">
            <div className="w-2 h-[90px] bg-[#417EE5]"></div>
            <div>
              <div className="text-[#7279AE] font-bold text-[16px]">
                Order Now & Avail
              </div>
              <div className="text-[#ffb800] text-4xl md:text-6xl font-bold animate-blink">
                50% OFF
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 mt-4">
                <input
                  className="border-2 border-[#EEEEEE] outline-none p-2 rounded-md focus:border-blue-500"
                  type="text"
                  placeholder="Full Name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="border-2 border-[#EEEEEE] outline-none p-2 rounded-md focus:border-blue-500"
                  type="text"
                  placeholder="Email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="border-2 border-[#EEEEEE] outline-none p-2 rounded-md focus:border-blue-500"
                  type="text"
                  placeholder="Phone No."
                  required
                  autoComplete="tel"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-center gap-4 relative mt-4">
                <button 
                  type="submit"
                  className="pr-3 md:text-sm  text-[12px] rounded-l-lg bg-[#007285] text-white w-[140px] md:w-[160px] h-[40px] md:h-[50px]"
                >
                  APPLY DISCOUNT
                </button>
                <span className="text-center font-semibold text-base absolute -top-1 py-3 lg:py-4 md:py-4 rounded-[50%] bg-white w-12 h-12 md:w-12 md:h-14 ">
                  OR
                </span>
               
                <a href="https://wa.me/447397145697" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center">
                <div className="pl-6 py-3 md:pl-6 md:py-4 bg-[#408955] md:text-sm  text-[12px] rounded-r-lg text-white w-[140px] md:w-[160px] h-[40px] md:h-[50px] ">
                  WHATSAPP NOW
                </div>
                </a>
              
              </div>
            </form>
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-col items-center">
                <h1 className="w-[60px] md:w-[70px] h-[60px] md:h-[70px] bg-[#007285] flex justify-center items-center text-3xl md:text-4xl text-white font-semibold shadow-numbers rounded-md">
                  0{time.hours}
                </h1>
                <h1 className="text-sm uppercase font-semibold mt-1">
                  Hours
                </h1>
              </div>
              <h1 className="text-3xl md:text-4xl font-semibold -mt-6">:</h1>
              <div className="flex flex-col items-center">
                <h1 className="w-[60px] md:w-[70px] h-[60px] md:h-[70px] bg-[#007285] flex justify-center items-center text-3xl md:text-4xl text-white font-semibold shadow-numbers rounded-md">
                  {time.minutes}
                </h1>
                <h1 className="text-sm uppercase font-semibold ">
                  Minutes
                </h1>
              </div>
              <h1 className="text-3xl md:text-4xl font-semibold -mt-6">:</h1>
              <div className="flex flex-col items-center">
                <h1 className="w-[60px] md:w-[70px] h-[60px] md:h-[70px] bg-[#007285] flex justify-center items-center text-3xl md:text-4xl text-white font-semibold shadow-numbers rounded-md">
                  {time.seconds}
                </h1>
                <h1 className="text-sm uppercase font-semibold mt-1">
                  Seconds
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-700 w-full -mt-4 rounded-b-lg flex items-center justify-center gap-2 p-2">
          <img src={hotOfferIcon} className="w-6 h-6 md:w-7 md:h-7" alt="hot offer icon" />
          <h1 className="text-white font-semibold text-xs md:text-base">
            Signup & Get Additional $100 Discount
          </h1>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default SignUp;







