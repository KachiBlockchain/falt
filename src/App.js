import React from "react";

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import JobTitle from "./components/JobTitle";
import About from "./components/About";
import Pricing from "./components/Pricing";
import OpenDoor from "./components/OpenDoor";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import BackToTopButton from "./components/BackToTopButton";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="lg:bg-bg lg:bg-cover lg:bg-no-repeat">
      <Header />
      <Hero />
      <JobTitle />
      <About />
      <Pricing />
      <Testimonials />
      <FAQ />
      <OpenDoor />
      <BackToTopButton />
      <Footer />
    
    </div>
  );
};

export default App;
