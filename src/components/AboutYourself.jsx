import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import progress2 from "../assets/img/progress2.png";
import AIWriter from "../assets/img/AI Writer.png";
import MultitaskingRafiki from "../assets/img/Multitasking-rafiki.png";
import message from "../assets/img/message.png";
import Header from "./Header";
import Footer from "./Footer";
import Swal from "sweetalert2";

const AboutYourself = () => {
  const [email, setEmail] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [address, setAddress] = useState("");
  const [Phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const { user, logIn, googleSignIn, logOut, userName, firstName } =
    useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {};

  const handleGoogleSignIn = async (e) => {};

  return (
    <>
      <Header />
      <div className="flex bg-signbg bg-no-repeat pt-[100px] bg-cover flex-col lg:flex-row items-center justify-center gap-16 py-[100px]">
        <div className="max-w-[500px] text-center lg:flex basis-[50%]">
          <h1 className="text-black uppercase text-[18px] my-4 font-bold">
            Tell us more about yourself
          </h1>
          <img
            src={progress2}
            alt="Login"
            className="object-cover w-full h-full"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full basis-[50%] flex flex-col justify-center items-center  p-8  max-w-[555px] max-h-[669px]"
        >
          <div className="col-span-2">
            <textarea
              className="mt-1 mb-4 p-2 w-[300px] lg:w-[500px] h-[200px] border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
              placeholder="Tell us about your journey: your career, expertise and aspirations."
            />
          </div>
          <img className=" hover:pointer-cursor text-white font-bold py-2 px-2 mb-8 rounded-xl " src={AIWriter} />
          <Link to="/AboutYourLastJob">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl w-[200px]"
            type="Submit"
          >
            Continue
          </button>
          </Link>
          <Link to="/dashboard/home" className="text-gray-600 mt-4 underline">
            Close and go to Dashboard
          </Link>
        </form>
        <div className="px-[20px] flex items-end justify-between w-full">
          <img src={MultitaskingRafiki} alt="Login" className="" />
          <img src={message} alt="Login" className="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutYourself;
