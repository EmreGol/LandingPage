import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import LatestArticle from "./components/LatestArticle"
import Links from "./components/Links"
import Navbar from "./components/Navbar"
import OurServices from "./components/OurServices"
import Testimonials from "./components/Testimonials"

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurServices />
      <Links />
      <Testimonials />
      <LatestArticle />
      <Footer />
    </>
  )
}

export default App