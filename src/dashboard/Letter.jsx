import React, { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import add from "../assets/img/newcoverletter.png";
import hrmanager from "../assets/img/hrmanagercl.png";
import credit from "../assets/img/credit2.png";
import { Link, Navigate } from "react-router-dom";
import user1 from "../assets/img/user1.png";

const Letter = () => {
  const [fullName, setFullName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [generatedCoverLetter, setGeneratedCoverLetter] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCoverLetter, setShowCoverLetter] = useState(false);
  const API_KEY = "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";

  const getMessage = async () => {
    console.log("clicked");
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `craft the cover letter paragraph using these placeholders: [Name]: ${fullName}, [Job Title]: ${jobTitle}, [Company Name]: ${companyName}`,
          },
        ],
      }),
    };
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        options
      );
      const data = await response.json();
      console.log(data);
      const coverLetter = data.choices[0].message.content;
      setGeneratedCoverLetter(coverLetter);
      setShowCoverLetter(true);
    } catch (error) {
      console.error(error);
    }
    // setLoading(true);  will still work on this
  };

  const [open, setOpen] = useState(false);
  const showDropDown = () => {
    setOpen(!open);
  };
  const handleLogout = async () => {
    try {
      await logOut();
      Navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const { logOut, user, userName, firstName } = useUserAuth();
  return (
    <div className=" bg-white">
      <div className="flex justify-between items-center">
        <div className="py-[20px]">
          <h1 className="text-black text-[28px] my-4 font-bold pl-4">
            My Cover Letter
          </h1>
        </div>
        <div className="lg:flex hidden flex-col lg:flex-row items-center justify-evenly gap-2 pt-2">
          <img className="w-4 h-4 " src={credit} alt="" />
          <p>25 </p>
          <p> Credits</p>
          <img src="" alt="" />

          {
            <>
              {/* <p>{user}</p> */}
              <div
                className="flex flex-col lg:flex-row items-center  relative"
                onClick={showDropDown}
              >
                <div className="h-[50px] w-[50px] rounded-full bg-[#4e73df] cursor-pointer flex items-center justify-center relative">
                  <img
                    src={user.photoURL ? user.photoURL : user1}
                    className="rounded-full"
                    alt=""
                  />
                </div>
                <p className="text-[14px] uppercase py-2 text-black font-semibold px-4">
                  {firstName ? firstName : userName}
                </p>
                {open && (
                  <div className="relative inline-block group">
                    <div className="absolute top-[60px] -left-[300px] flex flex-col  bg-white border border-gray-300 shadow-md p-8 rounded-md items-center justify-center ">
                      <img
                        src={user.photoURL ? user.photoURL : user1}
                        alt="Sample Image"
                        className="rounded-full my-10 cursor-pointer"
                        id="imageId"
                      />
                      <ul className="list-none items-center justify-center flex flex-col text-black text-[18px]">
                        <li className="hover:bg-gray-100 uppercase px-3 py-2 cursor-pointer">
                          {user.displayName ? user.displayName : userName}
                        </li>
                        <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer">
                          {user.email}
                        </li>
                        <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer">
                          <Link to="/">Home </Link>
                        </li>
                        <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer">
                          <Link to="/dashboard">Dashboard </Link>
                        </li>
                        <li
                          onClick={handleLogout}
                          className="hover:bg-gray-100 px-3 py-2 cursor-pointer"
                        >
                          Logout
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </>
          }
        </div>
      </div>
      <div className="grid grid-cols-2 lg:flex">
        <img className="w-[200px] h-[290px]" src={add} alt="" />
        <img className="w-[200px] h-[290px]" src={hrmanager} alt="" />
      </div>
      <div className="space-y-4 w-full place-items-center max-w-[780px]">
        <div className="flex flex-col place-items-center gap-4">
          <label className="text-black text-start -ml-[200px] lg:-ml-[500px] font-bold text-[20px]">
            Full Name
          </label>
          <input
            className="input mb-4 w-[300px] lg:w-[600px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="flex flex-col place-items-center gap-4">
          <label className="text-black text-start -ml-[200px] lg:-ml-[500px] font-bold text-[20px]">
            Job Title
          </label>
          <input
            className="input mb-4 w-[300px] lg:w-[600px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="Website Designer"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col place-items-center gap-4">
          <label className="text-black text-start -ml-[200px] lg:-ml-[500px] font-bold text-[20px]">
            Company
          </label>
          <input
            className="input mb-4 w-[300px] lg:w-[600px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="Company that you will submit the cover letter to"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          {showCoverLetter && (
            <div className="flex flex-col">
              <label className="text-black my-4 font-bold text-[20px]">
                Cover Letter
              </label>
              <textarea
                className="textarea my-4 lg:w-[600px] w-[300px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Here is your Cover letter"
                value={generatedCoverLetter}
                readOnly
              />
            </div>
          )}
        </div>
        <div className=" flex items-center justify-center">
          <button
            type="button"
            className="btn items-center justify-center btn-md my-4 bg-blue-400 rounded-[10px] hover:bg-blue-400 md:btn-lg transition-all"
            onClick={getMessage}
          >
            Generate My Cover Letter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Letter;
