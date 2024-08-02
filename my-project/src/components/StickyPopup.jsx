

// const StickyPopup = () => {


//   return (
//     <>
    

//       {/* Sticky Popup */}
      
//         <div className="fixed bottom-2 left-2  bg-white shadow-lg p-4 border-t border-gray-200 z-50">
//           <div className="flex justify-between items-center">
//             <h2 className="text-lg font-semibold">Sticky Popup</h2>
//             <button  className="text-gray-500 hover:text-gray-700">
//               &times;
//             </button>
//           </div>
//           <p className="mt-2 text-gray-700">
//             This is a sticky popup that appears at the bottom of the viewport.
//           </p>
//         </div>
      
//     </>
//   );
// };

// export default StickyPopup;

import { useState } from 'react';

const StickyPopup = () => {
  const [isVisible, setIsVisible] = useState(true); // State to manage visibility of the popup

  const closePopup = () => {
    setIsVisible(false); // Hide the popup when the close button is clicked
  };

  return (
    <>
      {/* Popup */}
      {isVisible && (
        <div className="fixed bottom-2 left-2 bg-white shadow-lg p-4 border-t border-gray-200 z-50">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Sticky Popup</h2>
            <button onClick={closePopup} className="text-gray-500 hover:text-gray-700">
              &times;
            </button>
          </div>
          <p className="mt-2 text-gray-700">
            This is a sticky popup. Click the close button to hide it.
          </p>
        </div>
      )}
    </>
  );
};

export default StickyPopup;

