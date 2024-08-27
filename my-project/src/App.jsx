import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ReviewPage from "./Pages/ReviewPage";
import ThankYou from "./Pages/ThankYou";
import  TawkMessengerReact  from '@tawk.to/tawk-messenger-react';
import { useRef } from "react";
import DiscountPopup from "./components/DiscountPopup";
import AssignmentHelp from "./Pages/AssignmentHelp";
import EssayHelp from "./Pages/EssayHelp";
import CourseWorkHelp from "./Pages/CourseWorkHelp";
import OnlineExamHelp from "./Pages/OnlineExamHelp";
import DissertationHelp from "./Pages/DissertationHelp";
import ResearchProposal from "./Pages/ResearchProposal";
import AssignmentExpert from "./Pages/AssignmentExpert";
import Assignment from "./Pages/Assignment";
import AssesmentHelp from "./Pages/AssesmentHelp";
import OrderNow from "./Pages/OrderNow";
import CodingHelp from "./Pages/CodingHelp";
import AssignmentOffer from "./Pages/AssignmentOffer";

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
            <Route path="/about-us" element={<HomePage />} />
    
            <Route path="/contact-us" element={<HomePage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/thankyou2" element={<ThankYou />} />
            <Route path="/assignment-help" element={<AssignmentHelp />} />
            <Route path="/essay-help" element={<EssayHelp />} />
            <Route path="/coursework-help" element={<CourseWorkHelp />} />
            <Route path="/exam-help" element={<OnlineExamHelp />} />
            <Route path="/dissertation-help" element={<DissertationHelp />} />
            <Route path="/research-proposal" element={<ResearchProposal />} />
            <Route path="/assignment-expert" element={<AssignmentExpert />} />
            <Route path="/assignment" element={<Assignment />} />
            <Route path="/assessment-help" element={<AssesmentHelp/>} />
            <Route path="/assignment-offer" element={<AssignmentOffer/>} />
            <Route path="/coding-help" element={<CodingHelp/>} />
            <Route path="/order-now" element={<OrderNow/>} />




           

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



