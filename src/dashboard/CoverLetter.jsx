import React from "react";
import add from "../assets/img/addicon.png";
import template from "../assets/img/template.png";
import { useUserAuth } from "../context/UserAuthContext";

const resume = [
  { name: "Kachi", img: template },
  { name: "Falt", img: template },
  { name: "James", img: template },
  { name: "Rome", img: template },
];
const CoverLetter = () => {
  const { firstName } = useUserAuth();
 
  return (
    <div className="pt-[80px]">
      <div className="p-[20px]">
        <h1 className="text-black text-[28px] my-4 font-bold">
          Welcome, {firstName}.
        </h1>
        <p>
          Craft your Dream Career, One Resume at a Time - Welcome to Your
          Future!
        </p>
      </div>
      <div>
        <img src={add} alt="" />
      </div>
      <div>
        <h1 className="text-black text-[28px] my-4 font-bold">
          Resumes Templates.
        </h1>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 ">
          {resume.map((item, index) => (
            <li key={index}>
              <img src={item.img} alt="" />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="text-black text-[28px] my-4 font-bold">
          Cover Letter Templates.
        </h1>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 ">
          {resume.map((item, index) => (
            <li key={index}>
              <img src={item.img} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CoverLetter;
