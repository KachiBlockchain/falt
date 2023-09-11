import React from "react";
import smallCredit from "../assets/img/smallCredit.png";
const Pricing = () => {
  return (
    <section id="pricing" className="section flex items-center justify-center  bg-no-repeat bg-cover">
      <div className="container ">
        {/* section title */}
        <div
          data-aos="fade-up-right"
          data-aos-duration="2000"
          data-aos-delay="900"
          className="flex flex-col  items-center"
        >
          <h2 className="section-title text-black ">Our Pricing Plan</h2>
          <p className="black-footer-text pb-2">Explore our Credit Pack</p>
          <div>
            <p className="black-footer-text text-left pb-2 gap-x-2 flex">
              1 <img className="w-4 h-4" src={smallCredit} alt="" /> = 1 CV + 1
              Cover Letter
            </p>
            <p className="black-footer-text pb-2 gap-x-2 flex">
              2 <img className="w-4 h-4" src={smallCredit} alt="" /> = 1 Set of
              Interview Questions
            </p>
          </div>
        </div>
        {/* item grid */}
        <div className="flex flex-col justify-center mt-4 items-center">
          <div
            // data-aos="fade-down-left"
            // data-aos-duration="2000"
            // data-aos-delay="900"
            className=" gap-x-8 mt-4 lg:flex-row gap-y-2 grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center"
          >
            <div className="flex flex-col group relative my-8">
              <div className="bg-white p-8 z-10  rounded-[20px] w-[150px] h-[160px] items-center justify-center flex flex-col shadow-lg shadow-blue-400 ">
                <div className="flex flex-col group-hover:text-[#3171ED] transition ease-in-out duration-700 cursor-pointer items-center justify-center text-black">
                  <img src={smallCredit} alt="" />
                  <span className="font-bold"> 5 </span> Credits <br /> ₦1000
                </div>
              </div>
              <div className="hidden items-end text-[24px] font-bold pb-2 group-hover:flex text-white h-16  justify-center bg-[#3171ED] -mt-[22px]  rounded-[20px] shadow-lg">
                Buy
              </div>
            </div>
            <div className="flex flex-col group relative my-8">
              <div className="bg-white p-8 z-10  rounded-[20px] w-[150px] h-[160px] items-center justify-center flex flex-col shadow-lg shadow-blue-400 ">
                <div className="flex flex-col group-hover:text-[#3171ED] transition ease-in-out duration-700 cursor-pointer items-center justify-center text-black">
                  <img src={smallCredit} alt="" />
                  <span className="font-bold"> 10 </span> Credits <br /> ₦1800
                </div>
              </div>
              <div className="hidden items-end text-[24px] font-bold pb-2 group-hover:flex text-white h-16  justify-center bg-[#3171ED] -mt-[22px]  rounded-[20px] shadow-lg">
                Buy
              </div>
            </div>
            <div className="flex flex-col group relative my-8">
              <div className="bg-white p-8 z-10  rounded-[20px] w-[150px] h-[160px] items-center justify-center flex flex-col shadow-lg shadow-blue-400 ">
                <div className="flex flex-col group-hover:text-[#3171ED] transition ease-in-out duration-700 cursor-pointer items-center justify-center text-black">
                  <img src={smallCredit} alt="" />
                  <span className="font-bold"> 25 </span> Credits <br /> ₦3500
                </div>
              </div>
              <div className="hidden items-end text-[24px] font-bold pb-2 group-hover:flex text-white h-16  justify-center bg-[#3171ED] -mt-[22px]  rounded-[20px] shadow-lg">
                Buy
              </div>
            </div>
            <div className="flex flex-col group relative my-8">
              <div className="bg-white p-8 z-10  rounded-[20px] w-[150px] h-[160px] items-center justify-center flex flex-col shadow-lg shadow-blue-400 ">
                <div className="flex flex-col group-hover:text-[#3171ED] transition ease-in-out duration-700 cursor-pointer items-center justify-center text-black">
                  <img src={smallCredit} alt="" />
                  <span className="font-bold"> 50 </span> Credits <br /> ₦6500
                </div>
              </div>
              <div className="hidden items-end text-[24px] font-bold pb-2 group-hover:flex text-white h-16  justify-center bg-[#3171ED] -mt-[22px]  rounded-[20px] shadow-lg">
                Buy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
