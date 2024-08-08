
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import ReviewPage from "./Pages/ReviewPage";
import ThankYou from "./Pages/ThankYou";
import  TawkMessengerReact  from '@tawk.to/tawk-messenger-react';
import { useRef } from "react";
import DiscountPopup from "./components/DiscountPopup";
const App = () => {


  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
    if (tawkMessengerRef.current) {
      tawkMessengerRef.current.minimize();
    }
  };
  const onLoad = () => {
    console.log('onLoad works!');
};
  return (
    <div>

        
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/thankyou" element={<ThankYou />} />

          </Routes>
          <DiscountPopup/>
          <TawkMessengerReact
            propertyId="601da070c31c9117cb7649b7"
            widgetId="1etprlduf"
            // ref={tawkMessengerRef}
            onLoad={onLoad}
          />
            <button className="minimize-button hidden" onClick={handleMinimize}></button>

        </div>
      </Router>
    </div>
  );
};

export default App;
