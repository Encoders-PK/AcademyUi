// without Animations
// import { useState, useEffect } from "react";
// import maleStd from "../assets/male-stud.png";
// import { IoCloseCircleSharp, IoStarSharp } from "react-icons/io5";

// const StickyPopup = () => {
//   const [popupIndex, setPopupIndex] = useState(0); // State to manage which popup is visible
//   const [isPopupVisible, setIsPopupVisible] = useState(true); // State to manage visibility of the popup
//   const [isClosed, setIsClosed] = useState(false); // State to track if the close button has been clicked

//   useEffect(() => {
//     if (isClosed) return; // If the close button is clicked, do not show any more popups

//     const interval = setInterval(() => {
//       setIsPopupVisible(false);
//       setTimeout(() => {
//         setPopupIndex((prevIndex) => (prevIndex + 1) % 3); // Cycle through the 3 popups
//         setIsPopupVisible(true);
//       }, 100); // Delay to allow for the popup to disappear
//     }, 5000); // Change popup every 5 seconds

//     return () => clearInterval(interval);
//   }, [isClosed]);

//   const closePopup = () => {
//     setIsPopupVisible(false); // Hide the current popup
//     setIsClosed(true); // Set the state to indicate that the close button has been clicked
//   };

//   const popups = [
//     {
//       id: 1,
//       content: (
//         <>
//           <img src={maleStd} className="w-[80px] h-[80px]" alt="Student" />
//           <div>
//             <h2 className="text-sm font-semibold">William Ward</h2>
//             <p className="mt-2 text-[12px] text-gray-700">
//               Student Of Cranfield University <br /> Got 79% Marks in Their Mid Term Exams
//             </p>
//             <div className="flex mt-1">
//               <IoStarSharp color="#E85F2A" />
//               <IoStarSharp color="#E85F2A" />
//               <IoStarSharp color="#E85F2A" />
//               <IoStarSharp color="#E85F2A" />
//             </div>
//           </div>
//         </>
//       ),
//     },
//     {
//       id: 2,
//       content: (
//         <>
//           <img src={maleStd} className="w-[80px] h-[80px]" alt="Student" />
//           <div>
//             <h2 className="text-sm font-semibold">John Doe</h2>
//             <p className="mt-2 text-[12px] text-gray-700">
//               Student Of Stanford University <br /> Got 85% Marks in Their Mid Term Exams
//             </p>
//             <div className="flex mt-1">
//               <IoStarSharp color="#E85F2A" />
//               <IoStarSharp color="#E85F2A" />
//               <IoStarSharp color="#E85F2A" />
//               <IoStarSharp color="#E85F2A" />
//             </div>
//           </div>
//         </>
//       ),
//     },
//     {
//       id: 3,
//       content: (
//         <>
//           <img src={maleStd} className="w-[80px] h-[80px]" alt="Student" />
//           <div>
//             <h2 className="text-sm font-semibold">Jane Smith</h2>
//             <p className="mt-2 text-[12px] text-gray-700">
//               Student Of Harvard University <br /> Got 90% Marks in Their Mid Term Exams
//             </p>
//             <div className="flex mt-1">
//               <IoStarSharp color="#E85F2A" />
//               <IoStarSharp color="#E85F2A" />
//               <IoStarSharp color="#E85F2A" />
//               <IoStarSharp color="#E85F2A" />
//             </div>
//           </div>
//         </>
//       ),
//     },
//   ];

//   return (
//     <>
//       {isPopupVisible && !isClosed && (
//         <div
//           className={`fixed bottom-2 left-2 w-[300px] h-[140px] bg-[#F3F3F3] shadow-lg p-4 rounded-tr-[30%] rounded-bl-[30%] border-gray-200 z-50 transition-transform transform ${
//             isPopupVisible ? "translate-y-0" : "translate-y-full"
//           }`}
//         >
//           <div className="py-2">
//             <button
//               onClick={closePopup}
//               className="text-gray-500 hover:text-gray-700 absolute top-8 right-6"
//             >
//               <IoCloseCircleSharp color="red" size={20} />
//             </button>
//           </div>

//           <div className="flex items-center justify-between gap-4">
//             {popups[popupIndex].content}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default StickyPopup;



// import { useState, useEffect } from "react";
// import maleStd from "../assets/male-stud.png";
// import { IoCloseCircleSharp, IoStarSharp } from "react-icons/io5";

// const StickyPopup = () => {
//   const [popupIndex, setPopupIndex] = useState(0); // State to manage which popup is visible
//   const [isPopupVisible, setIsPopupVisible] = useState(true); // State to manage visibility of the popup
//   const [isClosed, setIsClosed] = useState(false); // State to track if the close button has been clicked

//   useEffect(() => {
//     if (isClosed) return; // If the close button is clicked, do not show any more popups

//     const interval = setInterval(() => {
//       setIsPopupVisible(false);
//       setTimeout(() => {
//         setPopupIndex((prevIndex) => (prevIndex + 1) % 3); // Cycle through the 3 popups
//         setIsPopupVisible(true);
//       }, 500); // Delay to allow for the popup to disappear
//     }, 8000); // Change popup every 5 seconds

//     return () => clearInterval(interval);
//   }, [isClosed]);

//   const closePopup = () => {
//     setIsPopupVisible(false); // Hide the current popup
//     setIsClosed(true); // Set the state to indicate that the close button has been clicked
//   };

//   const popups = [
//     {
//       id: 1,
//       content: (
//         <>
//           <img src={maleStd} className="w-[80px] h-[80px]" alt="Student" />
//           <div>
//             <h2 className="text-sm font-semibold">William Ward</h2>
//             <p className="mt-2 text-[12px] text-gray-700">
//               Student Of Cranfield University <br /> Got 79% Marks in Their Mid Term Exams
//             </p>
//             <div className="flex mt-1">
//               <IoStarSharp color="#E85F2A" />
//               <IoStarSharp color="#E85F2A" />
//               <IoStarSharp color="#E85F2A" />
//               <IoStarSharp color="#E85F2A" />
//             </div>
//           </div>
//         </>
//       ),
//     },
//     {
//       id: 2,
//       content: (
//         <>
//           <img src={maleStd} className="w-[80px] h-[80px]" alt="Student" />
//           <div>
//             <h2 className="text-sm font-semibold">John Doe</h2>
//             <p className="mt-2 text-[12px] text-gray-700">
//               Student Of Stanford University <br /> Got 85% Marks in Their Mid Term Exams
//             </p>
//             <div className="flex mt-1">
//               <IoStarSharp color="#E85F2A" />
//               <IoStarSharp color="#E85F2A" />
//               <IoStarSharp color="#E85F2A" />
//               <IoStarSharp color="#E85F2A" />
//             </div>
//           </div>
//         </>
//       ),
//     },
//     {
//       id: 3,
//       content: (
//         <>
//           <img src={maleStd} className="w-[80px] h-[80px]" alt="Student" />
//           <div>
//             <h2 className="text-sm font-semibold">Jane Smith</h2>
//             <p className="mt-2 text-[12px] text-gray-700">
//               Student Of Harvard University <br /> Got 90% Marks in Their Mid Term Exams
//             </p>
//             <div className="flex mt-1">
//               <IoStarSharp color="#E85F2A" />
//               <IoStarSharp color="#E85F2A" />
//               <IoStarSharp color="#E85F2A" />
//               <IoStarSharp color="#E85F2A" />
//             </div>
//           </div>
//         </>
//       ),
//     },
//   ];

//   return (
//     <>
//       {isPopupVisible && !isClosed && (
//         <div
//           className={`fixed bottom-2 left-2 w-[300px] h-[140px] bg-[#F3F3F3] shadow-lg p-4 rounded-tr-[30%] rounded-bl-[30%] border-gray-200 z-50 transition-transform transition-opacity transform ${
//             isPopupVisible ? "animate-slide-up" : "animate-slide-down"
//           }`}
//         >
//           <div className="py-2">
//             <button
//               onClick={closePopup}
//               className="text-gray-500 hover:text-gray-700 absolute top-8 right-6"
//             >
//               <IoCloseCircleSharp color="red" size={20} />
//             </button>
//           </div>

//           <div className="flex items-center justify-between gap-4">
//             {popups[popupIndex].content}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default StickyPopup;


import { useState, useEffect } from "react";
import maleStd from "../assets/male-stud.png";
import { IoCloseCircleSharp, IoStarSharp } from "react-icons/io5";

const StickyPopup = () => {
  const [popupIndex, setPopupIndex] = useState(0); // State to manage which popup is visible
  const [isPopupVisible, setIsPopupVisible] = useState(true); // State to manage visibility of the popup
  const [isClosed, setIsClosed] = useState(false); // State to track if the close button has been clicked
  const [animation, setAnimation] = useState("animate-slide-up");

  useEffect(() => {
    if (isClosed) return; // If the close button is clicked, do not show any more popups

    const interval = setInterval(() => {
      setAnimation("animate-slide-down");
      setTimeout(() => {
        setPopupIndex((prevIndex) => (prevIndex + 1) % 3); // Cycle through the 3 popups
        setAnimation("animate-slide-up");
      }, 500); // Delay to allow for the popup to disappear
    }, 8000); // Change popup every 8 seconds

    return () => clearInterval(interval);
  }, [isClosed]);

  const closePopup = () => {
    setIsPopupVisible(false); // Hide the current popup
    setIsClosed(true); // Set the state to indicate that the close button has been clicked
  };

  const popups = [
    {
      id: 1,
      content: (
        <>
          <img src={maleStd} className="w-[80px] h-[80px]" alt="Student" />
          <div>
            <h2 className="text-sm font-semibold">William Ward</h2>
            <p className="mt-2 text-[12px] text-gray-700">
              Student Of Cranfield University <br /> Got 79% Marks in Their Mid Term Exams
            </p>
            <div className="flex mt-1">
              <IoStarSharp color="#E85F2A" />
              <IoStarSharp color="#E85F2A" />
              <IoStarSharp color="#E85F2A" />
              <IoStarSharp color="#E85F2A" />
            </div>
          </div>
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          <img src={maleStd} className="w-[80px] h-[80px]" alt="Student" />
          <div>
            <h2 className="text-sm font-semibold">John Doe</h2>
            <p className="mt-2 text-[12px] text-gray-700">
              Student Of Stanford University <br /> Got 85% Marks in Their Mid Term Exams
            </p>
            <div className="flex mt-1">
              <IoStarSharp color="#E85F2A" />
              <IoStarSharp color="#E85F2A" />
              <IoStarSharp color="#E85F2A" />
              <IoStarSharp color="#E85F2A" />
            </div>
          </div>
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          <img src={maleStd} className="w-[80px] h-[80px]" alt="Student" />
          <div>
            <h2 className="text-sm font-semibold">Jane Smith</h2>
            <p className="mt-2 text-[12px] text-gray-700">
              Student Of Harvard University <br /> Got 90% Marks in Their Mid Term Exams
            </p>
            <div className="flex mt-1">
              <IoStarSharp color="#E85F2A" />
              <IoStarSharp color="#E85F2A" />
              <IoStarSharp color="#E85F2A" />
              <IoStarSharp color="#E85F2A" />
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      {isPopupVisible && !isClosed && (
        <div
          className={`fixed bottom-2 hidden md:block left-2 w-[300px] h-[140px] bg-[#F3F3F3] shadow-lg p-4 rounded-tr-[30%] rounded-bl-[30%] border-gray-200 z-50 transition-transform transform ${
            animation
          }`}
        >
          <div className="py-2">
            <button
              onClick={closePopup}
              className="text-gray-500 hover:text-gray-700 absolute top-8 right-6"
            >
              <IoCloseCircleSharp color="red" size={20} />
            </button>
          </div>

          <div className="flex items-center justify-between gap-4">
            {popups[popupIndex].content}
          </div>
        </div>
      )}
    </>
  );
};

export default StickyPopup;




