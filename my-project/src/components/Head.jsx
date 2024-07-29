// import { IoLogoWhatsapp } from "react-icons/io";
// import { IoCall } from "react-icons/io5";
// import { CgMail } from "react-icons/cg";




// const Head = () => {
//   return (
//     <div className='bg-white w-full h-12  text-black'>
        
//         {/* main container */}
//         <div className='flex items-center justify-evenly   pt-2'>
//             <div className='flex gap-1 items-center'>
//                 <div><IoCall color='#408955' className='text-3xl'/></div>
                
//                 <h1> Call us: +44 161 818 9341</h1>
//             </div>

//             <div className='flex gap-1 items-center'>
//                 <div><IoLogoWhatsapp color='#408955' className='text-3xl'/></div>
                
//                 <h1>Connect On Whatsapp: +44 739 714 5697</h1>
//             </div>

//             <div className='flex gap-1 items-center'>
//                 <div><CgMail color='#408955' className='text-3xl'/></div>
                
//                 <h1>Email us: info@academians.co.uk
//                 </h1>
//             </div>

//         </div>
//     </div>
//   )
// }

// export default Head



// import { IoLogoWhatsapp } from "react-icons/io";
// import { IoCall } from "react-icons/io5";
// import { CgMail } from "react-icons/cg";

// const Head = () => {
//   return (
//     <div className='bg-white w-full h-12 text-black fixed top-0 left-0 z-50 shadow-md'>
//       {/* main container */}
//       <div className='flex items-center justify-evenly h-full px-4'>
//         <div className='flex gap-2 items-center'>
//           <IoCall color='#408955' className='text-3xl' />
//           <h1 className='text-sm md:text-base'>Call us: +44 161 818 9341</h1>
//         </div>

//         <div className='flex gap-2 items-center'>
//           <IoLogoWhatsapp color='#408955' className='text-3xl' />
//           <h1 className='text-sm md:text-base'>Connect On Whatsapp: +44 739 714 5697</h1>
//         </div>

//         <div className='flex gap-2 items-center'>
//           <CgMail color='#408955' className='text-3xl' />
//           <h1 className='text-sm md:text-base'>Email us: info@academians.co.uk</h1>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Head;

import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { CgMail } from "react-icons/cg";

const Head = () => {
  return (
    <div className='bg-white w-full h-12 text-black fixed top-0 left-0 z-50 shadow-md hidden md:block'>
      {/* main container */}
      <div className='flex items-center justify-evenly h-full px-4'>
        <div className='flex gap-2 items-center'>
          <IoCall color='#408955' className='text-3xl' />
          <h1 className='text-sm md:text-base'>Call us: +44 161 818 9341</h1>
        </div>

        <div className='flex gap-2 items-center'>
          <IoLogoWhatsapp color='#408955' className='text-3xl' />
          <h1 className='text-sm md:text-base'>Connect On Whatsapp: +44 739 714 5697</h1>
        </div>

        <div className='flex gap-2 items-center'>
          <CgMail color='#408955' className='text-3xl' />
          <h1 className='text-sm md:text-base'>Email us: info@academians.co.uk</h1>
        </div>
      </div>
    </div>
  )
}

export default Head;

