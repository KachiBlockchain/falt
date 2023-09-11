import React from "react";

import TestiImage1 from "../assets/img/man.png";
import TestiImage2 from "../assets/img/girl.png";
import TestiImage3 from "../assets/img/girl2.png";
import rating from "../assets/img/rating 8.png";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title ">
            What our users say
          </h2>
          <div className="hidden lg:flex gap-16">
            <div>
              <div className="flex gap-[14px]">
                <img className="w-16 h-16" src={TestiImage1} alt="" />
                <div>
                  <p className="text-[18px] text-start  ">Jonathan Noore</p>
                  <img
                    className="w-[45px] h-[50px] -mt-4 "
                    src={rating}
                    alt=""
                  />
                  <p className="text-[14px] text-start -mt-4 ">
                    Breathed new life into my CV!
                  </p>
                  <p className="text-[14px] text-start ">
                    Perfectly showcased my
                  </p>
                  <p className="text-[14px] text-start ">
                    leadership abilities.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-[14px]">
                <img className="w-16 h-16" src={TestiImage2} alt="" />
                <div>
                  <p className="text-[18px] text-start  ">Jonathan Noore</p>
                  <img
                    className="w-[45px] h-[50px] -mt-4 "
                    src={rating}
                    alt=""
                  />
                  <p className="text-[14px] text-start -mt-4 ">
                    Breathed new life into my CV!
                  </p>
                  <p className="text-[14px] text-start ">
                    Perfectly showcased my
                  </p>
                  <p className="text-[14px] text-start ">
                    leadership abilities.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-[14px]">
                <img className="w-16 h-16" src={TestiImage3} alt="" />
                <div>
                  <p className="text-[18px] text-start  ">Jonathan Noore</p>
                  <img
                    className="w-[45px] h-[50px] -mt-4 "
                    src={rating}
                    alt=""
                  />
                  <p className="text-[14px] text-start -mt-4 ">
                    Breathed new life into my CV!
                  </p>
                  <p className="text-[14px] text-start ">
                    Perfectly showcased my
                  </p>
                  <p className="text-[14px] text-start ">
                    leadership abilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <div>
              <div className="flex gap-[14px]">
                <img className="w-16 h-16" src={TestiImage1} alt="" />
                <div>
                  <p className="text-[18px] text-start  ">Jonathan Noore</p>
                  <img
                    className="w-[45px] h-[50px] -mt-4 "
                    src={rating}
                    alt=""
                  />
                  <p className="text-[14px] text-start -mt-4 ">
                    Breathed new life into my CV!
                  </p>
                  <p className="text-[14px] text-start ">
                    Perfectly showcased my
                  </p>
                  <p className="text-[14px] text-start ">
                    leadership abilities.
                  </p>
                </div>
                <img className="w-16 h-16" src={TestiImage2} alt="" />
              </div>
            </div>
            <div className="mt-10">
              <div className="flex gap-[14px]">
                <img className="w-16 h-16" src={TestiImage3} alt="" />
                <div>
                  <p className="text-[18px] text-start  ">Grace Majokun</p>
                  <img
                    className="w-[45px] h-[50px] -mt-4 "
                    src={rating}
                    alt=""
                  />
                  <p className="text-[14px] text-start -mt-4 ">
                    Stands out! High-quality CVs
                  </p>
                  <p className="text-[14px] text-start ">
                    and helpful interview question
                  </p>
                  <p className="text-[14px] text-start ">suggestions.</p>
                </div>
                <img className="w-16 h-16" src={TestiImage3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
