import { useEffect, useState } from "react";
import Clients from "../components/Clients";
import ContactUsModal from "../components/ContactUsModal";
import OurTeam from "../components/OurTeam";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import WhatWeOffer from "../components/WhatWeOffer";
import WhoWeAre from "../components/WhoWeAre";
import WhyChooseUs from "../components/WhyChooseUs";
import Header from "../components/Header";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 0); // No delay; can adjust for timing if needed

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <div className="relative w-full  ">
    
      <div className="relative">
          <Header />
        {/* Background Video */}
        <video
          className="object-cover"
          src="/Videos/engine.mp4" // Replace with your video source
          autoPlay
          muted
          loop
        />
        {/* Overlay for shading effect */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      

        {/* Content on the left side of the video */}
        <div className="absolute top-1/2 md:w-[1000px]  left-0 transform -translate-y-1/2 px-[20px] md:px-[100px] text-light-gray">
          <div className="text-[60px] md:text-[80px] leading-[90px] font-semibold mb-4">
            Precision in Every Frame, Crafting Cinematic Excellence
          </div>

          <p className=" md:text-[18px] ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             <span  className={`metaball ${loaded ? "loaded" : ""}`} >Vitae enim maiores porro, facere culpa aliquid provident! </span>
            veritatis sed pariatur facilis blanditiis consequatur autem maiores
            deleniti laboriosam. Ipsam, asperiores!
          </p>
          <button
            onClick={handleClick}
            className="mt-5  font-[500] hover:bg-golden-brown text-[18px] hover:text-light-gray py-[10px] px-8  transition-colors duration-300 bg-transparent border-dashed border-light-gray border-[1px] text-golden-brown"
          >
            Get Quote
          </button>
        </div>
      </div>

      <ContactUsModal isOpen={isOpen} setIsOpen={setIsOpen} />

      <Projects />
      <WhoWeAre />
      <WhatWeOffer />
      <WhyChooseUs />
      <OurTeam />
      <Clients />
      <Testimonials />
    </div>
  );
};

export default HomePage;
