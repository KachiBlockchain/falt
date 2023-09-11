import React from "react";

import template from "../assets/img/mobileheroimg.png";
import template1 from "../assets/img/herodesktopimg.png";
const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center  lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container lg:pt-32 mx-auto h-full">
        <div className="flex flex-col lg:flex-row lg:gap-16 items-center h-full pt-8">
          {/* left side */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <h1 className="text-4xl text-black leading-[44px] md:text-2xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px]  ">
              Ctrl + V, that’s all you have to do
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left lg:max-w-[500px]">
              Our AI analyzes job descriptions and generates personalized CVs
              and cover letters with one click.
            </p>
            <form className="space-y-4 w-full place-items-center max-w-[780px]">
              <div className="flex place-items-center flex-col">
                <label className="text-black -ml-[150px] lg:-ml-[450px]  font-bold text-[20px] ">
                  Job Description
                </label>
                <textarea
                  className="textarea my-4 w-[300px] lg:w-[600px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Job Description"
                ></textarea>
                <button className="btn items-center justify-center  btn-md my-4 bg-blue-400 rounded-[10px] hover:bg-blue-400 md:btn-lg transition-all ">
                  <a href="">Create my resume</a>
                </button>
              </div>
            </form>
          </div>
          {/* right side */}
          <div className="flex flex-1 mt-16 lg:mt-0 justify-end items-center h-full">
            <img className="lg:hidden" src={template} alt="" />
            <img className="hidden lg:block" src={template1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
