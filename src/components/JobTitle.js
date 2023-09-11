import React from "react";
import paste from "../assets/img/pasteIcon.png";
const JobTitle = () => {
  return (
    <section
      id="howitworks"
      className="min-h-[146px] mb-16 flex flex-col place-items-center lg:flex lg:items-center lg:justify-center "
    >
      <div className="container lg:py-32 lg:flex lg:items-center lg:justify-center  mx-auto">
        <div className="flex flex-col  xl:flex-row gap-24">
          <div className="flex flex-col items-center  text-center lg:items-start lg:text-left">
            <div className="flex flex-col lg:text-start lg:justify-center lg:items-start lg:gap-4 place-items-center p-2">
              <h1 className="text-3xl text-start lg:text-4xl font-medium lg:font-extrabold mb-3">
                How It Works
              </h1>
              <div className="flex items-start justify-start gap-4">
                <img src={paste} />
                <p className="mb-4 text-black">Paste Your Job</p>
              </div>
              <p className="mb-8 text-start max-w-[500px]">
                Jumpstart your journey to a tailored resume by simply pasting
                your job description. Our AI-powered system analyzes the
                requirements and ensures your CV aligns perfectly with the
                position you desire.
              </p>
            </div>
          </div>
        </div>
        <form className="space-y-4 w-full place-items-center max-w-[780px]">
          <div className="flex flex-col place-items-center gap-4">
            <label className="text-black text-start -ml-[200px] lg:-ml-[500px]  font-bold text-[20px] ">
              Job Title
            </label>

            <input
              className="input mb-4 w-[300px] lg:w-[600px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Enter Job Title"
            />
          </div>
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
    </section>
  );
};

export default JobTitle;
