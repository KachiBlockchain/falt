import React, { useState } from "react";

import Logo from "../assets/img/mobileLogo.png";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import Socials from "../components/Socials";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 1 ? setBg(true) : setBg(false);
    });
  });
  return (
    <header
      className={`${
        bg ? "bg-blue-50 h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-40 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between lg:justify-evenly">
        {/* logo  */}
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        {/* nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/* social */}
        <div className="hidden lg:block">
          <Socials />
        </div>
        {/* nav mobile */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
