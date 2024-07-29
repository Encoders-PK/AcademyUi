import Footer from "../components/Footer";
import Head from "../components/Head";
import Navbar from "../components/Navbar";
import ReviewBanner from "../components/ReviewBanner";
import ReviewCards from "../components/ReviewCards";

const ReviewPage = () => {
  return (
    <div>
      <Head />
      <Navbar />
      <ReviewBanner/>
      <ReviewCards/>
      <Footer />
       
    </div>
  );
};

export default ReviewPage;
