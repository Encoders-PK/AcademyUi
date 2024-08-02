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

const HomePage = () => {
  return (
    <div>
      {/* <Slider/> */}
      <Head/>
      <Navbar/>
      <StickyButtons/>
      <Banner/>
      <About/>
      <Services/>
      <RecentReviews/>
      <Satisfactory/>
      <SubjectsCard/>
      <Cards/>
      <DiscountBanner/>
      <Faq />
      <ContactUs />
      <Footer/>
      <StickyPopup/>
      <FooterBanner/>
    </div>
  )
}

export default HomePage