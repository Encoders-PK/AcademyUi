import  { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";  
// import baseUrl from "../baseUrl.js";
import formPic from '../assets/formPic.png'

const DiscountPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const data = { name, email, phone };

      console.log(data);

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post(`https://be.academians.co.uk/api/signup.php`, data, config);

      if (res.status === 201 || res.status === 200) {
        setName("");
        setEmail("");
        setPhone("");
        setIsVisible(false);
        const UrlParams = new URLSearchParams({
          name:encodeURIComponent(name),
          email:encodeURIComponent(email),
          phone:encodeURIComponent(phone)
        })
        navigate(`/thankyou2?${UrlParams}`);
        window.scrollTo(0, 0);
      } else {
        console.error('Error:', res);
      }
    } catch (err) {
      console.error('Error:', err);
    }
    finally{
      setLoading(false);
    }
  };


  

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#367285] px-6 pt-4 pb-8 rounded-lg text-white relative md:w-[450px] w-88">
        <button
          className="absolute top-4 right-4 text-3xl font-bold"
          onClick={closePopup}
        >
          ×
        </button>
       <div className='mb-2'> <img src={formPic} className='md:w-[400px] w-full' alt="" /></div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border-2 border-[#EEEEEE] outline-none  text-black rounded-md focus:border-blue-500"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border-2 border-[#EEEEEE] outline-none text-black rounded-md focus:border-blue-500"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <input
            type="text"
            placeholder="Phone Number"
            className="p-2 border-2 border-[#EEEEEE] outline-none text-black rounded-md focus:border-blue-500"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            type="submit"
            disabled={loading}
            className="p-2 font-bold bg-[#F1B815] text-black rounded-md"
          >
            {loading ? "Please Wait...." : "GET DISCOUNT"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DiscountPopup;
