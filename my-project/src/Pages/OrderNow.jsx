// import { useEffect, useRef } from "react";
// import Head from "../components/Head";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import FooterBanner from "../components/FooterBanner";

// const OrderNow = () => {
//   const aboutRef = useRef(null);
//   const contactRef = useRef(null);
//   useEffect(() => {
      
//     document.title = 'Order Now - Academians Australia Pty Ltd'; // Set the document title
// }, []);




//   return (
//     <>
//       <Head />
//       <Navbar aboutRef={aboutRef} contactRef={contactRef} />

//       <div className="bg-gray-400">
//         <h1 className="text-2xl font-bold text-center text-white mb-4 pt-10">
//           PLACE YOUR ORDER NOW
//         </h1>
//         <p className="text-center text-gray-200 mb-6">
//           Place your order now at Acdemians and get the premium quality 100%
//           non-plagiarized paper written by our professional experts.
//         </p>
//         <div className="flex justify-center items-center min-h-screen">
//           <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md border-4 border-orange-400">
//             <form className="space-y-4">
//               <div>
//                 <label
//                   className="block text-white text-sm font-bold mb-2"
//                   htmlFor="name"
//                 >
//                   Name
//                 </label>
//                 <input
//                   className="w-full px-3 py-2 border rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Enter your name"
//                   autoComplete="name"
//                 />
//               </div>
//               <div>
//                 <label
//                   className="block text-white text-sm font-bold mb-2"
//                   htmlFor="email"
//                 >
//                   Email
//                 </label>
//                 <input
//                   className="w-full px-3 py-2 border rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   autoComplete="email"
//                 />
//               </div>
//               <div>
//                 <label
//                   className="block text-white text-sm font-bold mb-2"
//                   htmlFor="phone"
//                 >
//                   Phone
//                 </label>
//                 <input
//                   className="w-full px-3 py-2 border rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   placeholder="Enter your phone number"
//                   autoComplete="tel"
//                 />
//               </div>
//               <div>
//                 <label
//                   className="block text-white text-sm font-bold mb-2"
//                   htmlFor="orderNumber"
//                 >
//                   Order Number
//                 </label>
//                 <input
//                   className="w-full px-3 py-2 border rounded-md bg-gray-300 text-gray-700"
//                   type="text"
//                   id="orderNumber"
//                   name="order-number"
//                   value="TA-7003730"
//                   readOnly
//                   autoComplete="off"
//                 />
//               </div>
//               <div>
//                 <label
//                   className="block text-white text-sm font-bold mb-2"
//                   htmlFor="totalAmount"
//                 >
//                   Total Amount GBP
//                 </label>
//                 <input
//                   className="w-full px-3 py-2 border rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   type="text"
//                   id="totalAmount"
//                   name="amount"
//                   placeholder="Enter total amount in GBP"
//                   autoComplete="off"
//                 />
//               </div>
//               <button
//                 className="w-full py-3 bg-blue-900 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
//                 type="submit"
//               >
//                 Proceed
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <Footer aboutRef={aboutRef} contactRef={contactRef} />
//       <FooterBanner />
//     </>
//   );
// };

// export default OrderNow;

// import { useRef, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Head from "../components/Head";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import FooterBanner from "../components/FooterBanner";
// // import baseUrl from "../baseUrl.js";
// import axios from "axios";

// const OrderNow = () => {
//   const aboutRef = useRef(null);
//   const contactRef = useRef(null);
//   // const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [totalAmount, setTotalAmount] = useState("");
//   const [orderNumber, setOrderNumber] = useState(""); // State for order number
//   const [lastOrderNumber, setLastOrderNumber] = useState(""); 
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const apiBaseUrl = 'http://localhost/php-backend/api';


//   document.title = 'Order Now - Academians Australia Pty Ltd'; 

//   useEffect(() => {
//     // Fetch the last order number when the component mounts
//     const fetchLastOrderNumber = async () => {
//       try {
//         const response = await axios.get(`${apiBaseUrl}/last-order-number.php`);
//         if (response.status === 200) {
//           setLastOrderNumber(response.data.order_number); 
//           setOrderNumber(response.data.order_number); 
//         }
//       } catch (err) {
//         setError("Error fetching last order number: " + err.message);
//       }
//     };

//     fetchLastOrderNumber();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !phone || !totalAmount) {
//       setError("Please fill in all fields except the order number");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     const orderData = {
//       name,
//       email,
//       phone,
//       total_amount: totalAmount,
//       order_number: orderNumber // Include order number in request
//     };

//     try {
//       const response = await axios.post(`${apiBaseUrl}/order-now.php`, orderData);

//       if (response.status === 201) {
//         const redirectUrl = `https://webmountx.com/payments/THA/?&NAME_KEY=${encodeURIComponent(name)}&EMAIL_KEY=${encodeURIComponent(email)}&TOTAL_AMOUNT=${encodeURIComponent(totalAmount)}&ORDER_NUMBER=${encodeURIComponent(orderNumber)}`;
        
//         // Redirect to the URL
//         window.location.href = redirectUrl;
//       } else {
//         setError("Failed to place order. Please try again.");
//       }
//     } catch (err) {
//       setError("Error: " + err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Head />
//       <Navbar aboutRef={aboutRef} contactRef={contactRef} />

//       <div className="bg-white">
//         <h1 className="text-2xl font-bold text-center text-black  mb-4 pt-10">
//           PLACE YOUR ORDER NOW
//         </h1>
//         <p className="text-center text-black mb-6 w-full max-w-md mx-auto">
//           Place your order now at Acdemians and get the premium quality 100%
//           non-plagiarized paper written by our professional experts.
//         </p>
//         <div className="flex justify-center items-center ">
//           <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md border-4 border-orange-400">
//             <form className="space-y-4" onSubmit={handleSubmit}>
//               <div>
//                 <label
//                   className="block text-white text-sm font-bold mb-2"
//                   htmlFor="name"
//                 >
//                   Name
//                 </label>
//                 <input
//                   className="w-full px-3 py-2 border rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Enter your name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   autoComplete="name"
//                 />
//               </div>
//               <div>
//                 <label
//                   className="block text-white text-sm font-bold mb-2"
//                   htmlFor="email"
//                 >
//                   Email
//                 </label>
//                 <input
//                   className="w-full px-3 py-2 border rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   autoComplete="email"
//                 />
//               </div>
//               <div>
//                 <label
//                   className="block text-white text-sm font-bold mb-2"
//                   htmlFor="phone"
//                 >
//                   Phone
//                 </label>
//                 <input
//                   className="w-full px-3 py-2 border rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   placeholder="Enter your phone number"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   autoComplete="tel"
//                 />
//               </div>
//               <div>
//                 <label
//                   className="block text-white text-sm font-bold mb-2"
//                   htmlFor="orderNumber"
//                 >
//                   Order Number
//                 </label>
//                 <input
//                   className="w-full px-3 py-2 border rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   type="text"
//                   id="orderNumber"
//                   name="order_number"
//                   placeholder="Order number"
//                   value={orderNumber}
//                   readOnly 
//                 />
//               </div>
//               <div>
//                 <label
//                   className="block text-white text-sm font-bold mb-2"
//                   htmlFor="totalAmount"
//                 >
//                   Total Amount GBP
//                 </label>
//                 <input
//                   className="w-full px-3 py-2 border rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   type="text"
//                   id="totalAmount"
//                   name="total_amount"
//                   placeholder="Enter total amount in GBP"
//                   value={totalAmount}
//                   onChange={(e) => setTotalAmount(e.target.value)}
//                   autoComplete="off"
//                 />
//               </div>
              
//               {error && (
//                 <p className="text-red-500 text-sm">{error}</p>
//               )}
//               <button
//                 className="w-full py-3 bg-blue-900 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
//                 type="submit"
//                 disabled={loading}
//               >
//                 {loading ? "Processing..." : "Proceed"}
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Show last order number if available */}
       
//       </div>

//       <Footer aboutRef={aboutRef} contactRef={contactRef} />
//       <FooterBanner />
//     </>
//   );
// };

// export default OrderNow;


import { useRef, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import Head from "../components/Head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterBanner from "../components/FooterBanner";
import axios from "axios";
// import baseUrl from "../baseUrl";
import baseUrl from "../baseUrl.js";


const OrderNow = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [orderNumber, setOrderNumber] = useState(""); // State for order number
  const [lastOrderNumber, setLastOrderNumber] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const apiBaseUrl = 'http://localhost/php-backend/api';
  // const apiBaseurl = 'https://be.academians.com.au/api'

  document.title = 'Order Now - Academians Australia Pty Ltd'; 

  // useEffect(() => {
  //   // Fetch the last order number when the component mounts
  //   const fetchLastOrderNumber = async () => {
  //     try {
  //       const response = await axios.get(`${apiBaseUrl}/last-order-number.php`);
  //       if (response.status === 200) {
  //         console.log('API Response:', response.data); // Debugging line
  //         setLastOrderNumber(response.data.order_number); 
  //         console.log('Last Order Number:', response.data);
  //         setOrderNumber(response.data); 
  //       } else {
  //         setError("Unexpected response status: " + response.status);
  //       }
  //     } catch (err) {
  //       setError("Error fetching last order number: " + err.message);
  //     }
  //   };

  //   fetchLastOrderNumber();
  // }, []);

  useEffect(() => {
    // Fetch the last order number when the component mounts
    const fetchLastOrderNumber = async () => {
        try {
            const response = await axios.get(`https://be.academians.co.uk/api/last-order-number.php`, {
                // This transformResponse function handles parsing the response data
                transformResponse: [function (data) {
                    try {
                        // Find the start of the JSON object and extract it
                        const jsonStart = data.indexOf('{');
                        const jsonData = data.slice(jsonStart);
                        // Parse and return the JSON data
                        return JSON.parse(jsonData);
                    } catch (e) {
                        // Log and handle parsing error
                        console.error("Error parsing JSON response: ", e);
                        setError("Invalid JSON response from server");
                        return {};
                    }
                }]
            });

            if (response.status === 200 || response.status === 201) {
                console.log('API Response:', response.data); // Debugging line
                setLastOrderNumber(response.data.order_number); 
                console.log('Last Order Number:', response.data.order_number); // Show the last order number directly
                setOrderNumber(response.data.order_number); // Set only the order number string
            } else {
                setError("Unexpected response status: " + response.status);
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
      const response = await axios.post(`https://be.academians.co.uk/api/order-now.php`, orderData);

      if (response.status === 201 || response.status === 200) {
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
        <h1 className="text-2xl font-bold text-center text-black mb-4 pt-10">
          PLACE YOUR ORDER NOW
        </h1>
        <p className="text-center text-black mb-6 w-full max-w-md mx-auto">
          Place your order now at Acdemians and get the premium quality 100%
          non-plagiarized paper written by our professional experts.
        </p>
        <div className="flex justify-center items-center">
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
