import React from "react";

import template from "../assets/img/footerTemplate.png";
import template1 from "../assets/img/footerTemplateLG.png";

const OpenDoor = () => {
  return (
    <section id="template" className="section">
      <div className="container mx-auto flex flex-col lg:items-center lg:justify-center lg:flex-row">
        <div className="flex lg:flex-1 flex-col items-center text-center">
          <h2 className="section-title ">
            Open doors today, with your tailored resume
          </h2>
          <p className="subtitle">
            Craft a tailored CV with our AI Resume Builder that impresses
            recruiters and lands you exciting opportunities. Unleash your
            potential and secure the job you deserve!"
          </p>
          <button className="btn lg:-mt-[60px] items-center justify-center btn-md my-4 bg-blue-400 rounded-[10px] hover:bg-blue-400 md:btn-lg transition-all ">
            <a href="">Create my resume</a>
          </button>
        </div>
        {/* right side */}
        <div className="flex mt-10 flex-1 justify-center items-center h-full">
          <img className="lg:hidden" src={template} alt="" />
          <img className="hidden lg:block" src={template1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default OpenDoor;
