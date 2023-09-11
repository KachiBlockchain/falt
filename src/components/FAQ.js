import React from "react";

import { services } from "../data";
const FAQ = () => {
  return (
    <section id="service" className="section ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title ">Frequently Asked Questions</h2>
          <p className="subtitle">
            Still have questions? Its okay, we anticipated that
          </p>
        </div>
        <div className="grid gap-8">
          {services.map((service, index) => {
            const { icon, name } = service;

            return (
              <div
                className="border-2 flex  justify-between items-center border-blue-100 p-6 rounded-2xl"
                key={index}
              >
                <h4 className="text-xl mb-2">{name}</h4>
                <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center text-[28px] ">
                  {icon}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
