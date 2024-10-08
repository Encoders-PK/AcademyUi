import Head from '../components/Head'
import Navbar from '../components/Navbar'
import RecentReviews from '../components/RecentReviews'
import Satisfactory from './Satisfactory'
import SubjectsCard from '../components/SubjectsCard'
import Cards from '../components/Cards'
import DiscountBanner from '../components/DiscountBanner'
import Faq from '../components/Faq'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Services from '../components/Services'
import StickyButtons from '../components/StickyButtons'
import FooterBanner from '../components/FooterBanner'
import StickyPopup from '../components/StickyPopup'
import GetDiscount from '../components/GetDiscount'
import OurExpert from '../components/OurExpert'
import StickyBtn from '../components/StickyBtn'
import { useEffect, useRef } from 'react'
import AboutHelp from '../components/EssayHelp/AboutHelp'
import EssayHelpBanner from '../components/EssayHelp/EssayHelpBanner'
const EssayHelp = () => {
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    useEffect(() => {
      
      document.title = 'Essay Help - Academians UK'; // Set the document title
  }, []);
  return (
    <div>
       <Head/>
      <Navbar aboutRef={aboutRef} contactRef={contactRef}/>
      <StickyButtons/>
      <EssayHelpBanner/>
      <AboutHelp aboutRef={aboutRef}/>
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
      <Footer/>
      <StickyPopup/>
      <FooterBanner/>
      <StickyBtn/> 
    </div>
  )
}

export default EssayHelp