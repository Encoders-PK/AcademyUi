import { useEffect, useRef } from "react";
import Head from "../components/Head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterBanner from "../components/FooterBanner";

const OrderNow = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
      
    document.title = 'Order Now - Academians UK'; // Set the document title
}, []);
  return (
    <>
      <Head />
      <Navbar aboutRef={aboutRef} contactRef={contactRef} />

      <div className="bg-gray-400">
        <h1 className="text-2xl font-bold text-center text-white mb-4 pt-10">
          PLACE YOUR ORDER NOW
        </h1>
        <p className="text-center text-gray-200 mb-6">
          Place your order now at Acdemians and get the premium quality 100%
          non-plagiarized paper written by our professional experts.
        </p>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md border-4 border-orange-400">
            <form className="space-y-4">
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
                  className="w-full px-3 py-2 border rounded-md bg-gray-300 text-gray-700"
                  type="text"
                  id="orderNumber"
                  name="order-number"
                  value="TA-7003730"
                  readOnly
                  autoComplete="off"
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
                  name="amount"
                  placeholder="Enter total amount in GBP"
                  autoComplete="off"
                />
              </div>
              <button
                className="w-full py-3 bg-blue-900 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                type="submit"
              >
                Proceed
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
