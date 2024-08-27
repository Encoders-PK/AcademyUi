import { useState, useEffect } from "react";
import maleStd from "../assets/male-stud.png";
import womenStd from "../assets/women-stud.png";
import { IoCloseCircleSharp, IoStarSharp } from "react-icons/io5";

const StickyPopup = () => {
  const [popupIndex, setPopupIndex] = useState(0); 
  const [isPopupVisible, setIsPopupVisible] = useState(true); 
  const [isClosed, setIsClosed] = useState(false); 
  const [animation, setAnimation] = useState("animate-slide-up");

  useEffect(() => {
    if (isClosed) return; 

    const interval = setInterval(() => {
      setAnimation("animate-slide-down");
      setTimeout(() => {
        setPopupIndex((prevIndex) => (prevIndex + 1) % 3); 
        setAnimation("animate-slide-up");
      }, 500); 
    }, 8000); 

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
          <img src={maleStd} className="w-[70px] h-[75px] pl-4" alt="Student" />
          <div>
            <h2 className="text-sm font-semibold">George Harrison</h2>
            <p className="mt-1 text-[12px] text-gray-700">
              Student Of University of Bolton
              <br /> Got 90% Marks in Their Last Semester Project
            </p>
            <div className="flex mt-1">
              <IoStarSharp color="#E85F2A" />
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
          <img src={maleStd} className="w-[70px] h-[75px] pl-4" alt="Student" />
          <div>
            <h2 className="text-sm font-semibold">James Whitaker</h2>
            <p className="mt-1 text-[12px] text-gray-700">
              Student Of University of london
              <br />
              Got 87% Marks in Their Monthly Assignment
            </p>
            <div className="flex mt-1">
              <IoStarSharp color="#E85F2A" />
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
          <img
            src={womenStd}
            className="w-[70px] h-[75px] pl-4"
            alt="Student"
          />
          <div>
            <h2 className="text-sm font-semibold">Siobhan O'Connor</h2>
            <p className="mt-1 text-[12px] text-gray-700">
            Student Of Cranfield University
             <br />
             Got 79% Marks in Their Mid Term Exams
            </p>
            <div className="flex mt-1">
              <IoStarSharp color="#E85F2A" />
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
      id: 4,
      content: (
        <>
          <img src={maleStd} className="w-[70px] h-[75px] pl-4" alt="Student" />
          <div>
            <h2 className="text-sm font-semibold">Ethan Clarke</h2>
            <p className="mt-1 text-[12px] text-gray-700">
            Student Of King's College London
           <br />
           Got 90% Marks in Their Final Year Project
            </p>
            <div className="flex mt-1">
              <IoStarSharp color="#E85F2A" />
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
      id: 5,
      content: (
        <>
          <img
            src={womenStd}
            className="w-[70px] h-[75px] pl-4"
            alt="Student"
          />
          <div>
            <h2 className="text-sm font-semibold">Amelia Hart</h2>
            <p className="mt-1 text-[12px] text-gray-700">
              Student from University of Glasgow <br /> Got 90% Marks in Their
              Mid Term Exams
            </p>
            <div className="flex mt-1">
              <IoStarSharp color="#E85F2A" />
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
      id: 6,
      content: (
        <>
          <img
            src={womenStd}
            className="w-[70px] h-[75px] pl-4"
            alt="Student"
          />
          <div>
            <h2 className="text-sm font-semibold">Eleanor Brooks</h2>
            <p className="mt-1 text-[12px] text-gray-700">
              Student at University of Leeds <br />
              Got 90% Marks in Their Mid Term Exams
            </p>
            <div className="flex mt-1">
              <IoStarSharp color="#E85F2A" />
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
          className={`fixed bottom-2 hidden md:block left-2 w-[260px] h-[125px] bg-[#F3F3F3] shadow-lg  rounded-tr-[30%] rounded-bl-[30%] border-gray-200 z-50 transition-transform transform ${animation}`}
        >
          <div className="py-2">
            <button
              onClick={closePopup}
              className="text-gray-500 hover:text-gray-700 absolute top-5 right-6"
            >
              <IoCloseCircleSharp color="red" size={20} />
            </button>
          </div>

          <div className="flex items-center justify-between gap-2">
            {popups[popupIndex].content}
          </div>
        </div>
      )}
    </>
  );
};

export default StickyPopup;
