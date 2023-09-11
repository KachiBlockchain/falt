import React from "react";

import { social } from "../data";
import Logo from "../assets/img/mobileLogo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer id="footer" className="py-12 ">
      <div className="container lg:w-full mx-auto ">
        <div className="flex flex-col lg:w-full lg:flex-row space-y-16 lg:space-y-0 items-center justify-between lg:items-start">
          {/* logo */}
          <div className="lg:w-full">
            <img className="" src={Logo} alt="" />
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <h2 className="text-xl  font-medium mb-3">Company</h2>
            <p className="mb-2">Services</p>
            <p className="mb-2">Templates</p>
            <p className="mb-2">Pricing</p>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <h2 className="text-xl  font-medium mb-3">Support</h2>
            <p className="mb-2">How it works</p>
            <p className="mb-2">FAQs</p>
          </div>
          <div className="flex w-full flex-col items-center justify-start text-start">
            <h2 className="text-xl  font-medium mb-3">Contact Us</h2>
            <div className="flex gap-4 ">
              <FaPhoneAlt className="text-blue-500" />
              <p className="mb-2">(+234) 8123456789</p>
            </div>
            <div className="flex gap-4">
              <MdEmail className="text-blue-500" />
              <p className="mb-2">Contact@cveresumes.com</p>
            </div>

            {/* social icons */}
            <div className="flex w-full space-x-6 my-8 items-center justify-center">
              {social.map((item, index) => {
                const { href, icon } = item;
                return (
                  <a
                    key={index}
                    className="text-accent text-[28px] "
                    href={href}
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        {/* copyright */}
        <div className="flex flex-col lg:flex-row gap-y-2 border-t-2 lg:gap-x-8 border-blue-200 w-full place-items-center">
          <p className="pt-4 lg:pt-0">© Falt Incorporated 2023</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Refund Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
