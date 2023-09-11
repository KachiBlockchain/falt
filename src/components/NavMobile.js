// import React, { useState } from "react";
// // import navigation data

// import { navigation } from "../data";
// import { GiHamburgerMenu } from "react-icons/gi";

// import { XIcon } from "@heroicons/react/outline";

// import Socials from "./Socials";

// import { motion } from "framer-motion";

// import { Link } from "react-scroll";
// const NavMobile = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const circleVariants = {
//     hidden: {
//       scale: 0,
//     },
//     visible: {
//       scale: 180,
//       transition: {
//         type: "spring",
//         stiffness: 160,
//         damping: 60,
//       },
//     },
//   };

//   const ulVariants = {
//     hidden: {
//       opacity: 0,
//     },
//     visible: {
//       opacity: 1,
//       transition: {
//         delay: 0.1,
//       },
//     },
//   };
//   return (
//     <nav className="relative">
//       {/* menu icons */}
//       <div
//         onClick={() => setIsOpen(true)}
//         className="cursor-pointer text-white"
//       >
//         <GiHamburgerMenu className="w-8 h-8 text-[#3171ED]" />
//       </div>

//       {/* circl */}
//       <motion.div
//         variants={circleVariants}
//         initial="hidden"
//         animate={isOpen ? "visible" : "hidden"}
//         className="w-4 h-4 rounded-full bg-accent fixed top-0 right-0"
//       ></motion.div>

//       {/* menu  */}

//       <motion.ul
//         variants={ulVariants}
//         initial="hidden"
//         animate={isOpen ? "visible" : " "}
//         className={`${
//           isOpen ? "right-0" : "-right-full"
//         } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden `}
//       >
//         {/* close icon */}
//         <div
//           onClick={() => setIsOpen(false)}
//           className="cursor-pointer absolute top-8 right-8"
//         >
//           <XIcon className="w-8 h-8" />
//         </div>
//         {navigation.map((item, index) => {
//           return (
//             <li key={index} className="mb-8">
//               <Link to={item.href} smooth={true} duration={500} offset={-70} className="text-xl cursor-pointer capitalize">
//                 {item.name}
//               </Link>
//             </li>
//           );
//         })}
//       </motion.ul>
//     </nav>
//   );
// };

// export default NavMobile;


import React, { useState } from "react";
import { navigation } from "../data";
import logo from "../assets/img/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { XIcon } from "@heroicons/react/outline";
import { MenuAlt3Icon } from "@heroicons/react/outline";

import Socials from "./Socials";

import { motion } from "framer-motion";

// import { Link } from "react-router-dom";
import { Link as NewSection } from "react-scroll";
import MobileUserBox from "./MobileUserBox";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  // framer motion variants

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className="relative flex flex-col items-start justify-start">
      {/* menu icon */}
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-black"
      >
        <GiHamburgerMenu className="w-8 text-blue-400 h-8" />
      </div>
      {/* cricle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-ham bg-no-repeat bg-cover bg-top left-0 top-0 right-0"
      ></motion.div>

      {/* menu */}
      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full h-[100vh] flex flex-col justify-center items-center transition-all duration-300 overflow-hidden  `}
      >
        {/* close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer flex justify-between items-center gap-[100px] mb-8 -mt-[200px]"
        >
          <img src={logo} alt="" />
          <XIcon className=" w-8 text-blue-400 h-8 flex" />
        </div>
        <div className="mb-[30px]">
          {navigation.map((item, index) => {
            return (
              <li key={index} className="mb-8">
                <NewSection
                  to={item.href}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="hantext text-xl cursor-pointer capitalize  flex justify-between items-center gap-[150px] text-black "
                >
                  <p>{item.name}</p>
                  <p>{item.icon}</p>
                </NewSection>
              </li>
            );
          })}
        </div>

        <div className=" items-center justify-center flex">
          <MobileUserBox />
        </div>
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
