import ThemeToggle from "../common/ThemeToggle";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import { navigation } from "../../data/navigation";

import { Bars3Icon } from "@heroicons/react/24/outline"; //for mobile hamburger icon

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  // NEW: Tracks whether the user has scrolled down
  const [scrolled, setScrolled] = useState(false);
  // NEW: Detect when the page has been scrolled
  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);
  return (
    <>
      {/* <header className="sticky top-0 left-0 right-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md"> */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 
          ${
            scrolled
              ? "border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl shadow-lg"
              : "bg-transparent"
          }
        `}
      >
        {/* <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"> */}
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300
            ${scrolled ? "h-16" : "h-20"}
          `}
        >
          {/* <h1 className="text-xl font-bold text-white">
            Diptangsu
          </h1> */}
          {/* <a href="#home" className="text-xl font-bold text-white" > */}
          <a href="#home" className={` font-bold text-white transition-all duration-300
            ${scrolled ? "text-xl" : "text-2xl"}
            `}
          >
              Diptangsu
          </a>
          
          <nav className="hidden md:block">
              {/* <ul className="flex gap-8"> */}
              <ul className={`flex transition-all duration-300
                  ${scrolled ? "gap-6" : "gap-8"}
                `}
              >

                  {navigation.map((item) => (

                      <li key={item.name}>

                          <NavLink href={item.href}>
                              {item.name}
                          </NavLink>

                      </li>

                  ))}

              </ul>
          </nav>
          <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-white text-2xl"
              aria-label="Open menu"
          >
              <Bars3Icon className="h-7 w-7 text-white" />
          </button>
          </div>
          {/* <nav className="hidden md:block">
              <ul className="flex gap-8">

                  <li>
                      <NavLink href="#home" active={true}>
                          Home
                      </NavLink>
                  </li>

                  <li>
                      <NavLink href="#experience">
                          Experience
                      </NavLink>
                  </li>

                  <li>
                      <NavLink href="#projects">
                          Projects
                      </NavLink>
                  </li>

                  <li>
                      <NavLink href="#certifications">
                          Certifications
                      </NavLink>
                  </li>

                  <li>
                      <NavLink href="#contact">
                          Contact
                      </NavLink>
                  </li>

              </ul>
          </nav> */}
          {/* <nav>
            <ul className="flex gap-8 text-slate-300">
              <li className="cursor-pointer hover:text-white">Home</li>
              <li className="cursor-pointer hover:text-white">Experience</li>
              <li className="cursor-pointer hover:text-white">Projects</li>
              <li className="cursor-pointer hover:text-white">Contact</li>
            </ul>
          </nav> */}
          
        </div>
      </header>
      <MobileMenu
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
      />
    </>
  );
}

export default Navbar;