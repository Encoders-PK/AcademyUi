// const Footer = () => {
//   return (
//     <footer className="bg-[#020621] text-white py-20 w-full mt-12 h-[360px]">
//       <div className="container mx-auto flex justify-between">
//         <div className="w-1/4">
//           <h3 className="text-2xl font-bold">Logo Here</h3>
//           <p className="mt-4">
//             We review your documents to ensure that all fonts, margins, indentations, and other formatting elements are used consistently. Our professional team strives to provide quality service and we are ready to assist you.
//           </p>
//         </div>
//         <div className="w-1/5">
//           <h3 className="text-xl font-bold">Navigation</h3>
//           <ul className="mt-4 space-y-1 list-disc list-inside">
//             <li>Home</li>
//             <li>About Us</li>
//             <li>Contact</li>
//             <li>Reviews</li>
//             <li>Account Login</li>
//           </ul>
//         </div>
//         <div className="w-1/5">
//           <h3 className="text-xl font-bold">Services</h3>
//           <ul className="mt-4 space-y-1 list-disc list-inside">
//             <li>Home</li>
//             <li>About Us</li>
//             <li>Contact</li>
//             <li>Reviews</li>
//             <li>Account Login</li>
//           </ul>
//         </div>
//         <div className="w-1/5">
//           <h3 className="text-xl font-bold">Contact Us</h3>
//           <ul className="mt-4 space-y-1 list-disc list-inside">
//             <li>Call Us</li>
//             <li>WhatsApp Us</li>
//             <li>Email Us</li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// const Footer = () => {
//   return (
//     <footer className="bg-[#020621] text-white py-8 md:py-20 w-full mt-12">
//       <div className="container mx-auto px-4 flex flex-col  md:flex-row justify-between">
//         <div className="w-full md:w-1/4 mb-8 md:mb-0">
//           <h3 className="text-xl md:text-2xl font-bold">Logo Here</h3>
//           <p className="mt-4 text-sm md:text-base">
//             We review your documents to ensure that all fonts, margins, indentations, and other formatting elements are used consistently. Our professional team strives to provide quality service and we are ready to assist you.
//           </p>
//         </div>
//         <div className="w-full md:w-1/5 mb-8 md:mb-0">
//           <h3 className="text-lg md:text-xl font-bold">Navigation</h3>
//           <ul className="mt-4 space-y-2 md:space-y-1 list-none md:list-disc list-inside">
//             <li>Home</li>
//             <li>About Us</li>
//             <li>Contact</li>
//             <li>Reviews</li>
//             <li>Account Login</li>
//           </ul>
//         </div>
//         <div className="w-full md:w-1/5 mb-8 md:mb-0">
//           <h3 className="text-lg md:text-xl font-bold">Services</h3>
//           <ul className="mt-4 space-y-2 md:space-y-1 list-none md:list-disc list-inside">
//             <li>Home</li>
//             <li>About Us</li>
//             <li>Contact</li>
//             <li>Reviews</li>
//             <li>Account Login</li>
//           </ul>
//         </div>
//         <div className="w-full md:w-1/5">
//           <h3 className="text-lg md:text-xl font-bold">Contact Us</h3>
//           <ul className="mt-4 space-y-2 md:space-y-1 list-none md:list-disc list-inside">
//             <li>Call Us</li>
//             <li>WhatsApp Us</li>
//             <li>Email Us</li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import badge1 from '../assets/badge1.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import whatsapp from '../assets/whatsapp.png'
import logo from "../assets/ta-logo.png";




const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#142A41] via-[#1B7995] to-[#142A41] text-white py-8 md:py-20 w-full mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center md:justify-between text-center md:text-left">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
        <div className="flex justify-center"><img src={logo} className="w-[400px] h-auto -ml-8" alt="logoPic" /></div>
          <p className="mt-4 text-sm md:text-base">
            We review your documents to ensure that all fonts, margins, indentations, and other formatting elements are used consistently. Our professional team strives to provide quality service and we are ready to assist you.
          </p>
         
          <h1 className='mt-4 font-bold'>Our Social Media Links</h1>
          <div className='flex items-center justify-center md:justify-start gap-2 mt-2'>
          <div><img src={facebook} className='w-8 h-8' alt="" /></div>
         <div><img src={instagram} className='w-8 h-8' alt="" /></div>
          <div><img src={whatsapp} className='w-8 h-8' alt="" /></div>

          </div>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-lg md:text-xl font-bold">Navigation</h3>
          <ul className="mt-4 space-y-2 md:space-y-1 list-none md:list-disc list-inside">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Reviews</li>
            <li>Account Login</li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-lg md:text-xl font-bold">Services</h3>
          <ul className="mt-4 space-y-2 md:space-y-1 list-none md:list-disc list-inside">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Reviews</li>
            <li>Account Login</li>
          </ul>
        </div>
        <div className="w-full md:w-1/5">
          <h3 className="text-lg md:text-xl font-bold mb-2">Secure Payment</h3>
          <div className='flex justify-center'><img src={badge1} className='w-[340px] h-[160px] ' alt="" /></div>

          {/* <div className='flex '>
            <div><img src={badge1} alt="badge" /></div>
            <div><img src={badge2} alt="badge" /></div>
            <div><img src={badge3} alt="badge" /></div>

          </div> */}

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;



