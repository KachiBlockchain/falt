import React from "react";

import template from "../assets/img/template.png";
import template2 from "../assets/img/template1.png";
import Footer from "./Footer";
import Header from "./Header";
import message from "../assets/img/message.png";
import { Link } from "react-router-dom";

const ChooseTemplate = () => {
  const resume = [
    { name: "General", img: template2 },
    { name: "Modern", img: template },
    { name: "General", img: template2 },
    { name: "Modern", img: template },
  ];
  return (
    <>
      <Header />
      <div className="mt-32 flex flex-col items-center relative justify-center">
        <h1 className="text-black uppercase text-[20px] my-4 font-bold">
          Choose Templates
        </h1>
        <p className="w-[320px] text-[18px] mb-4 font-bold md:w-[400px] lg:w-full">
          Choose from hundreds of templates
        </p>
        <Link to="/DefaultDashboard" className="grid lg:grid-cols-4 items-center justify-center ">
          {resume.map((item, index) => (
            <li
              className="flex flex-col gap-0 items-center justify-center"
              key={index}
            >
              <p className="-mb-8">{item.name}</p>
              <img className="-mt-8" src={item.img} alt="" />
            </li>
          ))}
        </Link>
      </div>
      <div>
        <div className="absolute bottom-9 right-3">
          <img src={message} alt="Login" className="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChooseTemplate;
