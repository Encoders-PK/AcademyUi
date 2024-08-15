import { useState } from 'react';
import axios from 'axios';
import baseUrl from '../baseUrl.js';
import collector from "../assets/collector.png";
import { useNavigate } from "react-router-dom";

const GetDiscount = () => {
  const [phoneNo, setPhoneNo] = useState('');
  const [loading, setLoading] = useState(false); 

  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${baseUrl}/phonelead`, { number: phoneNo });
      if (res.status === 201) {
         
          setPhoneNo('');
           navigate("/thankyou");
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
  }
  return (
    <div className="w-full bg-[#367285] md:h-[260px] h-auto mt-6 relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-20 p-4 md:p-8">
      {/* Text Content */}
      <div className="text-white text-center md:text-left md:ml-8 md:w-1/2 w-full">
        <h3 className="text-xl pb-2">Invest your money in quality</h3>
        <h1 className="font-bold text-xl md:text-4xl uppercase">Get Your Free Discount Coupon For Future Assignments</h1>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mt-4">
          <input
            className="border-2 border-[#F1B815] text-black outline-none p-2 w-full md:w-[300px] h-auto rounded-md focus:border-blue-500"
            type="text"
            placeholder="Enter your phone No"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <button type="submit" disabled={loading} className="uppercase bg-[#F1B815] p-3 rounded-md font-semibold">{loading ? 'Please Wait...' : "Get a discount"}</button>
        </form>
        
      </div>

      {/* Image Container */}
      <div className="hidden md:block w-1/4 ">
        <img
          src={collector}
          className="absolute bottom-0 right-40 w-[400px] h-[220px]"
          alt="Discount Banner"
        />
      </div>
    </div>
  );
};

export default GetDiscount;


