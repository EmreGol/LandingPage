import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  return (
    <nav className="top-0 py-10 flex">
      <div className="container px-4 mx-auto text-sm">
        <div className="flex lg:justify-around justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <div className="font-semibold bg-blue-500 text-3xl text-white mr-2 w-10 h-10 text-center rounded-full flex justify-center items-center">
              T
            </div>
            <span className="text-2xl font-semibold tracking-tight">Trafalgar</span>
          </div>
          <ul className="hidden lg:flex space-x-12 cursor-pointer">
            <li className="font-bold text-lg">
              <Link to="hero" smooth={true} duration={500}>Home</Link>
            </li>
            <li className="text-neutral-500 text-lg">
              <Link to="services" smooth={true} duration={500}>Find a Doctor</Link>
            </li>
            <li className="font-semibold text-neutral-500 text-lg">
              <Link to="apps" smooth={true} duration={500}>Apps</Link>
            </li>
            <li className="font-semibold text-neutral-500 text-lg">
              <Link to="testimonials" smooth={true} duration={500}>Testimonials</Link>
            </li>
            <li className="font-semibold text-neutral-500 text-lg">
              <Link to="about" smooth={true} duration={500}>About Us</Link>
            </li>
          </ul>
          <div className="lg:hidden md-flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="right-0 bg-white w-full z-20 flex flex-col justify-center items-center lg:hidden">
            <ul className="space-y-4 cursor-pointer">
              <li className="font-bold text-lg">
                <Link to="hero" smooth={true} duration={500} onClick={toggleNavbar}>Home</Link>
              </li>
              <li className="text-neutral-500 text-lg">
                <Link to="services" smooth={true} duration={500} onClick={toggleNavbar}>Find a Doctor</Link>
              </li>
              <li className="font-semibold text-neutral-500 text-lg">
                <Link to="apps" smooth={true} duration={500} onClick={toggleNavbar}>Apps</Link>
              </li>
              <li className="font-semibold text-neutral-500 text-lg">
                <Link to="testimonials" smooth={true} duration={500} onClick={toggleNavbar}>Testimonials</Link>
              </li>
              <li className="font-semibold text-neutral-500 text-lg">
                <Link to="about" smooth={true} duration={500} onClick={toggleNavbar}>About Us</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
