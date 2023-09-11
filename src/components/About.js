import React from "react";
// import image

import Image from "../assets/img/about.webp";
const About = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col  gap-24">
          {/* Tailored CV */}
          <div className="flex flex-col lg:flex-row lg:flex lg:gap-16 items-center text-center lg:items-center lg:justify-center lg:text-left">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 lg:flex lg:items-start lg:text-start">
                Tailored CV
              </h2>
              <p className="mb-8 lg:max-w-[500px]">
                Create a standout CV effortlessly with our AI-powered builder.
                Analyze your skills and experience for a personalized,
                attention-grabbing resume that reflects your uniqueness and
                boosts your chances of landing your dream job
              </p>
              <button className="btn items-center justify-center  btn-md my-4 bg-blue-400 rounded-[10px] hover:bg-blue-400 md:btn-lg transition-all ">
                <a href="">Create my resume</a>
              </button>
            </div>
            <div className="flex flex-col mt-16 lg:max-w-[500px] items-center bg-white shadow-2xl py-7 px-5 rounded-md text-center lg:items-start lg:text-left">
              <div className="flex flex-col">
                <h2 className="text-3xl  px-5 lg:text-4xl font-medium lg:font-extrabold mb-3">
                  Experience
                </h2>
                <p className="mb-8 px-2">
                  • Assisted in various HR functions, including recruitment,
                  onboarding, benefits administration, and performance
                  management. <br />• Collaborated with best AI (ChatGPt -
                  OpenAI)
                </p>
              </div>
            </div>
          </div>
          {/* Tailored Cover Letter */}
          <div className="flex flex-col lg:flex-row lg:flex lg:gap-16 items-center text-center lg:items-center lg:justify-center lg:text-left">
            <div className="lg:order-2 flex flex-col items-center justify-center">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
                Tailored Cover Letter
              </h2>
              <p className="mb-8 lg:max-w-[500px]">
                Impress recruiters with our Tailored Cover Letter feature. Our
                AI analyzes your CV and job description to create a compelling
                and unique cover letter that aligns perfectly with the position.
                Stand out as the ideal candidate and showcase your personality
                with a persuasive letter crafted by our intelligent system
              </p>
              <button className="btn items-center justify-center btn-md my-4 bg-blue-400 rounded-[10px] hover:bg-blue-400 md:btn-lg transition-all ">
                <a href="">Make Cover Letter</a>
              </button>
            </div>
            <div className="flex lg-order-1 flex-col mt-16 lg:max-w-[500px] items-center bg-white shadow-2xl py-7 px-5 rounded-md text-center lg:items-start lg:text-left">
              <div className="flex flex-col">
                <h2 className="text-3xl  px-5 lg:text-4xl font-medium lg:font-extrabold mb-3">
                  Cover Letter
                </h2>
                <p className="mb-8 px-2">
                  I am delighted to submit my application for the HR Manager
                  role at XYZ. As a dedicated and accomplished HR Professional
                  with a passion for fostering a positive work culture and
                  driving organizational success
                </p>
              </div>
            </div>
          </div>
          {/* Interview Question */}
          <div className="flex flex-col lg:flex-row lg:flex lg:gap-16 items-center text-center lg:items-center lg:text-left">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
                Interview Questions
              </h2>
              <p className="mb-8 lg:max-w-[500px]">
                Ace interviews confidently with our AI-driven tailored
                questions. Impress employers, showcase your skills seamlessly,
                and secure interview success. No more jitters - just the perfect
                fit for the job
              </p>
              <button className="btn items-center justify-center btn-md my-4 bg-blue-400 rounded-[10px] hover:bg-blue-400 md:btn-lg transition-all ">
                <a href="">Generate Questions</a>
              </button>
            </div>
            <div className="flex flex-col mt-16 lg:max-w-[500px] items-center bg-white shadow-2xl py-7 px-5 rounded-md text-center lg:items-start lg:text-left">
              <div className="flex flex-col">
                <h2 className="text-3xl  px-5 lg:text-4xl font-medium lg:font-extrabold mb-3">
                  Interview Questions
                </h2>
                <p className="mb-8 px-2">
                  • Can you describe a situation where you successfully resolved
                  a complex employee relations issue? How did you approach the
                  problem, and what strategies did you implement to achieve a
                  positive outcome for both the employee and the organization?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
