// import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Navbar from "../components/Navbar";


const ThankYou = () => {
  return (
    <>
      <Head />
      <Navbar />
      <div className="flex items-center justify-center min-h-screen py-12">
        <div className="bg-white w-[800px] h-[600px] shadow-xl px-10 py-12">
          <h1 className="text-[#4D5C6E] font-semibold text-4xl pb-6 pt-12">CONGRATULATIONS</h1>
          <h3 className="text-[#4D5C6E] text-base py-10"> 
            50% Discount has been applied on your order at <span>Academians UK</span>  Your
            Key manager will be connected to you  shortly Via Phone Call and
            WhatsAap . Enjoy the assistance of a verified expert in your
            academic field of study. Simply hire an expert to lend a hand, with
            professionalism guaranteed.
          </h3>
          <p>To avail promo code Please Contact us through WhatsApp or Live Chat</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ThankYou;
