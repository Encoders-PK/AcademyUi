
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import ReviewPage from "./Pages/ReviewPage";
import ThankYou from "./Pages/ThankYou";
const App = () => {
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
        </div>
      </Router>
    </div>
  );
};

export default App;
