import Footer from "../components/Footer";
import FooterBanner from "../components/FooterBanner";
import Head from "../components/Head";
import Navbar from "../components/Navbar";
import ReviewBanner from "../components/ReviewBanner";
import ReviewCards from "../components/ReviewCards";
import StickyButtons from "../components/StickyButtons";

const ReviewPage = () => {
  return (
    <div>
      <Head />
      <Navbar />
      <ReviewBanner/>
      <ReviewCards/>
      <StickyButtons/>
      <Footer />
      <FooterBanner/>
       
    </div>
  );
};

export default ReviewPage;
