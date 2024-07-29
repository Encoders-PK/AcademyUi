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

const HomePage = () => {
  return (
    <div>
      <Head/>
      <Navbar/>
      <Banner/>
      <About/>
      <RecentReviews/>
      <Satisfactory/>
      <SubjectsCard/>
      <Cards/>
      <DiscountBanner/>
      <Faq />
      <ContactUs />
      <Footer/>
    </div>
  )
}

export default HomePage