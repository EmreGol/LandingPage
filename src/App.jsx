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
      <div id="hero">
        <HeroSection />
      </div>
      <div id="services">
        <OurServices />
      </div>
      <div id="apps">
        <Links />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="about">
        <LatestArticle />
      </div>
      <Footer />
    </>
  )
}

export default App