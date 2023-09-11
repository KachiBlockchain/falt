import React from "react";
import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { FiUser, FiLogOut } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { BsFolder, BsWallet2 } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { VscCreditCard } from "react-icons/vsc";
import { BiHome } from "react-icons/bi";
import { LuFileQuestion } from "react-icons/lu";
import { MdManageAccounts } from "react-icons/md";
import { SlLogout } from "react-icons/sl";
import { FaUserAlt } from "react-icons/fa";
import { useUserAuth } from "../context/UserAuthContext";
import { MdInsights } from "react-icons/md";
import { RiCouponLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Navigate } from "react-router-dom";

const SidebarData = ({ toggle }) => {
  const { logOut, user, firstName } = useUserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
      Navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const [activeLink, setActiveLink] = useState(null);

  const datas = [
    { text: "Home", link: "home", icon: <BiHome /> },
    { text: "My Resumes", link: "resume", icon: <CgFileDocument /> },
    {
      text: "My Cover Letters",
      link: "letter",
      icon: <IoDocumentTextOutline />,
    },
    {
      text: "Interview Questions",
      link: "question",
      icon: <LuFileQuestion />,
      margin: true,
    },
    { text: "Credits", link: "credit", icon: <VscCreditCard /> },
    { text: "My Profile", link: "profile", icon: <FaUserAlt /> },
    { text: "Account", link: "account", icon: <MdManageAccounts /> },
  ];

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div className="mt-16">
      {datas.map((data, index) => {
        const isActive = activeLink === index;

        return (
          <NavLink
            to={data?.link}
            className={`${
              toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            } flex items-center p-4 my-2  rounded-lg cursor-pointer hover:bg-white transition-all duration-300 ${
              isActive ? "bg-white" : ""
            }`}
            key={index}
            onClick={() => handleLinkClick(index)}
          >
            <div className="mr-8 text-[1.7rem] text-brown">{data.icon}</div>
            <div
              className={`${
                toggle ? "opacity-0 delay-200" : ""
              } text-[1rem] text-brown whitespace-pre`}
            >
              {data.text}
            </div>
          </NavLink>
        );
      })}
      <div
        onClick={() => handleLogout()}
        className={`${
          toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
        } flex items-center p-4 rounded-lg cursor-pointer hover:bg-white transition-all duration-300 `}
      >
        <div className="mr-8 text-[1.7rem] text-brown">
          <SlLogout />
        </div>
        <div
          className={`${
            toggle ? "opacity-0 delay-200" : ""
          } text-[1rem] text-brown whitespace-pre`}
        >
          Logout
        </div>
      </div>
      ;
    </div>
  );
};

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`bg-[#8BC6EC] h-[96%] ml-6 p-4 transition-all duration-500 relative  ${
        toggle ? "w-[5.8rem]" : "w-[20rem]"
      } `}
    >
      <SidebarData toggle={toggle} />
      <div
        className="absolute top-[1rem] flex justify-center items-center left-6 mb-3 w-10 h-10 bg-[#8BC6EC] rounded-full cursor-pointer"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <GiHamburgerMenu
          className={`${
            toggle ? "rotate-180" : ""
          } text-3xl transition-all duration-300 my-32`}
        />
      </div>
    </div>
  );
};

export default Sidebar;

// import { CgFileDocument } from "react-icons/cg";
// import { Link, NavLink, Navigate } from "react-router-dom";

// const SidebarData = () => {
//   const [toggle, setToggle] = useState(false);
//   const { logOut, user, firstName } = useUserAuth();
//   const handleLogout = async () => {
//     try {
//       await logOut();
//       Navigate("/");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   const menus = [
//     { name: "Home", link: "home", icon: BiHome },
//     { name: "My Resumes", link: "resume", icon: CgFileDocument },
//     { name: "My Cover Letters", link: "letter", icon: IoDocumentTextOutline },
//     {
//       name: "Interview Questions",
//       link: "question",
//       icon: LuFileQuestion,
//       margin: true,
//     },
//     { name: "Credits", link: "credit", icon: VscCreditCard },
//     { name: "My Profile", link: "profile", icon: FaUserAlt },
//     { name: "Account", link: "account", icon: MdManageAccounts },
//   ];
//   const [activeLink, setActiveLink] = useState(null);

//   const datas = [
//     {
//       id: 1,
//       icon: <RxDashboard />,
//       text: "Dashboard",
//     },
//     {
//       id: 2,
//       icon: <MdInsights />,
//       text: "Sales Insights",
//     },
//     {
//       id: 3,
//       icon: <RiCouponLine />,
//       text: "Coupons",
//     },
//     {
//       id: 4,
//       icon: <FiUser />,
//       text: "Team Member",
//     },
//     {
//       id: 5,
//       icon: <AiOutlineMessage />,
//       text: "Messages",
//     },
//     {
//       id: 6,
//       icon: <BsFolder />,
//       text: "File Manager",
//     },
//     {
//       id: 7,
//       icon: <BsWallet2 />,
//       text: "Wallet",
//     },
//     {
//       id: 8,
//       icon: <FiLogOut />,
//       text: "Logout",
//     },
//   ];

//   const handleLinkClick = (index) => {
//     setActiveLink(index);
//   };

//   return (
//     <div className="">
//       {menus.map((data, index) => {
//         const isActive = activeLink === index;

//         return (
//           <>
//             <div className="mt-4 flex flex-col gap-4 relative">
//               {menus?.map((menu, i) => (
//                 <>
//                   <Link
//                     to={menu?.link}
//                     key={i}
//                     className={` ${
//                       menu?.margin && "mt-5"
//                     } group flex items-center text-xl gap-3.5 font-medium p-2 my-2 hover:bg-white rounded-md`}
//                   >
//                     <div>{React.createElement(menu?.icon, { size: "20" })}</div>
//                     <h2
//                       style={{ transitionDelay: `${i + 3}00ms` }}
//                       className={`whitespace-pre duration-500 ${
//                         !toggle && " opacity-0 translate-x-28 overflow-hidden "
//                       } text-[#4B68A0]`}
//                     >
//                       {menu?.name}
//                     </h2>
//                     {/* <h2
//                       className={`${
//                         toggle && "hidden"
//                       } absolute left-48 bg-blue-300 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
//                     >
//                       {menu?.name}
//                     </h2> */}
//                   </Link>
//                 </>
//               ))}
//               {/* <div className="group flex items-center cursor-pointer text-xl gap-3.5 font-medium p-2 my-2 hover:bg-white rounded-md">
//                 <div onClick={() => handleLogout()}>
//                   {React.createElement(SlLogout, { size: "20" })}
//                 </div>
//                 <button
//                   onClick={() => handleLogout()}
//                   style={{ transitionDelay: "900ms" }}
//                   className={`whitespace-pre duration-500 ${
//                     !toggle && " opacity-0 translate-x-28 overflow-hidden "
//                   } text-[#4B68A0]`}
//                 >
//                   Logout
//                 </button>
//                 <h2
//                   className={`${
//                     toggle && "hidden"
//                   } absolute left-48 bg-blue-300 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
//                 >
//                   Logout
//                 </h2>
//               </div> */}
//             </div>
//             {/* <NavLink
//               to={data?.link}
//               className={`${
//                 toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
//               } flex items-center mt-2 p-4 rounded-lg cursor-pointer hover:bg-white transition-all duration-300 last:absolute left-4 bottom-4 ${
//                 isActive ? "bg-gray-400" : ""
//               }`}
//               key={data.id}
//               onClick={() => handleLinkClick(index)}
//             >
//               {/* <div>{React.createElement(data?.icon, { size: "20" })}</div>
//               <div className="mr-8 text-[1.7rem] text-brown">
//                 {<data.icon />}
//               </div>
//               <div
//                 className={`${
//                   toggle ? "opacity-0 delay-200" : ""
//                 } text-[1rem] text-brown whitespace-pre`}
//               >
//                 {data.name}
//               </div>
//             </NavLink>
//             {/* <div className="group flex items-center cursor-pointer text-xl gap-3.5 font-medium p-2 my-2 hover:bg-white rounded-md">
//               <div onClick={() => handleLogout()}>
//                 {React.createElement(SlLogout, { size: "20" })}
//               </div>
//               <button
//                 onClick={() => handleLogout()} // Add an onClick event handler for the button
//                 style={{ transitionDelay: "900ms" }}
//                 className={`whitespace-pre duration-500 ${
//                   !toggle && " opacity-0 translate-x-28 overflow-hidden "
//                 } text-[#4B68A0]`}
//               >
//                 Logout
//               </button>
//               <h2
//                 className={`${
//                   toggle && "hidden"
//                 } absolute left-48 bg-blue-300 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
//               >
//                 Logout
//               </h2>
//             </div> */}
//           </>
//         );
//       })}
//     </div>
//   );
// };

// const Sidebar = () => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <div
//       className={`bg-glass h-[96%]  rounded-3xl ml-6 p-4 border transition-all duration-500 border-solid border-glass relative  ${
//         toggle ? "w-[5.8rem]" : "w-[20rem]"
//       } `}
//     >
//       <SidebarData toggle={toggle} />
//       <div
//         className="absolute top-[7rem] flex justify-center items-center -left-5 w-10 h-10 bg-glass rounded-full cursor-pointer "
//         onClick={() => {
//           setToggle(!toggle);
//         }}
//       >
//         <BiChevronLeft
//           className={`${
//             toggle ? "rotate-180" : ""
//           } text-3xl transition-all duration-300`}
//         />
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// // import React, { useState } from "react";
// // import { HiMenuAlt3 } from "react-icons/hi";
// // import { IoDocumentTextOutline } from "react-icons/io5";
// // import { VscCreditCard } from "react-icons/vsc";
// // import { BiHome } from "react-icons/bi";
// // import { LuFileQuestion } from "react-icons/lu";
// // import { MdManageAccounts } from "react-icons/md";
// // import { SlLogout } from "react-icons/sl";
// // import { FaUserAlt } from "react-icons/fa";
// // import { useUserAuth } from "../context/UserAuthContext";

// // import { CgFileDocument } from "react-icons/cg";
// // import { Link, Navigate } from "react-router-dom";

// // const Sidebar = () => {
// //   const { logOut, user, firstName } = useUserAuth();
// //   const handleLogout = async () => {
// //     try {
// //       await logOut();
// //       Navigate("/");
// //     } catch (error) {
// //       console.log(error.message);
// //     }
// //   };
// //   const menus = [
// //     { name: "Home", link: "home", icon: BiHome },
// //     { name: "My Resumes", link: "resume", icon: CgFileDocument },
// //     { name: "My Cover Letters", link: "letter", icon: IoDocumentTextOutline },
// //     {
// //       name: "Interview Questions",
// //       link: "question",
// //       icon: LuFileQuestion,
// //       margin: true,
// //     },
// //     { name: "Credits", link: "credit", icon: VscCreditCard },
// //     { name: "My Profile", link: "profile", icon: FaUserAlt },
// //     { name: "Account", link: "account", icon: MdManageAccounts },
// //   ];

// //   const [open, setOpen] = useState(true);
// //   return (
// //     <>
// //       <div>
// //         <div
// //           className={`bg-sidebarbg  bg-cover bg-no-repeat h-[2850px] lg:h-[1000px] ${
// //             open ? "w-72" : "w-16"
// //           } duration-500 text-[#4B68A0] px-4`}
// //         >
// //           <div className="py-3 flex justify-end">
// //             <HiMenuAlt3
// //               size={26}
// //               className="cursor-pointer"
// //               onClick={() => setOpen(!open)}
// //             />
// //           </div>
// //           <div className="mt-4 flex flex-col gap-4 relative">
// //             {menus?.map((menu, i) => (
// //               <>
// //                 <Link
// //                   to={menu?.link}
// //                   key={i}
// //                   className={` ${
// //                     menu?.margin && "mt-5"
// //                   } group flex items-center text-xl gap-3.5 font-medium p-2 my-2 hover:bg-white rounded-md`}
// //                 >
// //                   <div>{React.createElement(menu?.icon, { size: "20" })}</div>
// //                   <h2
// //                     style={{ transitionDelay: `${i + 3}00ms` }}
// //                     className={`whitespace-pre duration-500 ${
// //                       !open && " opacity-0 translate-x-28 overflow-hidden "
// //                     } text-[#4B68A0]`}
// //                   >
// //                     {menu?.name}
// //                   </h2>
// //                   <h2
// //                     className={`${
// //                       open && "hidden"
// //                     } absolute left-48 bg-blue-300 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
// //                   >
// //                     {menu?.name}
// //                   </h2>
// //                 </Link>
// //               </>
// //             ))}
// //             <div className="group flex items-center cursor-pointer text-xl gap-3.5 font-medium p-2 my-2 hover:bg-white rounded-md">
// //               <div onClick={() => handleLogout()}>
// //                 {React.createElement(SlLogout, { size: "20" })}
// //               </div>
// //               <button
// //                 onClick={() => handleLogout()} // Add an onClick event handler for the button
// //                 style={{ transitionDelay: "900ms" }}
// //                 className={`whitespace-pre duration-500 ${
// //                   !open && " opacity-0 translate-x-28 overflow-hidden "
// //                 } text-[#4B68A0]`}
// //               >
// //                 Logout
// //               </button>
// //               <h2
// //                 className={`${
// //                   open && "hidden"
// //                 } absolute left-48 bg-blue-300 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
// //               >
// //                 Logout
// //               </h2>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Sidebar;
