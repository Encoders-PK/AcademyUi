import Head from '../components/Head'
import Navbar from '../components/Navbar'
import About from '../components/About'
import RecentReviews from '../components/RecentReviews'
import Satisfactory from './Satisfactory'
import SubjectsCard from '../components/SubjectsCard'
import Cards from '../components/Cards'
import DiscountBanner from '../components/DiscountBanner'
import Faq from '../components/Faq'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Services from '../components/Services'
import StickyButtons from '../components/StickyButtons'
import FooterBanner from '../components/FooterBanner'
import StickyPopup from '../components/StickyPopup'
import GetDiscount from '../components/GetDiscount'
import OurExpert from '../components/OurExpert'
import StickyBtn from '../components/StickyBtn'
import { useRef } from 'react'
// import StickyBtn from '../components/StickyBtn'


const HomePage = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div>
      {/* <Slider/> */}
      <Head/>
      <Navbar aboutRef={aboutRef} contactRef={contactRef}/>
      <StickyButtons/>
      <Banner/>
      <About aboutRef={aboutRef}/>
      <Services/>
      <OurExpert/>
      <RecentReviews/>
      <Satisfactory/>
      <SubjectsCard/>
      <Cards/>
      <DiscountBanner/>
      <Faq />
      <GetDiscount/>
      <ContactUs contactRef={contactRef} />
      <Footer aboutRef={aboutRef} contactRef={contactRef}/>
      <StickyPopup/>
      <FooterBanner/>
      <StickyBtn/>
    </div>
  )
}

export default HomePage