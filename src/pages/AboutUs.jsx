import { useState } from "react";
import ContactUsModal from "../components/ContactUsModal";
import Header from "../components/Header";
import WhoWeAre  from "../components/WhoWeAre"
import Testimonials from "../components/Testimonials";
import Clients from "../components/Clients"
import WhyChooseUs from "../components/WhyChooseUs"




const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div
        className="relative px-[100px] w-full h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/Images/background.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Header on top */}
        <Header />

        {/* Text Content */}
        <div className="absolute  top-1/2 left-[30px] md:left-[100px] transform -translate-y-1/2 text-light-gray">
          <h1 className="text-[30px] md:text-[70px] font-[500] mb-4">
            About Us
          </h1>
          <p className="text-[16px] font-[500] md:text-[20px] max-w-[500px]">
            Here you can explore all the amazing projects I've worked on. From
            design to development
          </p>
          <button
            onClick={handleClick}
            className="mt-5  font-[500] hover:bg-golden-brown text-[18px] hover:text-light-gray py-[10px] px-8  transition-colors duration-300 bg-transparent border-dashed border-light-gray border-[1px] text-golden-brown"
          >
            Get Quote
          </button>
        </div>
        <ContactUsModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>


    <WhoWeAre />
    <Clients />
    <Testimonials />
   
    <WhyChooseUs />
    </>
  );
};

export default AboutUs;
