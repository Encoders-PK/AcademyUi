// import { FaWhatsapp, FaPhoneAlt, FaComments } from 'react-icons/fa';

// const StickyButtons = () => {
//   const buttons = [
//     { id: 1, icon: <FaWhatsapp color='#408955' size={25} />, label: 'WhatsApp Now' },
//     { id: 2, icon: <FaPhoneAlt size={20} color='#367285' />, label: 'Call Now' },
//     { id: 3, icon: <FaComments size={20} color='#F1B815' />, label: 'Chat Now' },
//   ];

//   return (
//     <div className="fixed hidden top-[25%] left-4 md:flex flex-col items-center gap-4 z-50">
//       {buttons.map((button) => (
//         <div key={button.id} className="relative group">
//           <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg transition-all duration-300 group-hover:w-40">
//             <span className="text-xl">{button.icon}</span>
//             <span className="ml-2 text-sm whitespace-nowrap hidden group-hover:inline">
//               {button.label}
//             </span>
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StickyButtons;





// // import { useState } from 'react';
// // import { FaWhatsapp, FaPhone, FaEnvelope, FaComments } from 'react-icons/fa';

// // const StickyButtons = () => {
// //   const [activeId, setActiveId] = useState(null);

// //   const buttons = [
// //     { id: 1, icon: <FaWhatsapp />, label: 'WhatsApp Now' },
// //     { id: 2, icon: <FaPhone />, label: 'Call Now' },
// //     { id: 3, icon: <FaComments />, label: 'Chat Now' },
// //     { id: 4, icon: <FaEnvelope />, label: 'Email Now' },
// //   ];

// //   return (
// //     <div className="fixed top-1/4 left-4 flex flex-col items-center gap-4 z-50">
// //       {buttons.map((button) => (
// //         <div key={button.id} className="relative">
// //           <button
// //             onClick={() => setActiveId(activeId === button.id ? null : button.id)}
// //             className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg"
// //           >
// //             <span className="text-xl">{button.icon}</span>
// //             <span
// //               className={`ml-2 text-sm whitespace-nowrap absolute left-full top-1/2 transform -translate-y-1/2 ${
// //                 activeId === button.id ? 'opacity-100 translate-x-2' : 'opacity-0 translate-x-0'
// //               } transition-all duration-300`}
// //             >
// //               {button.label}
// //             </span>
// //           </button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default StickyButtons;

// // import { FaWhatsapp, FaPhone, FaEnvelope, FaComments } from 'react-icons/fa';

// // const StickyButtons = () => {
// //   const buttons = [
// //     { id: 1, icon: <FaWhatsapp />, label: 'WhatsApp Now' },
// //     { id: 2, icon: <FaPhone />, label: 'Call Now' },
// //     { id: 3, icon: <FaComments />, label: 'Chat Now' },
// //     { id: 4, icon: <FaEnvelope />, label: 'Email Now' },
// //   ];

// //   return (
// //     <div className="fixed top-1/4 left-4 flex flex-col items-center gap-4 z-50">
// //       {buttons.map((button) => (
// //         <div key={button.id} className="relative">
// //           <button
// //             className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg transition-all duration-300 group-hover:w-40"
// //           >
// //             <span className="text-xl">{button.icon}</span>
// //             <span
// //               className="ml-2 text-sm whitespace-nowrap absolute left-full top-1/2 transform -translate-y-1/2  transition-all duration-300"
// //             >
// //               {button.label}
// //             </span>
// //           </button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default StickyButtons;


// import { FaWhatsapp, FaPhoneAlt, FaComments } from 'react-icons/fa';

// const StickyButtons = () => {
  
//   useEffect(() => {
//     // Adding Tawk.to script to the page when the component mounts
//     var Tawk_API = Tawk_API || {},
//       Tawk_LoadStart = new Date();
//     (function () {
//       var s1 = document.createElement("script"),
//         s0 = document.getElementsByTagName("script")[0];
//       s1.async = true;
//       s1.src = "https://tawk.to/chat/601da070c31c9117cb7649b7/1etprlduf"; // Your Tawk.to script source
//       s1.charset = "UTF-8";
//       s1.setAttribute("crossorigin", "*");
//       s0.parentNode.insertBefore(s1, s0);
//     })();
//   }, []);

//   const handleTalkToExpertClick = () => {
//     if (window.Tawk_API && window.Tawk_API.maximize) {
//       window.Tawk_API.maximize();
//     } else {
//       console.error("Tawk.to is not initialized properly.");
//     }
//   };
  
//   const buttons = [
//     { id: 1, icon: <FaWhatsapp color='#408955' size={25} />, label: 'WhatsApp Now', link: 'https://wa.me/447397145697' },
//     { id: 2, icon: <FaPhoneAlt size={20} color='#367285' />, label: 'Call Now', link: 'tel:+441618189341' },
//     { id: 3, icon: <FaComments size={20} color='#F1B815' />, label: 'Chat Now', link: 'mailto:info@academians.co.uk' },
//   ];

//   return (
//     <div className="fixed hidden top-[25%] left-4 md:flex flex-col items-center gap-4 z-50">
//       {buttons.map((button) => (
//         <div key={button.id} className="relative group">
//           <a href={button.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg transition-all duration-300 group-hover:w-40">
//             <span className="text-xl">{button.icon}</span>
//             <span className="ml-2 text-sm whitespace-nowrap hidden group-hover:inline">
//               {button.label}
//             </span>
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StickyButtons;

import { useEffect } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaComments } from 'react-icons/fa';

const StickyButtons = () => {

  useEffect(() => {
    // Adding Tawk.to script to the page when the component mounts
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://tawk.to/chat/601da070c31c9117cb7649b7/1etprlduf"; // Your Tawk.to script source
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  const handleTalkToExpertClick = () => {
    if (window.Tawk_API && window.Tawk_API.maximize) {
      window.Tawk_API.maximize();
    } else {
      console.error("Tawk.to is not initialized properly.");
    }
  };
  
  const buttons = [
    { id: 1, icon: <FaWhatsapp color='#408955' size={25} />, label: 'WhatsApp Now', link: 'https://wa.me/447397145697' },
    { id: 2, icon: <FaPhoneAlt size={20} color='#367285' />, label: 'Call Now', link: 'tel:+441618189341' },
    { id: 3, icon: <FaComments size={20} color='#F1B815' />, label: 'Chat Now' },
  ];

  return (
    <div className="fixed hidden top-[25%] left-4 md:flex flex-col items-center gap-4 z-50">
      {buttons.map((button) => (
        <div key={button.id} className="relative group">
          <a
            href={button.link || '#'}
            target={button.id !== 3 ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg transition-all duration-300 group-hover:w-40"
            onClick={button.id === 3 ? handleTalkToExpertClick : null}
          >
            <span className="text-xl">{button.icon}</span>
            <span className="ml-2 text-sm whitespace-nowrap hidden group-hover:inline">
              {button.label}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default StickyButtons;








