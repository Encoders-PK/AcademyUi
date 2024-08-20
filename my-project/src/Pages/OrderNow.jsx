

import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Head from "../components/Head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterBanner from "../components/FooterBanner";
import baseUrl from "../baseUrl.js";
import axios from "axios";

const OrderNow = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [orderNumber, setOrderNumber] = useState(""); // State for order number
  const [lastOrderNumber, setLastOrderNumber] = useState(""); // State for last order number
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
      
    document.title = 'Order-Now - Academians UK'; // Set the document title
}, []);

  useEffect(() => {
    // Fetch the last order number when the component mounts
    const fetchLastOrderNumber = async () => {
      try {
        const response = await axios.get(`${baseUrl}/last-order-number`);
        if (response.status === 200) {
          setLastOrderNumber(response.data.order_number); 
          setOrderNumber(response.data.order_number); 
        }
      } catch (err) {
        setError("Error fetching last order number: " + err.message);
      }
    };

    fetchLastOrderNumber();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !totalAmount) {
      setError("Please fill in all fields except the order number");
      return;
    }

    setLoading(true);
    setError(null);

    const orderData = {
      name,
      email,
      phone,
      total_amount: totalAmount,
      order_number: orderNumber // Include order number in request
    };
    
       
    
 
    try {
      const response = await axios.post(`${baseUrl}/order-now`, orderData);

      if (response.status === 201) {
        // Build the redirect URL
        const redirectUrl = `https://webmountx.com/payments/TA/?&NAME_KEY=${encodeURIComponent(name)}&EMAIL_KEY=${encodeURIComponent(email)}&TOTAL_AMOUNT=${encodeURIComponent(totalAmount)}&ORDER_NUMBER=${encodeURIComponent(orderNumber)}`;
        
        // Redirect to the URL
        window.location.href = redirectUrl;
      } else {
        setError("Failed to place order. Please try again.");
      }
    } catch (err) {
      setError("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head />
      <Navbar aboutRef={aboutRef} contactRef={contactRef} />

      <div className="bg-white">
        <h1 className="text-2xl font-bold text-center text-black  mb-4 pt-10">
          PLACE YOUR ORDER NOW
        </h1>
        <p className="text-center text-black mb-6 w-full max-w-md mx-auto">
          Place your order now at Acdemians and get the premium quality 100%
          non-plagiarized paper written by our professional experts.
        </p>
        <div className="flex justify-center items-center ">
          <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md border-4 border-orange-400">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                />
              </div>
              <div>
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
              <div>
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="tel"
                />
              </div>
              <div>
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="orderNumber"
                >
                  Order Number
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="orderNumber"
                  name="order_number"
                  placeholder="Order number"
                  value={orderNumber}
                  readOnly 
                />
              </div>
              <div>
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="totalAmount"
                >
                  Total Amount GBP
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="totalAmount"
                  name="total_amount"
                  placeholder="Enter total amount in GBP"
                  value={totalAmount}
                  onChange={(e) => setTotalAmount(e.target.value)}
                  autoComplete="off"
                />
              </div>
              
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
              <button
                className="w-full py-3 bg-blue-900 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                type="submit"
                disabled={loading}
              >
                {loading ? "Processing..." : "Proceed"}
              </button>
            </form>
          </div>
        </div>

       
      </div>

      <Footer aboutRef={aboutRef} contactRef={contactRef} />
      <FooterBanner />
    </>
  );
};

export default OrderNow;




