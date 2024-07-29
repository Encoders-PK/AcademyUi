import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Discount from "../assets/Discount.png";
import hotOfferIcon from "../assets/hotOfferIcon.png";
// import {Link}  from "react-router-dom";
import baseUrl from '../baseUrl.js'

const SignUp = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phoneNo,setPhoneNo] = useState("");


  const navigate = useNavigate();


  const handleSubmit= async(e)=>{
    e.preventDefault();

    try{

      const data = {
        name,
        email,
        phoneNo
      }
      
       // Log data to check if all fields are included
       console.log(data);

       const config ={
        headers:{
          "Content-Type":"application/json"
        }
       }


       const res = await axios.post(`${baseUrl}/user/signup`,data,config);
       setName("");
       setEmail("");
       setPhoneNo("");
       console.log(res);
      navigate("/thankyou");

    }catch(err){
      console.log(err);
    }
   
  }



  return (
    <>
      <div className="relative w-[400px] h-[514px] rounded-lg bg-white shadow-3xl">
        <div className="absolute top-[-20px] left-24 transform -translate-x-1/2 w-[140px] shadow-xl h-10 bg-[#408955] p-2 rounded-md text-center text-white">
          Deal Of The Day
        </div>

        <div className="py-10 px-6">
          <div className="flex gap-2">
            <div className="w-2 h-[90px] bg-[#417EE5]"></div>
            <div>
              <div className="text-[#7279AE] font-bold text-[16px]">
                Order Now & Avail
              </div>
              <div className="text-[#408955] text-6xl font-bold animate-blink">
                50% OFF
              </div>
              <div className="text-[#7279AE] font-bold text-[16px]">
                PROMO: TA-OFF50
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
                  autoComplete='name'
                  required
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
                
                <input
                  className="border-2 border-[#EEEEEE] outline-none p-2 rounded-md focus:border-blue-500"
                  type="text"
                  placeholder="Email"
                  required
                  autoComplete='email'
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                  className="border-2 border-[#EEEEEE] outline-none p-2 rounded-md focus:border-blue-500"
                  type="text"
                  placeholder="Phone No."
                  required
                  autoComplete='tel'
                  value={phoneNo}
                  onChange={(e)=>setPhoneNo(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-center">
                <button type="submit" className="mt-4 bg-[#007285]  text-white w-[160px] h-[50px] ">
                  Apply Discount
                </button>
                <span className="text-center mx-1 font-bold text-xl">or</span>
                <button className="mt-4 bg-[#408955] text-white w-[160px] h-[50px] ">
                  WHATSAPP NOW
                </button>
              </div>
            </form>
          </div>

          <div className=" flex items-center gap-12 mt-4">
            <div>
              <img src={Discount} alt="" />
            </div>

            <div className="text-center ">
              <h1 className="font-bold text-xl animation-smoothScale">
                1H 11m 32s
              </h1>

              <h4 className="text-sm">Avail Now</h4>
            </div>
          </div>
        </div>

        <div className="bg-green-700 w-full h-12 rounded-b-lg -mt-[15px]">
          <div className="flex items-center justify-center gap-2 pt-2">
            <div>
              <img src={hotOfferIcon} className="w-7 h-7" alt="hotofferIcon" />
            </div>

            <h1 className="text-white  font-semibold">
              Signup & Get Additional $100 Discount
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
